'use client';

import Image from 'next/image';
import dayjs from 'dayjs';
import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';

import { convertBytesToKB } from '@/lib/utils';
import PdfIcon from '@/assets/icons/pdf';
import PlayIcon from '@/assets/icons/play';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import Avatar from '@/components/avatar';

export const File = ({ file = null }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className='flex items-center gap-5'>
      <div>
        {file?.type?.includes('pdf') && (
          <a
            href={URL.createObjectURL(file)}
            target='_blank'
            rel='noopener noreferrer'
          >
            <PdfIcon />
          </a>
        )}

        {file?.type?.includes('image') && (
          <>
            <Avatar
              src={URL.createObjectURL(file)}
              name={file.name}
              size='md'
              className='rounded-full size-11 object-cover object-center cursor-pointer'
              radius='lg'
              onClick={open}
            />

            <ViewModal
              opened={opened}
              close={close}
              contentType='image'
              src={URL.createObjectURL(file)}
            />
          </>
        )}

        {file?.type?.includes('video') && (
          <>
            <button onClick={open}>
              <PlayIcon className='size-11' />
            </button>

            <ViewModal
              opened={opened}
              close={close}
              contentType='video'
              src={URL.createObjectURL(file)}
            />
          </>
        )}
      </div>

      <div className='flex-1'>
        <p className='max-w-48 mdl:max-w-64 truncate overflow-hidden font-Medium text-sm mdl:text-xl'>
          {file?.name}
        </p>

        <span
          dir='ltr'
          className='text-xs mdl:text-base text-grayDark'
        >
          {convertBytesToKB(file?.size)} .{' '}
          {dayjs(new Date()).format('DD MMM, YYYY')}
        </span>
      </div>

      <div className='shrink-0'>
        <Button variant='transparent'>
          <ThreeDotsIcon />
        </Button>
      </div>
    </div>
  );
};

const ViewModal = ({
  opened = false,
  close = () => {},
  contentType,
  src,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      size='xl'
      withCloseButton={false}
      centered
    >
      {contentType === 'image' && (
        <div className='relative w-full h-[80vh]'>
          <Image
            src={src}
            alt='image'
            priority
            fill
            className='object-contain object-center max-w-full max-h-full'
          />
        </div>
      )}

      {contentType === 'video' && (
        <video
          src={src}
          controls
          autoPlay
          muted
          className='object-cover object-center w-full max-w-full max-h-full aspect-video'
        />
      )}
    </Modal>
  );
};
