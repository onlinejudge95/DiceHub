import type { Metadata } from 'next';
import { Gabarito, IBM_Plex_Sans } from 'next/font/google';
import { Suspense } from 'react';

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
      <head>
        {(process.env.NODE_ENV === 'development' ||
          process.env.VERCEL_ENV === 'preview') && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="IXh10dtmz7uN4NOkDMSf0RKn9P8QnDCfTOb0fhJB"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </head>
      <body className={ibm_plex_sans.variable + ' ' + gabarito.variable}>
        <SessionProviderWrapper>
          <Suspense>{children}</Suspense>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
