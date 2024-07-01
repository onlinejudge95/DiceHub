import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';

import { prisma } from '@/lib/db';

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 10 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth',
    error: '/error',
  },
  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) {
        throw new Error('No email associated with the email profile');
      }

      await prisma.users.upsert({
        where: { email: profile.email },
        create: {
          id: profile.sub as string,
          email: profile.email,
          name: profile.name,
          avatar: profile.picture,
        },
        update: {
          name: profile.name,
          avatar: profile.picture,
        },
      });
      return true;
    },
    async session({ session, token }) {
      session.user.id = token.id;

      return session;
    },
    async jwt({ profile, token }) {
      if (profile) {
        const user = await prisma.users.findUnique({
          where: {
            email: profile.email,
          },
        });
        if (!user) {
          throw new Error('No user exists');
        }
        token.id = user.id;
      }
      return token;
    },
  },
  debug: process.env.NODE_ENV === 'development',
});

export { handler as GET, handler as POST };
