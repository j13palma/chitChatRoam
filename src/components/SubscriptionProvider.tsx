"use client";

import { subscriptionRef } from "@/lib/converters/Subscriptions";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(
    (state) => state.setSubscription,
  );

  useEffect(() => {
    if (!session) return;

    return onSnapshot(
      subscriptionRef(session.user.id),
      (snap) => {
        if (snap.empty) {
          console.log("User has NO subscription");
          setSubscription(null);
          return;
        } else {
          console.log("User has subscription");
          setSubscription(snap.docs[0].data());
        }
      },
      (error) => {
        console.log("Error getting document:", error);
      },
    );
  }, [session, setSubscription]);

  return <div>{children}</div>;
}
