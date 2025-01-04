'use client';

import { Modal } from '@mantine/core';
import { useRef } from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import SignatureCanvas from 'react-signature-canvas';

import CloseIcon from '@/assets/icons/close';
import Button from '@/components/button';
import { useTranslations } from 'next-intl';

export const SignModal = ({
  children,
  isPending = false,
  onSend = () => {},
}) => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  const [opened, { open, close }] = useDisclosure(false);

  const sigCanvas = useRef(null);

  const saveSignature = () => {
    const signatureDataURL = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL('image/png');

    const base64Data = signatureDataURL.split(',')[1];
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length)
      .fill(0)
      .map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    const file = new File([byteArray], 'signature.png', {
      type: 'image/png',
    });

    onSend(file, close);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size='lg'
        centered
      >
        <button onClick={close}>
          <CloseIcon
            className={
              'w-7 absolute top-4 start-5 z-10 h-auto mdl:w-9'
            }
          />
        </button>
        <h2 className='text-base lg:text-2xl font-bold text-center my-7'>
          {t('sign_msg')}
        </h2>

        <Signature signRef={sigCanvas} />

        <div className='flex items-center *:flex-1 gap-4 mt-8 mdl:mt-11'>
          <Button
            disabled={isPending}
            onClick={() => sigCanvas.current.clear()}
          >
            {tg('clear')}
          </Button>

          <Button
            disabled={isPending}
            variant='secondary'
            onClick={saveSignature}
          >
            {tg('send')}
          </Button>
        </div>
      </Modal>

      <div onClick={open} role='button'>
        {children}
      </div>
    </>
  );
};

const Signature = ({ signRef }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className=' w-[280px] mdl:w-[560px] max-w-full mx-auto h-[172px] mdl:h-[356px] border-4 border-grayLight rounded-xl'>
      <SignatureCanvas
        ref={signRef}
        penColor='black'
        canvasProps={{
          width: isMobile ? 280 : 560,
          height: isMobile ? 172 : 356,
          className: 'sigCanvas',
        }}
      />
    </div>
  );
};
