import { cn } from '@/lib/utils';
import UploadIcon from '@/assets/icons/upload-icon';
const UploadInput = ({ className = '', ...props }) => {
  return (
    <label
      className={cn(
        'w-full border !cursor-pointer border-grayMedium p-5 border-dashed rounded-lg relative flex flex-col gap-3 justify-center items-center',
        className
      )}
    >
      <input {...props} type='file' className='hidden' />

      <UploadIcon />
      <span className='text-xs lg:text-base text-grayDark'>
        اضغط هنا لرفع ملف
      </span>
    </label>
  );
};

export default UploadInput;
