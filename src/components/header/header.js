'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import PageLoader from 'next/dist/client/page-loader';
import MobileViewDashboard from '../mobile-view-dashboard/mobile-view-dashboard';

const Header = ({ onQuery }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    onQuery(active);
  };

  // let toggle = active ? '' : 'hidden';

  return (
    <header className=' text-white px-6 py-2 bg-black flex w-screen lg:hidden md:hidden fixed md:relative'>
      <nav className='flex items-center justify-between w-screen'>
        {/* Logo */}
        <div className='text-[#4A0F54] font-bold text-lg'>
          <Link href={''}>
            <Image
              src='/assets/Creative-Mansion-logo.png'
              width={100}
              height={100}
              alt='Logo'
            />
          </Link>
        </div>

        {/* NavLinks */}
        <ul className='items-center space-x-10 hidden lg:flex text-[#4A0F54]'>
          <li>
            <a className='hover:text-orange-700' href=''>
              Tests
            </a>
          </li>
          <li>
            <a className='hover:text-orange-700' href=''>
              Class
            </a>
          </li>
          <li>
            <a className='hover:text-orange-700' href=''>
              Upload
            </a>
          </li>
        </ul>

        <div className='bg-[#4A0F54] active:bg-[#FF6300] px-3 py-3 rounded-full text-xs cursor-pointer hover:text-[#FF6300]'>
          <RxDashboard
            className='text-lg active:text-white'
            onClick={handleClick}
          />
        </div>
      </nav>
    </header>
  );
};
export default Header;
