'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Footer } from '@/components/ui/footer';
import { upsertUserProfileData } from './handler';

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const event = useSearchParams().get('event');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth?action=sign-in');
    }
  }, [status, router]);

  useEffect(() => {
    if (event === 'register' && session) {
      upsertUserProfileData(session);
    }
  }, [event, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1"></main>
      <Footer />
    </div>
  );
};

export default Dashboard;
