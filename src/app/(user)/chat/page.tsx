import ChatList from '@/components/ChatProject/ChatList';
import ChatPermissionError from '@/components/ChatProject/ChatPermissionError';

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
        <div className="m-2">
          <ChatPermissionError />
        </div>
      )}
      <ChatList />
    </div>
  );
}
