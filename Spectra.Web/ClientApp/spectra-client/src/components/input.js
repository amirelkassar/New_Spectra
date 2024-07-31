import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Input({
  label,
  type,
  id,
  placeholder,
  value,
  setValue,
  containerClassName,
  labelClassName,
  inputClassName,
  readOnly,
  min,
  minLength,
  error,
  setError,
  handleOnChange,
  isOptional = false,
}) {
  const [hideErr, setHideErr] = useState(false);
  return (
    <div className={cn('flex flex-col gap-2 relative', containerClassName)}>
      {isOptional && (
        <div className='absolute end-0 top-2 text-xs text-grayDark'>
          اختياري
        </div>
      )}{' '}
      <label htmlFor={id ? id : label} className={cn('', labelClassName)}>
        {label}
      </label>
      <input
        type={type ? type : 'text'}
        id={id ? id : label}
        className={cn(
          'default-field',
          inputClassName,
          error && 'ring-2 ring-red'
        )}
        placeholder={placeholder}
        value={value}
        onChange={
          handleOnChange
            ? handleOnChange
            : (e) => {
                setValue(e.target.value);
                setHideErr(true);
              }
        }
        readOnly={readOnly}
        min={min}
        minLength={minLength}
      />
      {error && (
        <p className='text-red whitespace-pre-line'>{hideErr ? '' : error}</p>
      )}
    </div>
  );
}
