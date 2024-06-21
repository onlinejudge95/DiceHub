import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Footer, Header } from '@/components/landing/navbar';
import { Chrome } from '@/components/ui/icons';

const Authentication: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-md mx-auto">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Sign In</h1>
                <p className="text-muted-foreground">
                  Sign in with your Google account to access your account.
                </p>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Chrome className="mr-2 h-4 w-4" />
                  Sign in with Google
                </Button>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{' '}
                  <Link href="#" className="underline" prefetch={false}>
                    Sign Up
                  </Link>
                </div>
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
