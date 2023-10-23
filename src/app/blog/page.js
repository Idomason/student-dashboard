'use client';

import axios from 'axios';
import { Inter } from '@next/font/google';

import Button from '../../components/button/button';

const inter = Inter({
  subsets: ['latin'],
});

export default function Blog() {
  async function handleSubmit(event) {
    const postImage = event.target[0].value;
    const postTitle = event.target[1].value;
    const postDesc = event.target[2].value;
    const postContent = event.target[3].value;

    const blog = {
      postImage,
      postTitle,
      postDesc,
      postContent,
    };

    try {
      const res = await axios.post('api/posts', blog);

      res.status === 201 && router.push('/blog/?success=Post has been created');
    } catch (error) {
      setError(true);
    }
  }

  return (
    <section className='flex flex-col items-center justify-around md:block md:ml-24 md:items-center bg-bgMain '>
      <div>
        <h2
          className={`${inter.className} text-secondary font-bold text-xl my-4`}
        >
          Dashboard
        </h2>
        <span className='inline-block mb-16'>Post thumbnail</span>
      </div>

      <form onSubmit={handleSubmit}>
        <span className='block mt-4 mr-4'>
          <input className='' type='file' name='postImage' />
        </span>
        <span className='block mb-6 text-xs text-primary leading-loose tracking-wide'>
          Maximum file size: 1 MB
        </span>

        <div className='flex flex-col mb-4'>
          <label htmlFor='postTitle'>Post Title</label>
          <input
            className='w-3/4 p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
            type='text'
            name='postTitle'
            id='postTitle'
          />
        </div>

        <div className='flex flex-col mb-4'>
          <label htmlFor='postTitle'>Post Description</label>
          <input
            className='w-3/4 p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary'
            type='text'
            name='postDesc'
            id='postDesc'
          />
        </div>

        <div className=' flex flex-col mb-6'>
          <label htmlFor='postContent'>Post Content</label>
          <textarea
            className='w-3/4 focus:outline-none focus:ring-1 focus:ring-primary rounded-sm'
            name='postContent'
            id='postContent'
            cols='30'
            rows='10'
            // value={postContent}
            // onChange={handlePostContent}
          ></textarea>
        </div>
        <Button text='Add New Post' />
      </form>
    </section>
  );
}
