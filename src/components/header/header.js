import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className=' text-white px-6 py-4 flex w-screen mb-8'>
      <nav className='flex items-center justify-between w-screen'>
        {/* Logo */}
        <div className='text-[#4A0F54] font-bold text-lg'>
          <Link href={''}>
            {/* <Image
              src='/assets/Creative-Mansion-logo.png'
              width={100}
              height={100}
              alt='Logo'
            /> */}
            Logo
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

        <div className='bg-[#4A0F54] px-3 py-2 rounded-full text-xs cursor-pointer hover:text-[#E6DFF1]'>
          <p className=''>Log Out</p>
        </div>
      </nav>
    </header>
  );
};
export default Header;
