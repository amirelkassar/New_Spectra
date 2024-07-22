import clsx from 'clsx';
import CheckIcon from '@/assets/icons/check';

export const Step = ({ step, isDone = false, length, index }) => {
  return (
    <div className={clsx('space-y-2 w-full', !isDone && 'opacity-40')}>
      <div
        className={clsx(
          'relative after:absolute after:h-[1px] after:w-full after:bg-grayDark after:top-1/2 after:-translate-y-1/2 after:left-0',
          isDone && 'after:bg-greenMain',
          length === index + 1 && 'after:hidden'
        )}
      >
        <div
          className={clsx(
            'w-8 h-8 shrink-0 rounded-full flex items-center justify-center relative z-10',
            isDone ? 'bg-greenMain' : 'bg-grayDark text-white text-[20px]'
          )}
        >
          {isDone ? <CheckIcon /> : index + 1}
        </div>
      </div>
      <p className='text-black w-full flex items-center font-semibold'>
        {step.label}
      </p>
      <p className='text-black text-xs lgl:max-w-[187px] text-end lgl:text-start'>
        {step.description}
      </p>
    </div>
  );
};
