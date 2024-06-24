'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const event = searchParams.get('event');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth?action=sign-in');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <h1>Hello, World!!</h1>
      <p>Received {event}</p>
    </>
  );
};

export default Dashboard;
