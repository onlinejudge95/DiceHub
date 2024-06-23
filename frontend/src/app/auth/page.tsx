'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import { Footer, Header } from '@/components/landing/navbar';
import { AuthForm } from '@/components/auth/authForms';

const AuthenticationInline: React.FC = () => {
  const searchParams = useSearchParams();
  const isSignInAction = searchParams.get('action') === 'sign-in';

  return (
    <AuthForm
      title={isSignInAction ? 'Sign In' : 'Sign Up'}
      description={
        isSignInAction
          ? 'Sign in with your socials to roll some dices'
          : 'Sign up with your socials to roll some dices'
      }
      helper={{
        text: isSignInAction
          ? "Don't have an account?"
          : 'Already have an account?',
        action: isSignInAction ? 'sign-up' : 'sign-in',
        linkText: isSignInAction ? 'Sign Up' : 'Sign In',
      }}
    />
  );
};

const Authentication: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Suspense>
          <AuthenticationInline />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
