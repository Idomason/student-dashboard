import Image from 'next/image';

export default function Post({ datum }) {
  const [blogImage, postTitle, blogPost, author] = datum;
  return (
    <section>
      <div>
        <Image src={blogImage} alt={postTitle} />
      </div>
      <div>
        <h3>{postTitle}</h3>
        <p>{blogPost}</p>
        <span>
          Posted on {new Date().toDateString()} by {author}
        </span>
      </div>
    </section>
  );
}
