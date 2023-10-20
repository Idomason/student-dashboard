'use client';

import Image from 'next/image';
import Link from 'next/link';
import avatar from '../../../../public/assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidate } from '../../../../helper/validate';
import { useState } from 'react';
import convertToBase64 from '../../../../helper/convert';

export default function Register() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: 'your_email@mail.com',
      username: '',
      password: '',
    },
    validate: registerValidate,
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
        <div className='glass' style={{ width: '40%' }}>
          <div>
            <div className='title flex flex-col items-center'>
              <h4 className='text-3xl font-bold'>Create An Account</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-500 font-extralight'>
                Create Account to Access Dashboard
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
              <div className=' flex flex-col items-center gap-6'>
                <input
                  {...formik.getFieldProps('email')}
                  className='textbox'
                  type='email'
                  placeholder='Email'
                />
                <input
                  {...formik.getFieldProps('username')}
                  className='textbox'
                  type='text'
                  placeholder='Username'
                />
                <input
                  {...formik.getFieldProps('password')}
                  className='textbox'
                  type='password'
                  placeholder='Password'
                />
                <button className='btn' type='submit'>
                  Create Account
                </button>
              </div>
              <div className='text-center py-4'>
                <span className='text-gray-500'>
                  Already have an account?{' '}
                  <Link className='text-red-500' href='/'>
                    Log In
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
