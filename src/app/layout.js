import './globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from '@/components/authProvider/authProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Student Dashboard',
  description:
    'A student dashboard app that showcases students learning materials, tests and exam scores, blog posts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
