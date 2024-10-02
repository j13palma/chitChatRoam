'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import UserAvatar from '@/components/UserAvatar';
import { Session } from 'next-auth';
import { Button } from '@ui/button';
import { signIn, signOut } from 'next-auth/react';
import { useSubscriptionStore } from '@/store/store';
import { StarIcon } from 'lucide-react';
import React, { ReactNode } from 'react';

export default function UserButton({
  session,
  children,
}: {
  session: Session | null;
  children: ReactNode;
}) {
  const subscription = useSubscriptionStore((state) => state.subscription);
  if (!session) {
    return (
      <Button
        variant='outline'
        onClick={async () => await signIn()}
      >
        Sign In
      </Button>
    );
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          image={session.user?.image}
          name={session.user?.name}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {subscription?.status === 'active' && (
          <>
            <DropdownMenuLabel className='flex animate-pulse items-center justify-center space-x-1 text-xs text-jam-400'>
              <StarIcon fill='#E935C1' />
              <p>PRO</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{children}</DropdownMenuItem>
          </>
        )}
        <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
