'use client';

import axios from 'axios';
import toast from 'react-hot-toast';
import Main from '@/components/main/main';
import Sidebar from '@/components/sidebar/sidebar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [toggleForm, setIsToggleForm] = useState(1);

  useEffect(function () {
    async function getUserDetails() {
      const res = await axios.get('api/auth/me');
      // console.log(res.data);
      setData([res.data.data]);
    }
    getUserDetails();
  }, []);

  async function logout() {
    try {
      await axios.get('api/auth/logout');
      toast.success('Logout successful');
      router.push('/signIn');
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <main
      className={`h-screen flex justify-between bg-bgMain overflow-x-hidden`}
    >
      <Sidebar
        users={data}
        logout={logout}
        toggleForm={toggleForm}
        setIsToggleForm={setIsToggleForm}
      />
      <Main
        users={data}
        toggleForm={toggleForm}
        setIsToggleForm={setIsToggleForm}
      />
      {/* <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded mr-5'
        onClick={logout}
      >
        Log Out
      </button> */}
    </main>
  );
}
