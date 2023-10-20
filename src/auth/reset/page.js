'use client';

import Image from 'next/image';
import Link from 'next/link';
import avatar from '../../../../public/assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidate } from '../../../../helper/validate';

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: '',
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className='pageBg mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex items-center justify-center h-screen'>
        <div className='glass'>
          <div>
            <div className='title flex flex-col items-center'>
              <h4 className='text-3xl font-bold'>Reset</h4>
              <span className='py-4 text-xl w-2/3 text-center text-gray-500 font-extralight'>
                Enter new password
              </span>
            </div>
            <form className='py-20' onSubmit={formik.handleSubmit}>
              <div className=' flex flex-col items-center gap-6'>
                <input
                  {...formik.getFieldProps('password')}
                  className='textbox'
                  type='password'
                  placeholder='New Password'
                />
                <input
                  {...formik.getFieldProps('confirm_pwd')}
                  className='textbox'
                  type='password'
                  placeholder='Repeat Password'
                />
                <button className='btn' type='submit'>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
