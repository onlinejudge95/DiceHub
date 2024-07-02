'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

import { Footer } from '@/components/ui/footer';
import { UnauthenticatedHeader } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { Chrome } from '@/components/ui/icons';

const Authentication: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <UnauthenticatedHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-md mx-auto">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-muted-foreground">
                  Sign in to roll some dices
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    signIn('google', { callbackUrl: '/dashboard' });
                  }}
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Sign In with Google
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Authentication;
