import MobileViewDashboard from '../mobile-view-dashboard/mobile-view-dashboard';

export default function Mobile({ data, toggle, toggleForm, setIsToggleForm }) {
  return (
    <div className=''>
      {data.map((datum) => {
        const { id, name, image } = datum;
        return (
          <div key={id}>
            <MobileViewDashboard
              {...datum}
              toggle={toggle}
              toggleForm={toggleForm}
              setIsToggleForm={setIsToggleForm}
            />
          </div>
        );
      })}
    </div>
  );
}
