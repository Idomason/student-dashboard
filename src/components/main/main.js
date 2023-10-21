'use client';

import { useState } from 'react';
import Form from '@/components/create-account/create-account';
import StudentProfile from '@/components/student-profile/student-profile';
import BlogPost from '@/app/blogPost/page';
import Blog from '../../app/blog/page';
import IntroHeader from '@/components/intro-header/intro-header';
import Header from '@/components/header/header';
import Mobile from '@/components/mobile/mobile';
import Jobs from '@/components/jobs/jobs';
import NewsAndIdeas from '@/components/newsAndIdeas/newsAndIdeas';
// import { signOut, useSession } from 'next-auth/react';

function Main({ users, toggleForm, setIsToggleForm }) {
  // const session = useSession();
  const [query, setQuery] = useState(false);

  function handleQuery(activeQuery) {
    setQuery(activeQuery);
  }
  return (
    // md:w-3/4
    <div className='w-full h-full py-4 pt-4 mt-16 md:mt-0 bg-bgMain'>
      <StudentProfile>
        {/* <div className='p-2 bg-secondary text-white rounded-md'>
          {session.status === 'authenticated' && signOut}
        </div> */}
        <Header onAddQuery={handleQuery} />
        <Mobile
          data={users}
          toggle={query}
          onToggle={setQuery}
          toggleForm={toggleForm}
          setIsToggleForm={setIsToggleForm}
        />
        <section className='flex justify-center'>
          {users.map((user) => (
            <IntroHeader key={user._id} name={user.firstName} users={users} />
          ))}
        </section>

        {toggleForm === 1 && (
          <div
            className={`flex flex-col items-center ${
              toggleForm ? 'inline-block' : 'hidden'
            }`}
          >
            <Jobs />
            <Jobs />
            <NewsAndIdeas />
            <NewsAndIdeas />
          </div>
        )}
      </StudentProfile>
      {toggleForm === 2 && <Form />}
      {toggleForm === 3 && <Jobs />}
      {toggleForm === 4 && <NewsAndIdeas />}
      {toggleForm === 5 && <Blog />}
      {toggleForm === 6 && <BlogPost />}
    </div>
  );
}

export default Main;
