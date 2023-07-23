import { GiPlayButton } from 'react-icons/gi';

const NewsAndIdeas = () => {
  return (
    <div className=''>
      <h2 className='text-lg mt-20 mb-6 text-center'>Latest News and Ideas</h2>
      <div className='grid grid-col-1 place-items-center md:gap-y-14 md:gap-x-8 lg:grid-cols-3 gap-16'>
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

export default NewsAndIdeas;
