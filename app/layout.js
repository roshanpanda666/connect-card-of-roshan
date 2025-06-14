import './globals.css';
import { Zen_Dots } from 'next/font/google';

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Your App',
  description: 'My Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={zenDots.className}>{children}</body>
    </html>
  );
}
