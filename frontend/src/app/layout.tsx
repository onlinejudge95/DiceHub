import type { Metadata } from 'next';
import { Gabarito, IBM_Plex_Sans } from 'next/font/google';

import { SessionProviderWrapper } from '@/components/wrapper/session';
import './globals.css';

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm_plex_sans',
  weight: '400',
});
const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

export const metadata: Metadata = {
  title: 'DiceHub',
  description: 'Nobody dice it better',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm_plex_sans.variable + ' ' + gabarito.variable}>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
