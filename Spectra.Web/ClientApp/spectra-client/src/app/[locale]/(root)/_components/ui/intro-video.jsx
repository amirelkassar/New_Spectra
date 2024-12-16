'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export const IntroVideo = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div role='button' onClick={open}>
        {children}
      </div>

      <Modal
        withCloseButton={false}
        size='auto'
        opened={opened}
        onClose={close}
        radius='md'
        classNames={{
          body: 'p-0',
        }}
      >
        <div className='rounded-xl shadow-lg w-full h-auto'>
          <video autoPlay controls width='100%'>
            <source src='/intro.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </>
  );
};
