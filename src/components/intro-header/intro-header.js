'use client';
import TodayDate from '../../../utils/date/date';

const IntroHeader = ({ name }) => {
  return (
    <div className='w-auto h-auto leading-3 md:max-w-full md:grid grid-cols-2 hidden lg:grid-cols-2 p-5 rounded-xl bg-black text-white place-items-center mb-10 mx-3'>
      <h3 className='place-self-start text-sm lg:text-xl'>
        Welcome back, {name.firstName}!
      </h3>
      <h3 className='place-self-end text-sm lg:text-xl md:leading-3'>
        Student Dashboard
      </h3>

      <p className='place-self-start'>
        <q className='text-[9px] lg:text-[11px]'>
          Education is the most powerful weapon you can use to change the world
        </q>
      </p>
      <p className='place-self-end text-[9px] lg:text-[11px] md:leading-6'>
        <TodayDate />
      </p>
    </div>
  );
};

export default IntroHeader;
