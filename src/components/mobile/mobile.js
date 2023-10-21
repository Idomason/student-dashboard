import MobileViewDashboard from '../mobile-view-dashboard/mobile-view-dashboard';

export default function Mobile({
  data,
  toggle,
  onToggle,
  toggleForm,
  setIsToggleForm,
}) {
  return (
    <div className=''>
      {data.map((datum) => {
        const { _id } = datum;
        return (
          <div key={_id}>
            <MobileViewDashboard
              {...datum}
              toggle={toggle}
              onToggle={onToggle}
              toggleForm={toggleForm}
              setIsToggleForm={setIsToggleForm}
            />
          </div>
        );
      })}
    </div>
  );
}
