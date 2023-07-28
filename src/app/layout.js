import './globals.css';
import { StoreProvider } from '@/redux/store-provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Student Dashboard',
  description:
    'A student dashboard app that showcases students learning materials, tests and exam scores, blog posts.',
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
