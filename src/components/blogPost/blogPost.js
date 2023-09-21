import data from '../../../public/data/data.json';
import Post from '../post/post';

export default function BlogPost() {
  return (
    <>
      {data.map((datum) => (
        <Post key={datum.id} datum={datum.blog} />
      ))}
    </>
  );
}
