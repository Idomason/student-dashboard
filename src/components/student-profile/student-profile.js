import Image from 'next/image';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';

import { SlSocialDribbble, SlSocialVkontakte } from 'react-icons/sl';
import { FaGooglePlusG } from 'react-icons/fa';
import VideoPlayer from '../video-player/video-player';
import Jobs from '../jobs/jobs';

// let date = new Date().toUTCString().slice(5, 16);
const todayDate = () => {
  const date = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleString('en-IN', options);
};

const StudentProfile = ({ image, name, id }) => {
  const today = todayDate();
  return (
    <div className='flex justify-between'>
      <div className='lg:w-[372px] md:w-[372px] bg-white rounded-[63px] p-10 shadow-2xl '>
        <div className='flex items-center justify-center mb-8'>
          <Image
            src={'/assets/Creative-Mansion-logo.png'}
            width={100}
            height={100}
            alt='Logo'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='p-[0.35rem] w-[200px] h-[200px] bg-gradient-to-b from-[#4A0F54] to-[#FF6300] rounded-full'>
            <Image
              src={image}
              alt='student passport'
              width={200}
              height={200}
              className='rounded-full'
            />
          </div>
          <h2 className='font-bold text-xs py-5'>
            {name.firstName} {name.middleName} {name.lastName}
          </h2>
          <p className='flex font-bold text-xs text-[#4A0F54]'>
            ID: <span className='flex text-[#FF6300] pl-1'> {id}</span>
          </p>
          <div className='py-5 text-[#4A0F54] flex'>
            <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full'>
              <FaGooglePlusG size={'1rem'} />
            </div>
            <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full'>
              <SlSocialDribbble size={'1rem'} />
            </div>
            <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full'>
              <AiOutlineTwitter size={'1rem'} />
            </div>
            <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full'>
              <AiOutlineGoogle size={'1rem'} />
            </div>
            <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full'>
              <SlSocialVkontakte size={'1rem'} />
            </div>
            <div className='p-1 flex items-center justify-center border-[1px] border-solid border-[#4A0F54] rounded-full'>
              <SlSocialDribbble size={'1rem'} />
            </div>
          </div>
          <div className='px-6 py-4 flex flex-col gap-4 items-center justify-center'>
            <div className='p-5 w-[372px] bgGrad cursor-pointer'>
              <p className='text-lg text-white uppercase text-center'>
                Dashboard
              </p>
            </div>
            <div className='p-5 w-[372px] text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
              <p className='text-lg uppercase text-center'>Edit Profile</p>
            </div>
            <div className='p-5 w-[372px] text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
              <p className='text-lg uppercase text-center'>Classes</p>
            </div>
            <div className='p-5 w-[372px] text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
              <p className='text-lg uppercase text-center'>Materials</p>
            </div>
            <div className='p-5 w-[372px] text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
              <p className='text-lg uppercase text-center'>Post Ideas</p>
            </div>
            <div className='p-5 w-[372px] text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
              <p className='text-lg uppercase text-center'>All Ideas</p>
            </div>
            <div className='p-5 w-[372px] bg-[#F1F1F1] cursor-pointer'>
              <p className='text-lg text-[#FF6300] uppercase text-center'>
                Log Out
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-5 rounded-xl bg-black text-white place-items-center'>
          <h3 className='place-self-start text-xl'>
            Welcome back, {name.firstName}!
          </h3>
          <h3 className='place-self-end text-xl'>Student Dashboard</h3>
          <p className='place-self-start'>
            <q className='text-[11px]'>
              Education is the most powerful weapon you can use to change the
              world
            </q>
          </p>
          <p className='place-self-end text-[11px]'>{today}</p>
        </div>
        <div>{/* <VideoPlayer /> */}</div>
        <div className='mt-20'>
          <h2 className='text-lg'>Latest Jobs</h2>
          <Jobs />
        </div>
      </div>
    </div>
  );
};
export default StudentProfile;
