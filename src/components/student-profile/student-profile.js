import VideoPlayer from '../video-player/video-player';

import Blog from '../blog/blog';
import IntroHeader from '../intro-header/intro-header';

const StudentProfile = (props) => {
  return (
    <div
      className={`w-5/6 h-screen md:w-[800px] ${
        props.toggle ? 'hidden' : ''
      } py-4 md:first-letter:pt-4 md:absolute md:right-28 md:block mt-16 md:mt-0`}
    >
      {props.data.map((datum) => (
        <IntroHeader key={datum.id} name={datum.name} />
      ))}
      <div>{/* <VideoPlayer /> */}</div>
      <Blog />
      {/* <div className='flex flex-col items-center ml-3 md:ml-6'></div> */}
    </div>
  );
};
export default StudentProfile;
