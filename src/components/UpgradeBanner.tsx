'use client';
import { useSubscriptionStore } from '@/store/store';
import { useRouter } from 'next/navigation';
import { Button } from '@ui/button';

export default function UpgradeBanner() {
  const subscription = useSubscriptionStore((state) => state.subscription);

  const isPro = subscription?.status === 'active';
  const router = useRouter();

  if (subscription === undefined || isPro) return null;

  return (
    <Button
      onClick={() => router.push('/register')}
      className='w-full rounded-none bg-gradient-to-r from-blue-600 to-jam-600 px-5 py-2 text-center text-white transition-all hover:from-blue-600 hover:to-jam-600 hover:opacity-75 hover:shadow-md'
    >
      Upgrade to Pro to unlock all features!
    </Button>
  );
}
