import Profile from '../profile/profile';

const Sidebar = ({ data, handleFromToggle, toggleForm, setIsToggleForm }) => {
  return (
    <div className='overflow-hidden'>
      {data.map((datum) => {
        return (
          <div key={datum.id}>
            <Profile
              {...datum}
              handleFromToggle={handleFromToggle}
              toggleForm={toggleForm}
              setIsToggleForm={setIsToggleForm}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
