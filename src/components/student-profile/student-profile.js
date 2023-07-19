import Image from 'next/image';

const StudentProfile = ({ image, name, courses }) => {
  return (
    <div>
      <div>
        <Image src={image} alt='student passport' width={450} height={300} />
        <h2>
          {name.firstName} {name.lastName}
        </h2>
        {/* <p>{socials}</p> */}
        <p>{courses}</p>
        {/* <p>{materials}</p>
        <p>{blog}</p> */}
      </div>
      <div></div>
    </div>
  );
};
export default StudentProfile;
