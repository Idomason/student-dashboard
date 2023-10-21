'use client';

import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function VerifyEmail() {
  const [token, setToken] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function verifyUserEmail() {
    try {
      await axios.post('/api/auth/verifyEmail', { token });
      setVerified(true);
    } catch (error) {
      setError(true);
      // console.log(error.response.data);
    }
  }

  useEffect(function () {
    const urlToken = window.location.search.split('=')[1];
    setToken(urlToken || '');
  }, []);

  useEffect(
    function () {
      if (token.length > 0) {
        verifyUserEmail();
      }
    },
    [token, verifyUserEmail]
  );

  return (
    <section className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl'>Verify Your Email</h1>
      <h2 className='p-2 bg-orange-500 text-black'>
        {token ? `${token}` : 'no token'}
      </h2>
      {verified && (
        <div>
          <h2 className='text-2xl'>Email Verified</h2>
          <Link className='text-blue-500' href='/signIn'>
            Login
          </Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className='text-2xl bg-red-500 text-black'>Error</h2>
        </div>
      )}
    </section>
  );
}
