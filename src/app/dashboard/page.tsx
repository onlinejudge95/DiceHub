'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Footer } from '@/components/ui/footer';
import { AuthenticatedHeader } from '@/components/ui/header';

const Dashboard: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <AuthenticatedHeader />
      <main className="flex-1"></main>
      <Footer />
    </div>
  );
};

export default Dashboard;
