'use client';

import { useState } from 'react';

import { Inter } from '@next/font/google';
import data from '../../public/data/data.json';
import Main from '@/components/main/main';
import Sidebar from '@/components/sidebar/sidebar';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  const [toggleForm, setIsToggleForm] = useState(1);
  const [post, setPost] = useState(false);

  // function handleFromToggle() {
  //   setIsToggleForm(!toggleForm);
  // }
  return (
    <main
      className={`h-full flex justify-between bg-bgMain  ${inter.className} overflow-x-hidden`}
    >
      <Sidebar
        data={data}
        // handleFromToggle={handleFromToggle}
        toggleForm={toggleForm}
        setIsToggleForm={setIsToggleForm}
      />
      <Main toggleForm={toggleForm} setIsToggleForm={setIsToggleForm} />
      {/* toggle={query} data={data} */}
    </main>
  );
}
