import { signIn } from 'next-auth/react';

export const googleSignInHandler = async () => {
  await signIn('google', { callbackUrl: '/dashboard' });
};

export const googleSignUpHandler = async () => {
  await signIn('google', { callbackUrl: '/dashboard?event=register' });
};

export const discordSignInHandler = async () => {
  await signIn('discord', { callbackUrl: '/dashboard' });
};

export const discordSignUpHandler = async () => {
  await signIn('discord', { callbackUrl: '/dashboard?event=register' });
};
