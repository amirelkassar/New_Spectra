import { cn } from '@/lib/utils';

export const Info = ({
  title = '',
  value = '',
  valueClassName = '',
  titleClassName = '',
}) => {
  if (!title && !value) return null;
  return (
    <div>
      {title && (
        <h4
          className={cn(
            'text-sm mdl:text-base font-normal mb-1',
            titleClassName
          )}
        >
          {title}
        </h4>
      )}
      <p
        className={cn(
          'text-xs mdl:text-base font-bold',
          valueClassName
        )}
      >
        {value}
      </p>
    </div>
  );
};
