import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

async function getData() {
  const response = await axios.get('/api/posts');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const ideas = response.json();

  return ideas;
}

export default function Ideas() {
  const ideas = getData();

  const date = new Date(ideas.map((idea) => idea.createdAt));
  const postCreatedOn = date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className='bg-bgMain p-3 md:ml-24 flex flex-col md:flex-row items-start md:items-center lg:items-start justify-center md:justify-start gap-4 mb-4 text-sm'>
      {ideas.map((idea) => {
        const { _id, postTitle, postImage, postContent, author } = idea;
        return (
          <Link href={_id} key={_id}>
            <div>
              <Image src={postImage} width={80} height={80} alt={postTitle} />
            </div>
            <div className='flex flex-col justify-between'>
              <h3 className='font-bold'>{postTitle}</h3>
              <p>{postContent}</p>
              <span className='text-xs'>
                Posted on <span className='text-primary'>{postCreatedOn} </span>
                by{' '}
                <span className='text-primary'>
                  {author ? author : 'Anonymous'}
                </span>
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
