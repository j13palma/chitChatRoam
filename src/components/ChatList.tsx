import { chatMembersCollectionGroupRef } from "@/lib/converters/ChatMemebers";
import { auth } from "@/lib/nextAuth";
import { getDocs } from "firebase/firestore";
import ChatListRows from "./ChatListRows";

export default async function ChatList() {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to view this page");

  const chatSnapshot = await getDocs(
    chatMembersCollectionGroupRef(session?.user.id),
  );

  const initialChats = chatSnapshot.docs.map((doc) => ({
    ...doc.data(),
    // timestamp: null,
  }));

  return <ChatListRows initialChats={initialChats} />;
}
