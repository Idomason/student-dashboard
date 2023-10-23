import CreateNewUser from '@/components/create-account/create-account';
import Image from 'next/image';
import profileImg from '@/images/wooman.png';

export default function SignUp() {
  return (
    <section className='w-full h-screen md:flex justify-between overflow-hidden'>
      <div className='w-1/2 bg-[#ffdba5] text-white text-center'>
        <div className='h-full w-full p-0'>
          <Image
            className='w-screen h-full hidden md:block object-cover'
            width={120}
            height={120}
            src={profileImg}
            alt='Image'
          />
        </div>
      </div>
      <div className='w-full h-full bg-gray-700 text-white p-4 relative overflow-y-scroll'>
        <div className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary'>
          <CreateNewUser />
        </div>
      </div>
    </section>
  );
}
