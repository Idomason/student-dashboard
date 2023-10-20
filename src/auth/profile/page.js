'use client';

import Image from 'next/image';
import Link from 'next/link';
import avatar from '../../../../public/assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidate } from '../../../../helper/validate';
import { useState } from 'react';
import convertToBase64 from '../../../../helper/convert';

export default function Profile() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address: '',
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  async function profileImageUpload(event) {
    const base64 = await convertToBase64(event.target.files[0]);
    setFile(base64);
  }

  return (
    <div className='pageBg mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex items-center justify-center h-screen'>
        <div className='glass' style={{ width: '40%', paddingTop: '1em' }}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-3xl font-bold'>Profile</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500 font-extralight'>
              Create Your Profile to Access Dashboard
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <Image
                  className='profileImg'
                  src={file || avatar}
                  width={200}
                  height={200}
                  alt='user image'
                />
              </label>

              <input
                onChange={profileImageUpload}
                type='file'
                name='profile'
                id='profile'
              />
            </div>
            <input type='file' name='' id='' />
            <div className='flex flex-col items-center gap-6'>
              <div className='name flex w-3/4 gap-10'>
                <input
                  {...formik.getFieldProps('firstName')}
                  className='textbox'
                  type='text'
                  placeholder='First Name'
                />
                <input
                  {...formik.getFieldProps('lastName')}
                  className='textbox'
                  type='text'
                  placeholder='Last Name'
                />
              </div>

              <div className='name flex w-3/4 gap-10'>
                <input
                  {...formik.getFieldProps('mobile')}
                  className='textbox'
                  type='number'
                  placeholder='Mobile No.'
                />
                <input
                  {...formik.getFieldProps('email')}
                  className='textbox'
                  type='email'
                  placeholder='Email'
                />
              </div>

              <input
                {...formik.getFieldProps('address')}
                className='textbox'
                type='text'
                placeholder='Address'
              />
              <button className='btn' type='submit'>
                Update
              </button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Come back later?{' '}
                <Link className='text-red-500' href='/'>
                  Log Out
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
