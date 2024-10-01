'use client';

import { useSubscriptionStore } from '@/store/store';
import { Button } from '@ui/button';
import { MessageSquarePlusIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useToast } from '@ui/use-toast';
import { v4 as uuidv4 } from 'uuid';
import { getDocs, serverTimestamp, setDoc } from 'firebase/firestore';
import { addChatRef, chatMembersCollectionGroupRef } from '@/lib/converters/ChatMemebers';
import { ToastAction } from '@ui/toast';

export default function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription);

  if (!session) return;

  const createNewChat = async () => {
    setLoading(true);
    toast({
      title: 'Creating new chat...',
      description: 'Hang tight while we create your new chat...',
      duration: 3000,
    });

    // Check user Pro Status
    const numOfChats = (await getDocs(chatMembersCollectionGroupRef(session.user.id))).docs.map(
      (doc) => doc.data()
    ).length;

    // Check if the user is about to exceed the PRO plan which is 3 chats
    const isPro = subscription?.status === 'active';

    if (!isPro && numOfChats >= 3) {
      toast({
        title: 'Free plan limit exceeded',
        description:
          "You've exceeded the limit of chats for the FREE plan. Please upgrade to PRO to continue adding users to chats!",
        variant: 'destructive',
        action: (
          <ToastAction
            altText='Upgrade'
            onClick={() => router.push('/register')}
          >
            Upgrade to PRO
          </ToastAction>
        ),
      });

      setLoading(false);
      return;
    }

    const chatId = uuidv4();

    await setDoc(addChatRef(chatId, session.user.id), {
      userId: session.user.id,
      email: session.user.email!,
      timestamp: serverTimestamp(),
      isAdmin: true,
      chatId: chatId,
      image: session.user.image || '',
    })
      .then(() => {
        toast({
          title: 'Success',
          description: 'Your chat has been created!',
          className: 'bg-green-600 text-white',
          duration: 3000,
        });
        router.push(`/chat/${chatId}`);
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: 'Error',
          description: 'There was an error creating your chat. ):',
          variant: 'destructive',
          duration: 3000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (isLarge)
    return (
      <div>
        <Button
          variant={'default'}
          onClick={createNewChat}
          className='text-white dark:text-midnight-950'
        >
          {loading ? <LoadingSpinner /> : 'Create a New Chat'}
        </Button>
      </div>
    );

  return (
    <Button
      variant='outline'
      onClick={() => createNewChat()}
      className='w-10 px-2'
    >
      {loading ? <LoadingSpinner /> : <MessageSquarePlusIcon />}
    </Button>
  );
}
