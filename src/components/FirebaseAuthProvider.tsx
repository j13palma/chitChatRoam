'use client';

import React, { useEffect } from 'react';
import { signInWithCustomToken } from 'firebase/auth';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { auth } from '@/lib/firebase';

async function syncFirebaseAuth(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (error) {
      console.error('Error signing in with custom token: ', error);
    }
  } else {
    auth.signOut();
  }
}

export default function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    syncFirebaseAuth(session);
  }, [session]);

  return <>{children}</>;
}
