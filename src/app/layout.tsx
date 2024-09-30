import type { Metadata } from "next";
import "@/styles/chitChat.css";
import Header from "@chitChat/Header";
import { ThemeProvider } from "@chitChat/ThemeProvider";
import ClientProviders from "@chitChat/ClientProvider";
import FirebaseAuthProvider from "@/components/ChatProject/FirebaseAuthProvider";
import SubscriptionProvider from "@/components/ChatProject/SubscriptionProvider";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "ChitChatRoam",
  description:
    "Connect with people around the globe and enjoy seamless conversations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className="flex min-h-screen flex-col">
          <FirebaseAuthProvider>
            <SubscriptionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                <Suspense fallback={<Loading />}>{children}</Suspense>
                <Toaster />
              </ThemeProvider>
            </SubscriptionProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  );
}
