import data from '../../../public/data/data.json';
import IntroHeader from '@/components/intro-header/intro-header';
import Header from '@/components/header/header';
import Mobile from '@/components/mobile/mobile';
import Jobs from '@/components/jobs/jobs';
import NewsAndIdeas from '@/components/newsAndIdeas/newsAndIdeas';
import VideoPlayer from '@/components/video-player/video-player';
import { useState } from 'react';

const StudentProfile = ({ toggleForm, setIsToggleForm }) => {
  const [query, setQuery] = useState(false);

  function handleQuery(activeQuery) {
    setQuery(activeQuery);
  }

  return (
    <div
      // className={`w-5/6 h-screen md:w-[800px] ${
      //   props.toggle ? 'hidden' : ''
      // } py-4 md:first-letter:pt-4 md:absolute md:right-28 md:block mt-16 md:mt-0`}
      className='w-full bg-bgMain overflow-x-hidden'
    >
      <Header onAddQuery={handleQuery} />
      <Mobile
        data={data}
        toggle={query}
        toggleForm={toggleForm}
        setIsToggleForm={setIsToggleForm}
      />
      <section className='md:flex md:justify-center'>
        {data.map((datum) => (
          <IntroHeader key={datum.id} name={datum.name} />
        ))}
      </section>
      <div>{/* <VideoPlayer /> */}</div>

      <div
        className={`flex flex-col items-center ${
          toggleForm ? 'inline-block' : 'hidden'
        }`}
      >
        <Jobs toggleForm={toggleForm} />
        <Jobs toggleForm={toggleForm} />
        <NewsAndIdeas toggleForm={toggleForm} />
        <NewsAndIdeas toggleForm={toggleForm} />
      </div>
    </div>
  );
};
export default StudentProfile;
