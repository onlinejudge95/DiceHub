import { signIn, SignInOptions } from 'next-auth/react';

export const googleSignInHandler = async (): Promise<void> => {
  const opts: SignInOptions = { callbackUrl: '/dashboard' };
  await signIn('google', opts);
};
