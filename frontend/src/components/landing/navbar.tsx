import React from 'react';
import Link from 'next/link';

import { Dice } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="#hero"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Dice className="h-6 w-6" />
        <span className="sr-only">Dice Games</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t" />
  );
};
