import CircleAlert from '@/assets/icons/circle-alert';

export const FormErrorMessage = ({ message = '' }) => {
  if (!message) return null;
  return (
    <div className='flex items-start gap-2'>
      <CircleAlert className='size-6 fill-red text-white shrink-0' />

      <p className='text-red'>{message}</p>
    </div>
  );
};
