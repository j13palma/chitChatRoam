import { Message, limitedSortedMessagesRef } from '@/lib/converters/Message';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Skeleton } from '@ui/skeleton';
import UserAvatar from './UserAvatar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useLanguageStore } from '@/store/store';

export default function ChatListRow({ chatId }: { chatId: string }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [messages, loading, error] = useCollectionData<Message>(limitedSortedMessagesRef(chatId));
  const language = useLanguageStore((state) => state.language);

  const prettyUUID = (length = 4) => {
    return chatId.substring(0, length);
  };

  const row = (message?: Message) => (
    <div
      key={chatId}
      onClick={() => router.push(`/chat/${chatId}`)}
      className='flex cursor-pointer items-center space-x-2 rounded-md p-5 hover:bg-gray-100 dark:hover:bg-slate-700'
    >
      <UserAvatar
        name={message?.user.name || session?.user.name}
        image={message?.user.image || session?.user.image}
      />

      <div className='flex-1'>
        <div className='font-bold'>
          {!message && 'New Chat'}
          {message && [message?.user.name || session?.user.name].toString().split(' ')[0]}
        </div>

        <p className='line-clamp-1 text-gray-400'>
          {message?.translated?.[language] || 'Get the conversation started...'}
        </p>
      </div>

      <div className='text-right text-xs text-gray-400'>
        {message?.timestamp && new Date(message.timestamp).toLocaleTimeString()}
        {!message && 'No messages yet'}
      </div>

      <p className='chat #{prettyUUID}'></p>
    </div>
  );

  return (
    <div>
      {loading && (
        <div className='flex items-center space-x-2 p-5'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='flex-1 space-y-2'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-1/4' />
          </div>
        </div>
      )}

      {messages?.length === 0 && !loading && row()}
      {messages?.map((message) => row(message))}
    </div>
  );
}
