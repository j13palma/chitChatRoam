import { MessagesSquareIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '@/lib/nextAuth';
import CreateChatButton from '@chitChat/CreateChatButton';
import DarkModeToggle from '@chitChat/DarkModeToggle';
import Logo from '@chitChat/Logo';
import UserButton from '@chitChat/UserButton';
import UpgradeBanner from './UpgradeBanner';
import LanguageSelect from './LanguageSelect';
import { Button } from '../ui/button';

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-midnight-950">
      <nav className="mx-auto flex max-w-7xl flex-col items-center bg-white p-5 pl-2 dark:bg-midnight-950 sm:flex-row">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LanguageSelect />
          {session ? (
            <>
              <CreateChatButton />
              <Link
                href="/chitchat/chat"
                prefetch={false}
              >
                <Button
                  className="w-10 px-2"
                  variant="outline"
                >
                  <MessagesSquareIcon className="text-midnight-950 dark:text-white" />
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/chitchat/pricing">Pricing</Link>
          )}
          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
      <UpgradeBanner />
    </header>
  );
}
export default Header;
