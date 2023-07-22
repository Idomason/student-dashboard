import Intro from '../intro/intro';
import Sidebar from '../sidebar/sidebar';

const Profile = (props) => {
  //   console.log('Props', props);
  return (
    <div>
      {props.data.map((datum) => {
        return (
          <div key={datum.id}>
            <Sidebar image={datum.image} name={datum.name} id={datum.id} />
            {/* <Intro image={datum.image} name={datum.name} id={datum.id} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
