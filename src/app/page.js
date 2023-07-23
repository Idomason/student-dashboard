import { Inter } from '@next/font/google';
import data from '../../public/data/data.json';
import Header from '@/components/header/header';
import Profile from '@/components/profile/profile';
import StudentProfile from '@/components/student-profile/student-profile';

// export function getStaticProps(context) {
//   return {
//     props: data,
//   };
// }

const inter = Inter({
  subsets: ['latin'],
});

export default function Home(props) {
  return (
    <main className={`bg-[#E6DFF1] h-full ${inter.className}`}>
      <div className='lg:h-screen flex flex-col md:flex-row overflow-hidden'>
        {/* <Header /> */}
        <Profile data={data} />
        <StudentProfile data={data} />
      </div>
    </main>
  );
}
