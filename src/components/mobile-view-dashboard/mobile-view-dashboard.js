import Image from 'next/image';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { SlSocialDribbble, SlSocialVkontakte } from 'react-icons/sl';
import { FaGooglePlusG } from 'react-icons/fa';
import { Dancing_Script } from '@next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
});

const MobileViewDashboard = ({
  id,
  image,
  name,
  toggle,
  onToggle,
  toggleForm,
  setIsToggleForm,
}) => {
  function handleDashboard() {
    setIsToggleForm(1);
    onToggle((toggle) => !toggle);
  }

  function handleEditProfile() {
    setIsToggleForm(2);
    onToggle((toggle) => !toggle);
  }
  function handleClasses() {
    setIsToggleForm(3);
    onToggle((toggle) => !toggle);
  }
  function handleMaterials() {
    setIsToggleForm(4);
    onToggle((toggle) => !toggle);
  }
  function handlePostIdeas() {
    setIsToggleForm(5);
    onToggle((toggle) => !toggle);
  }
  function handleAllIdeas() {
    setIsToggleForm(6);
    onToggle((toggle) => !toggle);
  }

  return (
    <div
      className={`w-screen ${
        toggle ? '' : 'hidden'
      } md:absolute md:top-0 md:left-0 bottom-0 md:w-[300px] md:hidden block absolute top-[62px] left-0 bg-white shadow-2xl transition-all duration-300 ease-in-out delay-100`}
    >
      <div className='flex flex-col items-center justify-center'>
        <div className='p-[0.25rem] mt-2 w-[120px] h-[120px] bg-gradient-to-r from-[#4A0F54] to-[#FF6300] rounded-full'>
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
            className={`p-2 w-screen text-secondary bg-bgMain ${
              toggleForm === 1 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={handleDashboard}
          >
            <p className='text-xs uppercase text-center'>Dashboard</p>
          </div>
          <div
            className={`p-2 w-screen text-secondary bg-bgMain ${
              toggleForm === 2 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={handleEditProfile}
          >
            <p className='text-xs uppercase text-center'>Edit Profile</p>
          </div>
          <div
            className={`p-2 w-screen text-secondary bg-bgMain ${
              toggleForm === 3 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={handleClasses}
          >
            <p className='text-xs uppercase text-center'>Classes</p>
          </div>
          <div
            className={`p-2 w-screen text-secondary bg-bgMain ${
              toggleForm === 4 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={handleMaterials}
          >
            <p className='text-xs uppercase text-center'>Materials</p>
          </div>
          <div
            className={`p-2 w-screen text-secondary bg-bgMain ${
              toggleForm === 5 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={handlePostIdeas}
          >
            <p className='text-xs uppercase text-center'>Post Ideas</p>
          </div>
          <div
            className={`p-2 w-screen text-secondary bg-bgMain ${
              toggleForm === 6 ? 'bgGrad text-white' : ''
            } hover:bgGrad hover:text-white cursor-pointer`}
            onClick={handleAllIdeas}
          >
            <p className='text-xs uppercase text-center'>All Ideas</p>
          </div>
          <div className='p-2 w-screen bg-[#F1F1F1] cursor-pointer'>
            <p
              className={`text-lg font-bold text-[#FF6300] uppercase text-center ${dancingScript.className}`}
            >
              Log Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileViewDashboard;
