'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Image from 'next/image';
import profileImg from '@/images/woman.png';

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      await axios.post('api/auth/signIn', user);

      setUser({
        email: '',
        password: '',
      });
      toast.success('Login successful');
      router.push('/dashboard');
    } catch (error) {
      toast.error('Login not successful');
    }
  }

  return (
    <section className='w-full h-screen flex justify-between'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='w-full bg-[#ffdba5] text-white text-center hidden md:block'>
        <div className='h-full w-full p-0'>
          <Image
            className='w-screen h-full object-cover'
            width={120}
            height={120}
            src={profileImg}
            alt='Image'
          />
        </div>
      </div>
      <div className='w-full h-full bg-secondary text-white p-4 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary'>
          <form onSubmit={handleSubmit}>
            <div>
              <p className='lg:text-2xl md:text-xl font-bold py-4 '>
                Login To Access Dashboard
              </p>
              <span className='inline-flex gap-10 my-3 text-white'>
                <label htmlFor='authEmail'>Email</label>
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
              <span className='inline-flex gap-2 text-white'>
                <label htmlFor='authPass'>Password</label>
                <input
                  className='p-1 text-black focus:outline-none focus:ring-1 focus:accent-primary focus:ring-primary rounded-sm'
                  type='password'
                  name='authPass'
                  id='authPass'
                  value={user.password}
                  onChange={(event) =>
                    setUser({ ...user, password: event.target.value })
                  }
                  placeholder='Enter password'
                />
              </span>
            </div>
            <div className='w-full flex items-center justify-center ml-7'>
              <button className='text-white my-4 py-2 px-4 max-max bg-blue-500 hover:bg-blue-700 rounded-sm '>
                Sign In
              </button>
            </div>
            <div className='mt-6'>
              <span>
                <p className='font-light text-sm inline-block mr-3 text-white'>
                  Do not have an account yet?
                </p>
                <Link
                  className='hover:transition-all hover:ease-in-out hover:text-white hover:underline '
                  href='/signUp'
                >
                  Create Account
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
