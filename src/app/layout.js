import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/context/AuthContext';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'ProductHub',
  description: 'A simple product management app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Authentication Provider */}
        <AuthProvider>
          {/* Navbar */}
          <Navbar />

          {/* All Pages */}
          {children}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
