import PhoneInput from 'react-phone-input-2';
import { PhoneInputProps } from 'react-phone-input-2';

/**
 * @typedef {Object} PhoneInputProps

 */

/**
 * @param {PhoneInputProps} props
 */

const MobileInput = ({ ...props }) => {
  return (
    <div className='space-y-2'>
      <label htmlFor='phone2' className='text-xs lg:text-base mb-2 ps-1'>
        رقم الهاتف
      </label>
      <div dir='ltr'>
        <PhoneInput
          specialLabel=''
          enableSearch={true}
          country={'eg'}
          enableAreaCodes={true}
          autoFormat={false}
          inputProps={{
            type: 'text',
            required: true,
            className:
              '!ps-14 pe-[14px] w-full rounded-lg outline-none focus:border-greenMain border border-[#ced4da]  h-[42px]',
            placeholder: '',
            id: 'phone2',
          }}
          {...props}
        />
      </div>
    </div>
  );
};

export default MobileInput;
