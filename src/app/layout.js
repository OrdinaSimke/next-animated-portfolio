import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simke Nys Portfolio App',
  description: 'The best animated portfolio page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflowX: 'hidden' }}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
