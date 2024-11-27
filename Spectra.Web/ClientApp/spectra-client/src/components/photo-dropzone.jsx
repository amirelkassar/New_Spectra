import { Dropzone as MantineDropzone } from '@mantine/dropzone';

import UploadImgIcon from '@/assets/icons/uploadImg';
import { cn } from '@/lib/utils';

export const PhotoDropzone = ({
  label = 'اضغط هنا لرفع صورة',
  classNames = {
    root: '',
    container: '',
    icon: '',
    label: '',
  },
  ...props
}) => {
  return (
    <MantineDropzone
      {...props}
      maxSize={5 * 1024 ** 2}
      className={cn(
        'rounded-xl',
        props.className,
        classNames.root
      )}
      accept={['image/*']}
    >
      <div
        className={cn(
          'flex gap-1 flex-col justify-center items-center w-full p-4',
          classNames.container
        )}
      >
        <UploadImgIcon
          className={cn(
            'size-6 mdl:size-8 shrink-0',
            classNames.icon
          )}
        />
        <h2
          className={cn(
            'text-xs mdl:text-base text-grayDark font-light',
            classNames.label
          )}
        >
          {label}
        </h2>
      </div>
    </MantineDropzone>
  );
};
