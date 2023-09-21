'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';

const Header = ({ onAddQuery }) => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
    onAddQuery(active);
  };

  return (
    <header className='w-screen text-white px-6 py-2 bg-black flex lg:hidden md:hidden fixed md:relative top-0 left-0'>
      <nav className='flex items-center justify-between w-screen'>
        {/* Logo */}
        <div className='text-secondary font-bold text-lg'>
          <Link href={''}>
            <Image
              src='/assets/Creative-Mansion-logo.png'
              width={100}
              height={100}
              alt='Logo'
            />
          </Link>
        </div>

        <div
          className='bg-[#4A0F54] active:bg-[#FF6300] px-3 py-3 rounded-full text-xs cursor-pointer hover:text-[#FF6300]'
          onClick={handleClick}
        >
          <RxDashboard className='text-lg active:text-white' />
        </div>
      </nav>
    </header>
  );
};
export default Header;
