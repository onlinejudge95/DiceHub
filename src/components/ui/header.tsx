'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Dice } from './icons';

export const UnauthenticatedHeader: React.FC = () => {
  const path = usePathname();
  const isLandingPage = path === '/';

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Dice className="h-6 w-6" />
        <span className="sr-only">Dice Games</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href={isLandingPage ? '#features' : '/#features'}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href={isLandingPage ? '#pricing' : '/#pricing'}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href={isLandingPage ? '#about' : '/#about'}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href={isLandingPage ? '#contact' : '/#contact'}
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <Link
          href="/auth"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Login
        </Link>
      </nav>
    </header>
  );
};
