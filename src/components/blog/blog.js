import Jobs from '../jobs/jobs';
import NewsAndIdeas from '../newsAndIdeas/newsAndIdeas';

const Blog = () => {
  return (
    <div className='mt-24 md:mt-0 overflow-scroll min-w-max scrollbar-hide'>
      {/* md:w-[500px] grid grid-cols-1 place-items-center */}
      <Jobs />
      <NewsAndIdeas />
    </div>
  );
};

export default Blog;
