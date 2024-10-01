import circleLogo from '@/images/logos/ChatAroundTheWorld.png';
import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';

function Logo() {
  return (
    <Link
      href='/'
      prefetch={false}
      className='overflow-hidden'
    >
      <div className='flex h-20 w-20 items-center'>
        <AspectRatio
          className='flex items-center justify-center'
          ratio={16 / 9}
        >
          <Image
            priority
            src={circleLogo}
            alt='Go Home'
          />
        </AspectRatio>
      </div>
    </Link>
  );
}
export default Logo;
