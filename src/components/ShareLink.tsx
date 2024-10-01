import { Dispatch, SetStateAction } from 'react';
import { useToast } from '@ui/use-toast';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@ui/dialog';
import { Button } from '@ui/button';
import { Copy } from 'lucide-react';
import { Label } from '@ui/label';
import { Input } from '@ui/input';

interface ShareLinkProps {
  chatId: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ShareLink({ chatId, isOpen, setIsOpen }: ShareLinkProps) {
  const { toast } = useToast();
  const host = window.location.host;

  const LinkToChat =
    process.env.NODE_ENV === 'development'
      ? `http://${host}/chat/${chatId}`
      : `https://${host}/chat/${chatId}`;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(LinkToChat);
      console.log('Text copied to clipboard');

      toast({
        title: 'Copied Successfully',
        description:
          'Share this to the person you want to chat with! (NOTE: They must be added to the Chat to access it!)',
        className: 'bg-green-600 text-white',
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  return (
    <Dialog
      defaultOpen={isOpen}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Copy className='mr-2' />
          Share Link
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Share Link</DialogTitle>
          <DialogDescription>
            Any user who has been <span className='font-bold text-indigo-600'>granted access</span>{' '}
            can use this link.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label
              htmlFor='link'
              className='sr-only'
            >
              Link
            </Label>
            <Input
              id='link'
              defaultValue={LinkToChat}
              readOnly
            />
          </div>
          <Button
            className='dark:text-midnight-950'
            type='submit'
            onClick={() => copyToClipboard()}
            size='sm'
          >
            <span className='sr-only'>Copy</span>
            <Copy className='mr-2' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button
              type='button'
              variant='secondary'
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
