import Header from '@/components/header/header';
import data from '../../public/data/data.json';
import Profile from '@/components/profile/profile';
import { Inter } from '@next/font/google';

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
    <main className={`bg-[#E6DFF1] h-full overflow-hidden ${inter.className}`}>
      <div className='text-sm lg:flex flex flex-col'>
        <Header />
        <Profile data={data} />
      </div>
    </main>
  );
}
