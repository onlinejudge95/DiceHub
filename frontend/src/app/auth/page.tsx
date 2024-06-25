'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import {
  discordSignInHandler,
  discordSignUpHandler,
  googleSignInHandler,
  googleSignUpHandler,
} from './handlers';
import { AuthForm } from './form';
import { Footer } from '@/components/ui/footer';
import { UnauthenticatedHeader } from '@/components/ui/header';

const Authentication: React.FC = () => {
  const searchParams = useSearchParams();
  const isSignInAction = searchParams.get('action') === 'sign-in';

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <UnauthenticatedHeader />
      <main className="flex-1">
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
          clickHandler={{
            googleSignInHandler: googleSignInHandler,
            googleSignUpHandler: googleSignUpHandler,
            discordSignInHandler: discordSignInHandler,
            discordSignUpHandler: discordSignUpHandler,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
