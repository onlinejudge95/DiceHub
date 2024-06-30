import React from 'react';

import {
  About,
  Contact,
  Features,
  Hero,
  Pricing,
} from '@/components/ui/section';
import { Footer } from '@/components/ui/footer';
import { UnauthenticatedHeader } from '@/components/ui/header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <UnauthenticatedHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
