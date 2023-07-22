import { GiPlayButton } from 'react-icons/gi';

const Jobs = () => {
  return (
    // TODO: Optimize the "More Detail" div by positioning it absolutely

    <div className=''>
      <h2 className='text-lg mt-10 lg:mt-0 mb-4 text-center'>Latest Jobs</h2>
      <div className='grid place-items-center md:grid-cols-2 md:gap-y-14 md:gap-x-8 lg:grid-cols-3 gap-16'>
        <div className='w-[260px] h-[157px] rounded-[14px] rounded-bl-none rounded-br-none bg-[#292929]'>
          <div className='p-6 flex flex-col items-center justify-center gap-3 pb-3'>
            <h3 className='text-[#FF6300] text-lg font-bold self-start'>
              Digital Marketing
            </h3>
            <p className='text-white text-[11px]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              facere a hic, nulla et asperiores voluptate fuga laboriosam,
              mollitia
            </p>
          </div>
          <div className='bg-[#D9D9D9] p-4 rounded-bl-[14px] rounded-br-[14px] flex items-center justify-around cursor-pointer'>
            <p className='text-[#4A0F54] text-lg'>More Details</p>
            <>
              <GiPlayButton size={'1.5rem'} className='text-[#FF6300]' />
            </>
          </div>
        </div>
        <div className='w-[260px] h-[157px] rounded-[14px] rounded-bl-none rounded-br-none bg-[#292929]'>
          <div className='p-6 flex flex-col items-center justify-center gap-3 pb-3'>
            <h3 className='text-[#FF6300] text-lg font-bold self-start'>
              Digital Marketing
            </h3>
            <p className='text-white text-[11px]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              facere a hic, nulla et asperiores voluptate fuga laboriosam,
              mollitia
            </p>
          </div>
          <div className='bg-[#D9D9D9] p-4 rounded-bl-[14px] rounded-br-[14px] flex items-center justify-around cursor-pointer'>
            <p className='text-[#4A0F54] text-lg'>More Details</p>
            <>
              <GiPlayButton size={'1.5rem'} className='text-[#FF6300]' />
            </>
          </div>
        </div>

        <div className='w-[260px] h-[157px] rounded-[14px] rounded-bl-none rounded-br-none bg-[#292929]'>
          <div className='p-6 flex flex-col items-center justify-center gap-3 pb-3'>
            <h3 className='text-[#FF6300] text-lg font-bold self-start'>
              Digital Marketing
            </h3>
            <p className='text-white text-[11px]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              facere a hic, nulla et asperiores voluptate fuga laboriosam,
              mollitia
            </p>
          </div>
          <div className='bg-[#D9D9D9] p-4 rounded-bl-[14px] rounded-br-[14px] flex items-center justify-around cursor-pointer'>
            <p className='text-[#4A0F54] text-lg'>More Details</p>
            <>
              <GiPlayButton size={'1.5rem'} className='text-[#FF6300]' />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
