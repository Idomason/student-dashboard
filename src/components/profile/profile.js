'use client';

import Image from 'next/image';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { SlSocialDribbble, SlSocialVkontakte } from 'react-icons/sl';
import { FaGooglePlusG } from 'react-icons/fa';
import { Dancing_Script } from '@next/font/google';
import avatar from '@/images/profile.png';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

// 034377

const Profile = ({
  passport,
  firstName,
  lastName,
  studentId,
  toggleForm,
  setIsToggleForm,
  logout,
}) => {
  return (
    <div className='w-full hidden md:block md:fixed md:top-0 md:left-0 md:w-[300px] bg-white rounded-r-[63px] shadow-2xl overflow-hidden'>
      <div className='flex items-center justify-center my-4'>
        <Image
          src={'/assets/Creative-Mansion-logo.png'}
          width={70}
          height={30}
          alt='Logo'
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='p-[0.25rem] w-[120px] h-[120px] bg-gradient-to-r from-[#4A0F54] to-[#FF6300] rounded-full'>
          <label htmlFor='passport'>
            <Image
              src={passport || avatar}
              alt='student passport'
              width={120}
              height={120}
              className='rounded-full'
            />
          </label>
        </div>
        <h2 className='font-bold text-xs py-2'>
          {firstName} {lastName}
        </h2>
        <p className='flex font-bold text-xs text-[rgb(74,15,84)]'>
          ID: <span className='flex text-[#FF6300] pl-1'> {studentId}</span>
        </p>
        <div className='py-2 text-[#4A0F54] flex'>
          <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full hover:cursor-pointer hover:text-[#FF6300] hover:border-[#FF6300]'>
            <FaGooglePlusG size={'1rem'} />
          </div>
          <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full hover:cursor-pointer hover:text-[#FF6300] hover:border-[#FF6300]'>
            <SlSocialDribbble size={'1rem'} />
          </div>
          <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full hover:cursor-pointer hover:text-[#FF6300] hover:border-[#FF6300]'>
            <AiOutlineTwitter size={'1rem'} />
          </div>
          <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full hover:cursor-pointer hover:text-[#FF6300] hover:border-[#FF6300]'>
            <AiOutlineGoogle size={'1rem'} />
          </div>
          <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full hover:cursor-pointer hover:text-[#FF6300] hover:border-[#FF6300]'>
            <SlSocialVkontakte size={'1rem'} />
          </div>
          <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full hover:cursor-pointer hover:text-[#FF6300] hover:border-[#FF6300]'>
            <SlSocialDribbble size={'1rem'} />
          </div>
        </div>
        <div className='w-screen py-2 flex flex-col gap-2 items-center justify-center'>
          <div
            className={`w-screen p-3 text-secondary bg-bgMain ${
              toggleForm === 1 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={() => setIsToggleForm((toggleForm = 1))}
          >
            <p className='text-md uppercase text-center'>Dashboard</p>
          </div>
          <div
            className={`p-3 w-screen text-secondary bg-bgMain ${
              toggleForm === 2 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={() => setIsToggleForm((toggleForm = 2))}
          >
            <p className='text-md uppercase text-center'>Edit Profile</p>
          </div>
          <div
            className={`p-3 w-screen text-secondary bg-bgMain ${
              toggleForm === 3 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={() => setIsToggleForm((toggleForm = 3))}
          >
            <p className='text-md uppercase text-center'>Classes</p>
          </div>
          <div
            className={`p-3 w-screen text-secondary bg-bgMain ${
              toggleForm === 4 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={() => setIsToggleForm((toggleForm = 4))}
          >
            <p className='text-md uppercase text-center'>Materials</p>
          </div>
          <div
            className={`p-3 w-screen text-secondary bg-bgMain ${
              toggleForm === 5 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={() => setIsToggleForm((toggleForm = 5))}
          >
            <p className='text-md uppercase text-center'>Post Ideas</p>
          </div>
          <div
            className={`p-3 w-screen text-secondary bg-bgMain ${
              toggleForm === 6 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={() => setIsToggleForm((toggleForm = 6))}
          >
            <p className='text-md uppercase text-center'>All Ideas</p>
          </div>
          <div
            className='p-3 w-screen bg-bgMain cursor-pointer'
            onClick={logout}
          >
            <p
              className={`text-xl font-bold text-primary uppercase text-center ${dancingScript.className}`}
            >
              Log Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
