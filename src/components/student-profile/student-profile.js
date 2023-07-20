import Image from 'next/image';

const StudentProfile = ({ image, name, id }) => {
  return (
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
        <p className='flex font-bold text-xs'>
          ID: <span className='flex text-[#FF6300]'> {id}</span>
        </p>
        <div className='py-5 text-[#4A0F54]'>Social Icons</div>
        <div className='px-6 py-4 flex flex-col gap-4 items-center justify-center'>
          <div className='p-5 w-[372px] bgGrad'>
            <p className='text-lg text-white uppercase text-center'>
              Dashboard
            </p>
          </div>
          <div className='p-5 w-[372px] bg-[#F1F1F1]'>
            <p className='text-lg text-[#4A0F54] uppercase text-center'>
              Edit Profile
            </p>
          </div>
          <div className='p-5 w-[372px] bg-[#F1F1F1]'>
            <p className='text-lg text-[#4A0F54] uppercase text-center'>
              Classes
            </p>
          </div>
          <div className='p-5 w-[372px] bg-[#F1F1F1]'>
            <p className='text-lg text-[#4A0F54] uppercase text-center'>
              Materials
            </p>
          </div>
          <div className='p-5 w-[372px] bg-[#F1F1F1]'>
            <p className='text-lg text-[#4A0F54] uppercase text-center'>
              Post Ideas
            </p>
          </div>
          <div className='p-5 w-[372px] bg-[#F1F1F1]'>
            <p className='text-lg text-[#4A0F54] uppercase text-center'>
              All Ideas
            </p>
          </div>
          <div className='p-5 w-[372px] bg-[#F1F1F1]'>
            <p className='text-lg text-[#FF6300] uppercase text-center'>
              Log Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentProfile;
