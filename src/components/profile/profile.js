import StudentProfile from '@/components/student-profile/student-profile';

const Profile = (props) => {
  //   console.log('Props', props);
  return (
    <div>
      {props.data.map((datum) => (
        <StudentProfile
          key={datum.id}
          image={datum.image}
          name={datum.name}
          id={datum.id}
        />
      ))}
    </div>
  );
};

export default Profile;
