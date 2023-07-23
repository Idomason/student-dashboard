import Header from '@/components/header/header';
import data from '../../public/data/data.json';
import Profile from '@/components/profile/profile';
import { Inter } from '@next/font/google';
import StudentProfile from '@/components/student-profile/student-profile';
import Intro from '@/components/intro/intro';

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
      <div className='flex flex-col md:flex-row overflow-hidden'>
        {/* <Header /> */}
        <Profile data={data} />
        <StudentProfile data={data} />
      </div>
    </main>
  );
}
