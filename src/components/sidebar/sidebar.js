import Image from 'next/image';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { SlSocialDribbble, SlSocialVkontakte } from 'react-icons/sl';
import { FaGooglePlusG } from 'react-icons/fa';

const Sidebar = ({ image, name, id }) => {
  return (
    <div className='w-screen md:w-[300px] md:min-h-screen bg-white rounded-r-[63px] shadow-2xl overflow-hidden'>
      <div className='flex items-center justify-center mb-4'>
        <Image
          src={'/assets/Creative-Mansion-logo.png'}
          width={70}
          height={30}
          alt='Logo'
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='p-[0.25rem] w-[120px] h-[120px] bg-gradient-to-b from-[#4A0F54] to-[#FF6300] rounded-full'>
          <Image
            src={image}
            alt='student passport'
            width={120}
            height={120}
            className='rounded-full'
          />
        </div>
        <h2 className='font-bold text-xs py-2'>
          {name.firstName} {name.middleName} {name.lastName}
        </h2>
        <p className='flex font-bold text-xs text-[rgb(74,15,84)]'>
          ID: <span className='flex text-[#FF6300] pl-1'> {id}</span>
        </p>
        <div className='py-2 text-[#4A0F54] flex'>
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
        <div className='w-screen py-2 flex flex-col gap-2 items-center justify-center'>
          <div className='w-screen p-3 bgGrad cursor-pointer'>
            <p className='text-md text-white uppercase text-center'>
              Dashboard
            </p>
          </div>
          <div className='p-3 w-screen text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
            <p className='text-md uppercase text-center'>Edit Profile</p>
          </div>
          <div className='p-3 w-screen text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
            <p className='text-md uppercase text-center'>Classes</p>
          </div>
          <div className='p-3 w-screen text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
            <p className='text-md uppercase text-center'>Materials</p>
          </div>
          <div className='p-3 w-screen text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
            <p className='text-md uppercase text-center'>Post Ideas</p>
          </div>
          <div className='p-3 w-screen text-[#4A0F54] bg-[#F1F1F1] hover:bgGrad hover:text-white cursor-pointer'>
            <p className='text-md uppercase text-center'>All Ideas</p>
          </div>
          <div className='p-3 w-screen bg-[#F1F1F1] cursor-pointer'>
            <p className='text-md text-[#FF6300] uppercase text-center'>
              Log Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
