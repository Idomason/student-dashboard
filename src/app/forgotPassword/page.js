'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

export default function ForgotPassword() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      await axios.post('api/auth/signIn', user);

      setUser({
        email: '',
      });
      toast.success('Password reset successfully');
      router.push('/dashboard');
      console.log('Login successful');
    } catch (error) {
      toast.error('Password reset failed');
    }
  }

  return (
    <section className='w-screen h-screen flex items-center justify-between'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='w-screen h-full bg-secondary text-white p-4 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary'>
          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-col items-center justify-center'>
              <p className='lg:text-2xl md:text-xl font-bold py-4 '>
                Enter Your Email
              </p>
              <span className='inline-flex gap-12 my-3'>
                <label htmlFor='authEmail'>Email Address</label>
                <input
                  className='p-1 focus:outline-none focus:ring-1 focus:ring-primary rounded-sm text-black'
                  type='email'
                  name='authEmail'
                  id='authEmail'
                  value={user.email}
                  onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                  }
                  placeholder='Enter email'
                />
              </span>
              <span className='inline-flex gap-11 mb-3'>
                <label htmlFor='authPass'>New Password</label>
                <input
                  className='p-1 text-black focus:outline-none focus:ring-1 focus:accent-primary focus:ring-primary rounded-sm'
                  type='password'
                  name='authPass'
                  id='authPass'
                  value={user.newPassword}
                  onChange={(event) =>
                    setUser({ ...user, newPassword: event.target.value })
                  }
                  placeholder='Enter password'
                />
              </span>
              <span className='inline-flex gap-5 mb-3'>
                <label htmlFor='authPass'>Confirm Password</label>
                <input
                  className='p-1 text-black focus:outline-none focus:ring-1 focus:accent-primary focus:ring-primary rounded-sm'
                  type='password'
                  name='authPass'
                  id='authPass'
                  value={user.confirmPassword}
                  onChange={(event) =>
                    setUser({ ...user, confirmPassword: event.target.value })
                  }
                  placeholder='Enter password'
                />
              </span>
              <button className='bg-blue-500 hover:bg-blue-700 text-white w-full my-2 py-2 rounded-sm'>
                Send
              </button>
              <div className='mt-6'>
                <span>
                  <p className='font-light text-sm inline-block mr-3'>
                    Don't have an account yet?
                  </p>
                  <Link
                    className='hover:transition-all hover:ease-in-out hover:text-white hover:underline '
                    href='/signUp'
                  >
                    Create Account
                  </Link>
                </span>
              </div>
            </div>
            {/* <div className='w-full flex items-center justify-center'></div> */}
          </form>
        </div>
      </div>
    </section>
  );
}
