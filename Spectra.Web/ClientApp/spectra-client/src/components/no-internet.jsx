import NoInternetIcon from '@/assets/icons/no-internet';
import Button from './button';

export const NoInternet = ({ onRetry = () => {} }) => {
  return (
    <div className='flex-1 h-full'>
      <NoInternetIcon className='block mx-auto max-w-full' />

      <h2 className='text-sm mdl:text-xl font-Bold text-center mb-1'>
        تم فقدان الاتصال بالإنترنت.
      </h2>

      <p className='text-sm mdl:text-xl text-center max-w-2xl mx-auto'>
        يرجى اعادة الاتصال ... إذا استمر الانقطاع، يرجى
        التحقق من اتصال الإنترنت الخاص بك
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
