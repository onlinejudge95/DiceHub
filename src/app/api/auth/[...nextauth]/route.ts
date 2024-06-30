import NextAuth from 'next-auth/next';
import Discord from 'next-auth/providers/discord';
import Google from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    Discord({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
