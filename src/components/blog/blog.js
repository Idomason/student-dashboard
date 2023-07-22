import React from 'react';
import Jobs from '../jobs/jobs';
import NewsAndIdeas from '../newsAndIdeas/newsAndIdeas';

const Blog = () => {
  return (
    <div className=''>
      {/* md:w-[500px] grid grid-cols-1 place-items-center */}
      <Jobs />
      <NewsAndIdeas />
    </div>
  );
};

export default Blog;
