"use server";

import { auth } from "@/lib/nextAuth";
import { adminDb } from "@/lib/firebase-admin";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function generatePortalLink() {
  console.log("server action");

  const session = await auth();
  const host = headers().get("host");

  if (!session?.user.id) return console.error("No user Id found");

  console.log(session?.user.id);
  const {
    user: { id },
  } = session;

  const returnUrl =
    process.env.NODE_ENV === "development"
      ? `http://${host}/chitchat/register`
      : `https://${host}/chitchat/register`;

  const doc = await adminDb.collection("customers").doc(id).get();

  if (!doc.data)
    return console.error("No customer record found with userId: ", id);

  const stripeId = doc.data()!.stripeId;

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: stripeId,
    return_url: returnUrl,
  });

  redirect(stripeSession.url);
}
