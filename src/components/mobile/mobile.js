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
        const { id, name, image } = datum;
        return (
          <div key={id}>
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
