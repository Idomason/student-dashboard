import Image from 'next/image';

export default function Post({
  postImage,
  postTitle,
  postContent,
  author,
  createdAt,
}) {
  const date = new Date(createdAt);
  const postCreatedOn = date.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className='bg-bgMain p-3 md:ml-24 flex flex-col md:flex-row items-start md:items-center lg:items-start justify-center md:justify-start gap-4 mb-4 text-sm'>
      <div>
        <Image src={postImage} width={80} height={80} alt={postTitle} />
      </div>
      <div className='flex flex-col justify-between'>
        <h3 className='font-bold'>{postTitle}</h3>
        <p>{postContent}</p>
        <span className='text-xs'>
          Posted on <span className='text-primary'>{postCreatedOn} </span>
          by{' '}
          <span className='text-primary'>{author ? author : 'Anonymous'}</span>
        </span>
      </div>
    </section>
  );
}
