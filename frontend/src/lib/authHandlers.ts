import { signIn } from 'next-auth/react';

export const googleSignInHandler = async () => {
  await signIn('google');
};

export const googleSignUpHandler = async () => {
  await signIn('google');
};

export const discordSignInHandler = async () => {
  await signIn('discord');
};

export const discordSignUpHandler = async () => {
  await signIn('discord');
};
