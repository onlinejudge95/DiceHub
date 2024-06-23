import React from 'react';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Chrome, Discord } from '../ui/icons';

interface AuthFormHelperType {
  text: string;
  action: string;
  linkText: string;
}

interface AuthFormClickHandlerType {
  googleSignInHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  googleSignUpHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  discordSignInHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  discordSignUpHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface AuthFormProps {
  title: string;
  description: string;
  helper: AuthFormHelperType;
  clickHandler: AuthFormClickHandlerType;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  description,
  helper,
  clickHandler,
}) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-md mx-auto">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={
                helper.action === 'sign-in'
                  ? clickHandler.googleSignInHandler
                  : clickHandler.googleSignUpHandler
              }
            >
              <Chrome className="mr-2 h-4 w-4" />
              {title} with Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={
                helper.action === 'sign-in'
                  ? clickHandler.discordSignInHandler
                  : clickHandler.discordSignUpHandler
              }
            >
              <Discord className="mr-2 h-4 w-4" />
              {title} with Discord
            </Button>
            <div className="mt-4 text-center text-sm">
              {helper.text}{' '}
              <Link
                href={'/auth?action=' + helper.action}
                className="underline"
                prefetch={false}
              >
                {helper.linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
