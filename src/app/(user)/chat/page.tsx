import ChatList from '@/components/ChatList';
import ChatPermissionError from '@/components/ChatPermissionError';

interface ChatsPageProps {
  params: {};
  searchParams: {
    error: string;
  };
}

export default function ChatPage({ searchParams: { error } }: ChatsPageProps) {
  return (
    <div>
      {error && (
        <div className='m-2'>
          <ChatPermissionError />
        </div>
      )}
      <ChatList />
    </div>
  );
}
