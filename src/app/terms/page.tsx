import React from 'react';

import { Footer } from '@/components/ui/footer';
import { UnauthenticatedHeader } from '@/components/ui/header';

const TermsOfService: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <UnauthenticatedHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h1>Terms Of Service</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
