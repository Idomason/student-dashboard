'use client';

import { SessionProvider } from 'next-auth/react';


export default function AuthProvider({ children }) {
  return <SessionProvider className='bg-bgMain w-full h-full'>{children}</SessionProvider>;
}
