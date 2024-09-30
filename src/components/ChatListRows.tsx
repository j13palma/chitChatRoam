'use client';
import {
  ChatMembers,
  chatMembersCollectionGroupRef,
} from '@/lib/converters/ChatMemebers';
import { MessageSquare } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import CreateChatButton from './CreateChatButton';
import ChatListRow from './ChatListRow';

export default function ChatListRows({
  initialChats,
}: {
  initialChats: ChatMembers[];
}) {
  const { data: session } = useSession();

  const [members, loading, error] = useCollectionData<ChatMembers>(
    session && chatMembersCollectionGroupRef(session.user.id),
    {
      initialValue: initialChats,
    }
  );

  if (members?.length === 0)
    return (
      <div className="flex flex-col items-center justify-center space-y-2 pt-40">
        <MessageSquare className="h-10 w-10" />
        <h1 className="text-5xl font-extralight">Welcome</h1>
        <h2 className="pb-10">
          Let&apos;s get you started by creating your first chat!
        </h2>
        <CreateChatButton isLarge />
      </div>
    );

  return (
    <div className="">
      {members?.map((member, i) => (
        <ChatListRow
          key={member.chatId}
          chatId={member.chatId}
        />
      ))}
    </div>
  );
}
