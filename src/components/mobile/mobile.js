'use client';

import MobileViewDashboard from '../mobile-view-dashboard/mobile-view-dashboard';

export default function Mobile(props) {
  return (
    <div className=''>
      {props.data.map((datum) => {
        const { id, name, image } = datum;
        return (
          <div key={id}>
            <MobileViewDashboard
              id={id}
              name={name}
              image={image}
              toggle={props.toggle}
            />
          </div>
        );
      })}
    </div>
  );
}
