import Header from '@/components/header/header';
import data from '../../public/data/data.json';
import StudentProfile from '@/components/student-profile/student-profile';

// export function getStaticProps(context) {
//   return {
//     props: data,
//   };
// }

export default function Home(props) {
  return (
    <main className='bg-slate-100 h-screen bg-grad'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <Header />
        {/* {data.map((datum) => (
          <StudentProfile
            key={datum.id}
            image={datum.image}
            name={datum.name}
            courses={datum.courses}
          />
        ))} */}
      </div>
    </main>
  );
}
