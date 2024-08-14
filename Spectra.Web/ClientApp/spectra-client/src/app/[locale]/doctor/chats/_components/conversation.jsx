import Avatar from '@/components/avatar';
import Card from '@/components/card';
import AttachIcon from '@/assets/icons/attach';
import MicIcon from '@/assets/icons/mic';
import SendIcon from '@/assets/icons/send';
import { Textarea } from '@mantine/core';
import { cn } from '@/lib/utils';
import BackIcon from '@/assets/icons/back-black';
export const Conversation = ({ selectedConversation, isOpen, setIsOpen }) => {
  return (
    <Card
      className={cn(
        'lg:h-auto lg:row-span-3 flex flex-col gap-5 lg:col-span-3 lg:order-2 h-full',
        !isOpen && 'hidden lg:flex'
      )}
    >
      {/* CLOSE BUTTON */}
      <div>
        <button className='p-2 lg:hidden' onClick={() => setIsOpen(false)}>
          <BackIcon />
        </button>
      </div>

      {/* HEADER */}
      <div className='border-b border-b-grayMedium px-1 flex items-center pb-3 gap-4'>
        <Avatar className='size-11' name={'احمد محمد'} src={''} />
        <div className='text-black'>
          <h3 className='font-bold'>
            <span>الطبيب</span> {'احمد محمد'}
          </h3>
          <p>{'اخصائى نفسي'}</p>
        </div>
      </div>

      {/* BODY */}
      <div className='overflow-y-auto space-y-3 flex-1'>
        {/* RECEIVED MESSAGE */}
        <div className='flex flex-row-reverse items-center gap-3'>
          <Avatar className='size-11' src='' name='احمد محمد' />
          <p className='bg-grayLight rounded-lg text-black text-xs lg:text-base px-3 py-2'>
            اخذ الجرعة لمدة شهر مع المتابعة للحالة
          </p>
        </div>

        {/* SENT MESSAGE */}
        <div className='flex items-center gap-3'>
          <Avatar className='size-11' src='' name='احمد محمد' />
          <p className='bg-greenMain text-white rounded-lg text-xs lg:text-base px-3 py-2'>
            شكرا يا دكتور الله يعافيك
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className='flex items-center gap-5'>
        <button>
          <AttachIcon className='w-3 h-5' />
        </button>

        <div className='relative flex-1'>
          <button className='absolute top-1/2 end-5 -translate-y-1/2 z-50'>
            <MicIcon className='h-5 w-3' />
          </button>

          <Textarea
            size='xs'
            radius='md'
            classNames={{
              input: 'focus-within:border-black active:border-black pe-12',
            }}
            placeholder='اكتب رسالة ...'
          />
        </div>

        <button>
          <SendIcon />
        </button>
      </div>
    </Card>
  );
};
