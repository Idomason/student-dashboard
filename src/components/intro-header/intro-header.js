'use client';
import TodayDate from '../../helper/date/date';

const IntroHeader = ({ users }) => {
  return (
    // md:ml-24 | lg:ml-0
    <div className='lg:w-full md:w-3/4 w-4/5 mx-2 leading-3 grid grid-cols-2 lg:grid-cols-2 p-5 rounded-xl bg-black text-white place-items-center mb-10'>
      <h3 className='place-self-start text-sm lg:text-xl'>
        Welcome back, {users.map((user) => user.firstName)}!
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
