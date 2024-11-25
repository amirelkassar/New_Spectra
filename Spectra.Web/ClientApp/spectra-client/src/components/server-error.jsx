import ServerErrorIcon from '@/assets/icons/server-error';
import Button from './button';

export const ServerError = ({ onRetry = () => {} }) => {
  return (
    <div className='flex-1 h-full'>
      <ServerErrorIcon className='block mx-auto max-w-full mb-10' />

      <p className='text-sm mdl:text-xl text-center max-w-2xl mx-auto'>
        حدث خطأ غير متوقع. يرجى المحاولة لاحقًا أو التواصل
        مع فريق الدعم إذا استمرت المشكلة.
      </p>
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRetry();
        }}
        variant='secondary'
        className='text-sm mdl:text-xl font-bold w-full mx-auto max-w-sm mt-5'
      >
        اعادة المحاولة
      </Button>
    </div>
  );
};
