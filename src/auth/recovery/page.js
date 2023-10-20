'use client';

import Image from 'next/image';
import Link from 'next/link';
import avatar from '../../../../public/assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../../../../helper/validate';

export default function Recovery() {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
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
        <div className=' glass'>
          <div>
            <div className='title flex flex-col items-center'>
              <h4 className='text-3xl font-bold'>Recovery</h4>
              <span className='py-4 text-lg w-3/4 text-center text-gray-500 font-extralight'>
                Enter OTP to recover password
              </span>
            </div>
            <form className='py-20'>
              <div className='py-4 flex flex-col items-center gap-6'>
                <div className='input text-center'>
                  <span className='py-4 text-sm text-left text-gray-500'>
                    Enter 6 digit OTP sent to your email address
                  </span>
                  <input
                    className='textbox'
                    type='password'
                    placeholder='Enter OTP code'
                  />
                </div>
                <button className='btn' type='submit'>
                  Sign In
                </button>
              </div>
              <div className='text-center py-4'>
                <span className='text-gray-500'>
                  Can't get OTP?{' '}
                  <button className='text-red-500'>Resend</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
