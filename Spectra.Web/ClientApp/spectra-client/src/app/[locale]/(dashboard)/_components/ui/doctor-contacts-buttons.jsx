import CallIcon from '@/assets/icons/call';
import EmailIcon from '@/assets/icons/email';
import SmsIcon from '@/assets/icons/sms';

export const DoctorContactsButton = ({ type = '', ...props }) => {
  if (!type) return null;
  return (
    <div
      {...props}
      role='button'
      className='bg-blueLighter rounded-full p-1 flex items-center justify-center size-9 transition-shadow hover:shadow-md'
    >
      {type === 'phone' && (
        <CallIcon className='text-greenMain size-5' />
      )}
      {type === 'email' && (
        <EmailIcon className='text-greenMain size-5' />
      )}
      {type === 'chat' && (
        <SmsIcon className='text-greenMain size-5' />
      )}
    </div>
  );
};
