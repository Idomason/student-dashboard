import VideoPlayer from '../video-player/video-player';

import Blog from '../blog/blog';
import IntroHeader from '../intro-header/intro-header';

const StudentProfile = (props) => {
  return (
    <div className='md:w-[1100px]'>
      {props.data.map((datum) => (
        <IntroHeader key={datum.id} name={datum.name} />
      ))}
      {/* <div><VideoPlayer /></div> */}
      <Blog />
      {/* <div className='flex flex-col items-center ml-3 md:ml-6'></div> */}
    </div>
  );
};
export default StudentProfile;
