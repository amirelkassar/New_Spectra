import { cn } from '@/lib/utils';

export const Info = ({
  title = '',
  value = '',
  valueClassName = '',
  titleClassName = '',
  containerClassName = '',
}) => {
  if (!title && !value) return null;
  return (
    <div className={containerClassName}>
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

      {(typeof value === 'string' ||
        typeof value === 'number') && (
        <p
          className={cn(
            'text-xs mdl:text-base font-bold',
            valueClassName
          )}
        >
          {value}
        </p>
      )}

      {Array.isArray(value) &&
        value?.map((item, index) => (
          <p
            key={index}
            className={cn(
              'text-xs mdl:text-base font-bold',
              valueClassName
            )}
          >
            {item}
          </p>
        ))}
    </div>
  );
};
