import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Zayse Premium App | Solusi Digital Terbaik',
  description:
    'Jual aplikasi premium berkualitas tinggi. Solusi digital terbaik untuk kebutuhan Anda. Lihat pricelist lengkap kami.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
