import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Animazing Catalogue - Your Ultimate Manga Search and Collection Tracker',
  description: 'Welcome to Animazing Catalogue, your one-stop destination for all things manga! Whether you\'re a seasoned manga enthusiast or just starting your collection, our platform is designed to help you effortlessly search for manga titles and keep track of your real-life copies. Discover a vast database of manga titles, organize your collection, and connect with fellow fans. Start your manga journey today with Animazing Catalogue!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
