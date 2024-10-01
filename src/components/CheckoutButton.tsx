'use client';

import React from 'react';
import { db } from '@/lib/firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { ReactNode, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useSubscriptionStore } from '@/store/store';

export default function CheckoutButton({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isLoadingSubscription = subscription === undefined;
  const isSubscribed = subscription?.status === 'active';

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    // push doc
    setLoading(true);

    const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
      price: 'price_1PjUDNLlaROoU8dwDf9rxruh',
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    // stripe stuff
    return onSnapshot(
      docRef,
      async (snap) => {
        const data = await snap.data();
        const url = data?.url;

        if (url) {
          // We have a Stripe Checkout URL, let's redirect.

          window.location.assign(url);
          setLoading(false);
        }
      },
      (error) => {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occurred: ${error.message}`);
        setLoading(false);
      }
    );
    //redirect
  };

  return (
    <div className='flex flex-col space-y-2'>
      {isSubscribed && (
        <>
          <hr className='mt-5' />
          <p className='pt-5 text-center text-xs text-indigo-600'>You are subscribed to PRO!</p>
        </>
      )}
      <div
        className='mt-8 block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white
          shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-indigo-600 disabled:cursor-default disabled:bg-indigo-600/50 disabled:text-white disabled:opacity-80'
      >
        {isSubscribed ? (
          children
        ) : isLoadingSubscription || loading ? (
          <LoadingSpinner />
        ) : (
          <button onClick={() => createCheckoutSession()}>Sign Up</button>
        )}
      </div>
    </div>
  );
}
