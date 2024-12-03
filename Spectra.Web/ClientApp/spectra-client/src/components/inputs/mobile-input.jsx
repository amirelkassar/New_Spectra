import { cn } from '@/lib/utils';
import PhoneInput from 'react-phone-input-2';

/**
 * @typedef {Object} PhoneInputProps

 */

/**
 * @param {PhoneInputProps} props
 */

const MobileInput = ({
  size = 'md',
  label = 'رقم الهاتف',
  inputClassName = '',
  className = '',
  error = '',
  ...props
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label
          htmlFor='phone2'
          className='text-base mdl:text-xl mb-2 ps-1 font-normal'
        >
          {label}
        </label>
      )}
      <div dir='ltr'>
        <PhoneInput
          specialLabel=''
          country='sa'
          enableSearch={true}
          enableAreaCodes={true}
          autoFormat={false}
          inputProps={{
            type: 'text',
            required: true,
            className: cn(
              '!ps-14 pe-[14px] w-full rounded-lg outline-none focus:border-greenMain border border-[#ced4da] h-[42px]',
              {
                'h-[50px]': size === 'lg',
              },
              inputClassName
            ),
            placeholder: '',
            id: 'phone2',
          }}
          {...props}
        />
      </div>
      {error && (
        <p className='text-xs mdl:text-base text-red'>
          {error}
        </p>
      )}
    </div>
  );
};

export default MobileInput;
