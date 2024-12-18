import ServerErrorIcon from '@/assets/icons/server-error';
import Button from './button';
import { cn } from '@/lib/utils';

export const ServerError = ({
  onRetry = () => {},
  classNames = {
    container: '',
    icon: '',
    text: '',
    button: '',
  },
}) => {
  return (
    <div className={cn('flex-1 h-full', classNames.container)}>
      <ServerErrorIcon
        className={cn(
          'block mx-auto max-w-full mb-10',
          classNames.icon
        )}
      />

      <p
        className={cn(
          'text-sm mdl:text-xl text-center max-w-2xl mx-auto',
          classNames.text
        )}
      >
        حدث خطأ غير متوقع. يرجى المحاولة لاحقًا أو التواصل مع فريق
        الدعم إذا استمرت المشكلة.
      </p>
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRetry();
        }}
        variant='secondary'
        className={cn(
          'text-sm mdl:text-xl font-bold w-full mx-auto max-w-sm mt-5',
          classNames.button
        )}
      >
        اعادة المحاولة
      </Button>
    </div>
  );
};
