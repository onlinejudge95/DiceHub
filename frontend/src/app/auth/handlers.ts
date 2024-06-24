import { signIn, SignInOptions } from 'next-auth/react';

export const googleSignInHandler = async (): Promise<void> => {
  const opts: SignInOptions = { callbackUrl: '/dashboard' };
  await signIn('google', opts);
};

export const googleSignUpHandler = async () => {
  const opts: SignInOptions = { callbackUrl: '/dashboard?event=register' };
  await signIn('google', opts);
};

export const discordSignInHandler = async () => {
  const opts: SignInOptions = { callbackUrl: '/dashboard' };
  await signIn('discord', opts);
};

export const discordSignUpHandler = async () => {
  const opts: SignInOptions = { callbackUrl: '/dashboard?event=register' };
  await signIn('discord', opts);
};
