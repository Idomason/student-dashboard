'use client';

import Form from '@/components/form/form';
import StudentProfile from '@/components/student-profile/student-profile';

function Main({ toggleForm, setIsToggleForm }) {
  return (
    <div className='md:w-3/4 h-full py-4 pt-4 mt-16 md:mt-0 bg-bgMain'>
      <StudentProfile
        toggleForm={toggleForm}
        setIsToggleForm={setIsToggleForm}
      />
      <Form toggleForm={toggleForm} />
    </div>
  );
}

export default Main;
