'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import useAdminId from '@/hooks/useAdminId';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

interface DeleteChatProps {
  chatId: string;
}

export default function DeleteChat({ chatId }: DeleteChatProps) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const adminId = useAdminId({ chatId });

  const handleDelete = async () => {
    toast({
      title: 'Deleting chat',
      description: 'Please wait while we delete the chat...',
    });

    console.log('Deleting :: ', chatId);

    await fetch('/api/chat/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chatId: chatId }),
    })
      .then((res) => {
        toast({
          title: 'Success',
          description: 'Your chat has been deleted!',
          className: 'bg-green-600 text-white',
          duration: 3000,
        });
        router.replace('/chitchat/chat');
      })
      .catch((err) => {
        console.error(err.message);

        toast({
          title: 'Error',
          description: 'There was an error deleting your chat',
          variant: 'destructive',
        });
      })
      .finally(() => setOpen(false));
  };

  return (
    session?.user.id === adminId && (
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild>
          <Button
            className="dark:border-red-600"
            variant="destructive"
          >
            <Trash2 className="mr-2" />
            Delete Chat
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This will delete the chat for all users.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 space-x-2">
            <Button
              className="dark:border-red-600"
              onClick={handleDelete}
              variant="destructive"
            >
              Delete
            </Button>
            <Button
              onClick={() => setOpen(false)}
              variant="outline"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}
