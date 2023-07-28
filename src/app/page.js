'use client';

import { useState, useEffect } from 'react';
import { Inter } from '@next/font/google';
import data from '../../public/data/data.json';
import Header from '@/components/header/header';
import Profile from '@/components/profile/profile';
import StudentProfile from '@/components/student-profile/student-profile';
import Mobile from '@/components/mobile/mobile';
import { getAPIData } from '../redux/features/api/api-slice';
import { useDispatch, useSelector } from 'react-redux';

// export function getStaticProps(context) {
//   return {
//     props: data,
//   };
// }

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  const [query, setQuery] = useState('');
  // const { data } = useSelector((state) => state.apiData);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAPIData);
  // }, []);

  return (
    <main className={`min-h-screen bg-[#E6DFF1]  ${inter.className}`}>
      <div className='lg:h-screen flex flex-col items-center md:justify-between md:flex-row h-screen overflow-x-hidden scrollbar-hide relative'>
        <Header onQuery={setQuery} />
        <Mobile data={data} toggle={query} />
        <Profile data={data} />
        <StudentProfile data={data} toggle={query} />
      </div>
    </main>
  );
}
