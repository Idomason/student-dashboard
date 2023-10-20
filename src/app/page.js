'use client';

import { Inter } from '@next/font/google';
import Main from '@/components/main/main';
import Sidebar from '@/components/sidebar/sidebar';
import axios from 'axios';
import { useState, useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

// getUsers();
export default function Home() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get('api/users');
      console.log(res.data);
      setUsers(res.data.data);
    }
    getUsers();
  }, []);

  return (
    <main
      className={`h-screen flex justify-between bg-bgMain overflow-x-hidden`}
    >
      {/* <Sidebar
        users={users}
        handleFromToggle={handleFromToggle}
        toggleForm={toggleForm}
        setIsToggleForm={setIsToggleForm}
      />
      <Main
        users={users}
        toggleForm={toggleForm}
        setIsToggleForm={setIsToggleForm}
      />{' '}
      toggle={query} data={data}*/}
    </main>
  );
}
