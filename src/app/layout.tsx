import type { Metadata } from 'next';
import './globals.css';
import TheNavbar from '@/components/TheNavbar';
import TheFooter from '@/components/TheFooter';
import LenisProvider from '../providers/LenisProvider';

export const metadata: Metadata = {
  title: 'Circo - Experience Like Never Before',
  description: 'Circo is where real connections happen. A space to create, explore, and engage like never before.',
  keywords: 'Crypto exchange platform, trade crypto and giftcards, swap crypto, Nigeria',
  openGraph: {
    title: 'Circo - Experience Like Never Before',
    description: 'Circo is where real connections happen. A space to create, explore, and engage like never before.',
    siteName: 'Circo',
    images: [
      {
        url: 'https://assets.circleandclique.com/artifacts/images/banner.png'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circo - Experience Like Never Before',
    description: 'Circo is where real connections happen. A space to create, explore, and engage like never before.',
    images: ['https://assets.circleandclique.com/artifacts/images/banner.png'],
    creator: '@circo_live'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LenisProvider>
          <TheNavbar />
          {children}
          <TheFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
