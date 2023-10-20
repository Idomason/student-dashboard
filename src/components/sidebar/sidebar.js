import Profile from '../profile/profile';

const Sidebar = ({
  users,
  handleFromToggle,
  toggleForm,
  setIsToggleForm,
  logout,
}) => {
  return (
    <div className='md:w-1/2 overflow-hidden'>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <Profile
              {...user}
              handleFromToggle={handleFromToggle}
              toggleForm={toggleForm}
              setIsToggleForm={setIsToggleForm}
              logout={logout}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
