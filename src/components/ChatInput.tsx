'use client';

import { addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastAction } from '@radix-ui/react-toast';
import { Input } from '@ui/input';
import { Button } from '@ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@ui/form';
import { toast } from '@ui/use-toast';
import { limitedMessagesRef, messagesRef, User } from '@/lib/converters/Message';
import { useSubscriptionStore } from '@/store/store';

const formSchema = z.object({
  input: z.string().max(1000),
});

export default function ChatInput({ chatId }: { chatId: string }) {
  const router = useRouter();
  const { data: session } = useSession();

  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.status === 'active';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.input.length === 0) {
      return;
    }

    if (!session?.user) {
      return;
    }

    // TODO: Check if user is pro and limit them creating a new chat
    // ...

    const messages = (await getDocs(limitedMessagesRef(chatId))).docs.map((doc) =>
      doc.data()
    ).length;

    if (!isPro && messages >= 20) {
      toast({
        title: 'Free Plan limit exceeded',
        description:
          'You&apos;ve exceeded the FREE plan limit of 20 messages per chat. Upgrade to PRO for unlimited chat messages!',
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
    }

    const userToStore: User = {
      id: session.user.id!,
      name: session.user.name!,
      email: session.user.email!,
      image: session.user.image || '',
    };

    addDoc(messagesRef(chatId), {
      input: values.input,
      timestamp: serverTimestamp(),
      user: userToStore,
    });

    form.reset();
  }

  return (
    <div className='sticky bottom-0'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mx-auto flex max-w-4xl space-x-2 rounded-t-xl border bg-white p-2 dark:bg-slate-800'>
            <FormField
              control={form.control}
              name='input'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormControl>
                    <Input
                      className='border-none bg-transparent dark:placeholder:text-white/70'
                      placeholder='Enter message in ANY language...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='bg-violet-600 text-white'
            >
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
