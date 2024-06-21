import React from 'react';

import { Footer, Header } from '@/components/landing/navbar';
import {
  About,
  Contact,
  Features,
  Hero,
  Pricing,
} from '@/components/landing/section';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
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
