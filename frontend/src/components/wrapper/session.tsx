'use client';

import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

interface SessionProviderWrapperProps {
  children: ReactNode;
}

export const SessionProviderWrapper: React.FC<SessionProviderWrapperProps> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
