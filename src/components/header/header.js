import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className=' text-white px-6 py-4 flex w-screen'>
      <nav className='flex items-center justify-between w-screen'>
        {/* Logo */}
        <div className='text-white font-bold'>
          <Link href={''}>
            {/* <Image src='' alt='Logo' /> */}
            logo
          </Link>
        </div>

        {/* NavLinks */}
        <ul className='items-center space-x-10 hidden lg:flex'>
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

        <div className='bg-orange-700 px-3 py-2 rounded-full text-xs cursor-pointer hover:text-orange-200'>
          <p className=''>Log Out</p>
        </div>
      </nav>
    </header>
  );
};
export default Header;
