import { FirestoreAdapter } from '@auth/firebase-adapter';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { adminAuth, adminDb } from './firebase-admin';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: FirestoreAdapter(adminDb) as NextAuthOptions['adapter'],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user && token.sub) {
        session.user.id = token.sub;

        const firebaseToken = await adminAuth.createCustomToken(token.sub);
        session.firebaseToken = firebaseToken;
      }
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax', // Adjust this based on your app needs (strict, lax, none)
        path: '/',
        secure: process.env.NODE_ENV === 'production', // Use Secure cookies in production
      },
    },
    csrfToken: {
      name: `__Host-next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
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
