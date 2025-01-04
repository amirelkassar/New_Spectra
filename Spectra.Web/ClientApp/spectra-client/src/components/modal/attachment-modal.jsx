'use client';

import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import { Modal } from '@mantine/core';
import {
  Dropzone,
  IMAGE_MIME_TYPE,
  PDF_MIME_TYPE,
} from '@mantine/dropzone';

import Button from '@/components/button';
import ExportIcon from '@/assets/icons/export';
import TextInput from '@/components/inputs/text-input';
import { cn } from '@/lib/utils';
import GetErrorMsg from '../getErrorMsg';
import CloseIcon from '@/assets/icons/close';

export function AttachmentModal({
  title = '',
  data = {
    name: '',
    file: undefined,
  },
  error,
  isPending = false,
  isOpen = false,
  close = () => {},
  onSubmit = () => {},
}) {
  const [value, setValue] = useState(data);

  const [validationError, setValidationError] = useState({
    name: '',
    file: '',
  });

  // handle close modal
  const onClose = useCallback(() => {
    setValue(data);
    close();
  }, [data, close]);

  // handle submit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (value.file && !value.name)
        return setValidationError((prev) => ({
          ...prev,
          name: 'Please enter a name for the file',
        }));
      onSubmit(value, onClose);
    },
    [onSubmit, value, onClose]
  );

  // handle file change
  const onFileChange = useCallback(
    (file) => {
      if (validationError.file)
        setValidationError((prev) => ({ ...prev, file: '' }));

      const isImage = file.type.startsWith('image/');
      const isPdf = file.type === 'application/pdf';

      if (!isImage && !isPdf) {
        return setValidationError((prev) => ({
          ...prev,
          file: 'Please upload an image or a pdf file',
        }));
      }

      setValue((prev) => ({ ...prev, file }));
    },
    [validationError.file]
  );

  // handle file error message
  const fileError = useMemo(() => {
    return GetErrorMsg(error, 'File') || validationError.file;
  }, [error, validationError.file]);
  //
  //
  //
  //
  // handle file preview
  const filePreview = useMemo(() => {
    if (!value.file) return null;

    const path = URL.createObjectURL(value.file);
    const isImage = value.file.type.startsWith('image/');
    const isPdf = value.file.type === 'application/pdf';

    return (
      <div className='relative size-48 rounded-md overflow-hidden'>
        {isImage && (
          <Image
            src={path}
            alt={value.file.name}
            fill
            sizes='width:200px, height:200px'
            className='object-cover object-center max-w-full max-h-full'
          />
        )}

        {isPdf && <iframe src={path} width='100%' height='100%' />}

        <div
          onClick={() =>
            setValue((prev) => ({ ...prev, file: undefined }))
          }
          role='button'
          className='absolute duration-200 hover:shadow-md top-1 start-1 bg-white rounded-full size-5 overflow-hidden'
        >
          <CloseIcon className='size-5' />
        </div>
      </div>
    );
  }, [value.file]);

  return (
    <Modal
      withCloseButton={false}
      centered
      opened={isOpen}
      onClose={onClose}
      size='lg'
      classNames={{
        content: 'rounded-xl lg:py-5 lg:px-10',
      }}
    >
      <div className='space-y-5'>
        <h3 className='text-sm mdl:text-xl font-bold'>{title}</h3>

        {value.file ? (
          filePreview
        ) : (
          <Dropzone
            maxSize={5 * 1024 ** 2}
            className={cn('rounded-xl transition hover:bg-grayLight')}
            accept={[...IMAGE_MIME_TYPE, ...PDF_MIME_TYPE]}
            multiple={false}
            onDrop={(files) => onFileChange(files[0])}
          >
            <div
              className={cn(
                'flex gap-2 flex-col justify-center items-center w-full p-4'
              )}
            >
              <ExportIcon
                strokeWidth={1}
                className={cn(
                  'size-6 mdl:size-8 shrink-0 text-greenMain'
                )}
              />
              <span
                className={cn('text-sm mdl:text-xl text-grayDark')}
              >
                اضغط لاضافة صورة او ملف , او قم بالسحب و الافلات
              </span>
            </div>
          </Dropzone>
        )}
        {fileError && (
          <p className='text-red text-xs mdl:text-base !m-0'>
            {fileError}
          </p>
        )}

        <TextInput
          size='lg'
          label='اسم المرفق'
          value={value?.name}
          onChange={(e) => {
            if (validationError.name) {
              setValidationError((prev) => ({ ...prev, name: '' }));
            }
            setValue((prev) => ({ ...prev, name: e.target.value }));
          }}
          error={GetErrorMsg(error, 'Name') || validationError?.name}
        />

        <div className='flex *:flex-1 flex-col lg:flex-row gap-5 font-bold text-sm lg:text-base !mt-10'>
          <Button
            type='button'
            onClick={handleSubmit}
            disabled={isPending || !value?.file}
            variant='secondary'
          >
            حفظ
          </Button>
          <Button
            type='button'
            disabled={isPending}
            onClick={onClose}
          >
            الغاء
          </Button>
        </div>
      </div>
    </Modal>
  );
}
