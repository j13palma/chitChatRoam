import AdminControls from '@/components/AdminControls';
import ChatInput from '@/components/ChatInput';
import ChatMembersBadge from '@/components/ChatMembersBadge';
import ChatMessages from '@/components/ChatMessages';
import { chatMembersRef } from '@/lib/converters/ChatMemebers';
import { sortedMessagesRef } from '@/lib/converters/Message';
import { auth } from '@/lib/nextAuth';
import { getDocs } from 'firebase/firestore';
import { redirect } from 'next/navigation';

interface ChatPageProps {
  params: {
    chatId: string;
  };
}

export default async function ChatPage({ params: { chatId } }: ChatPageProps) {
  const session = await auth();

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map((doc) => doc.data());

  const hasAccess = (await getDocs(chatMembersRef(chatId))).docs
    .map((doc) => doc.id)
    .includes(session?.user.id!);

  if (!hasAccess) {
    redirect('/chat?error=permission');
  }

  return (
    <>
      <AdminControls chatId={chatId} />
      <ChatMembersBadge chatId={chatId} />
      <div className='flex-1'>
        <ChatMessages
          chatId={chatId}
          session={session}
          initialMessages={initialMessages}
        />
      </div>

      <ChatInput chatId={chatId} />
    </>
  );
}
