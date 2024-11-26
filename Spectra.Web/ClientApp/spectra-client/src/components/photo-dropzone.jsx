import { Dropzone as MantineDropzone } from '@mantine/dropzone';

import UploadImgIcon from '@/assets/icons/uploadImg';

export const PhotoDropzone = ({
  label = 'اضغط هنا لرفع صورة',
  ...props
}) => {
  return (
    <MantineDropzone
      {...props}
      maxSize={5 * 1024 ** 2}
      className='rounded-xl'
      accept={['image/*']}
    >
      <div className='flex gap-1 flex-col justify-center items-center w-full p-4'>
        <UploadImgIcon className='size-6 mdl:size-8 shrink-0' />
        <h2 className='text-xs mdl:text-base text-grayDark font-light'>
          {label}
        </h2>
      </div>
    </MantineDropzone>
  );
};
