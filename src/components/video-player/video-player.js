import React from 'react';
// import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div>
      <h2 className='text-black text-lg'>Introduction</h2>
      <ReactPlayer url='https://www.youtube.com/watch?v=u5mPdYiqxhk' />
    </div>
  );
};

export default VideoPlayer;
