import { FirestoreAdapter } from '@auth/firebase-adapter';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { adminAuth, adminDb } from './firebase-admin';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: FirestoreAdapter(adminDb) as NextAuthOptions['adapter'],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        console.log('User during JWT callback:', user);
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user && token.sub) {
        console.log('Session during session callback:', session);
        session.user.id = token.sub;

        try {
          const firebaseToken = await adminAuth.createCustomToken(token.sub);
          session.firebaseToken = firebaseToken;
        } catch (error) {
          console.error('Error creating Firebase custom token:', error);
        }
      }
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    // ...add more providers here
  ],
  session: {
    strategy: 'jwt',
  },
};

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  try {
    return getServerSession(...args, authOptions);
  } catch (error) {
    console.error('Error fetching server session:', error);
    throw new Error('Failed to get server session');
  }
}
