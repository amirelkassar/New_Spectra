import PdfIcon from '@/assets/icons/pdf';
import PlayIcon from '@/assets/icons/play';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import Avatar from '@/components/avatar';
import { convertBytesToKB, formatDate } from '@/lib/utils';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';

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
        <p className='max-w-[70%] text-ellipsis whitespace-nowrap overflow-hidden'>
          {file?.name}
        </p>

        <span>{convertBytesToKB(file?.size)} . </span>
        <span>{formatDate(new Date())}</span>
      </div>

      <div>
        <Button variant='transparent'>
          <ThreeDotsIcon />
        </Button>
      </div>
    </div>
  );
};

const ViewModal = ({ opened = false, close = () => {}, contentType, src }) => {
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
