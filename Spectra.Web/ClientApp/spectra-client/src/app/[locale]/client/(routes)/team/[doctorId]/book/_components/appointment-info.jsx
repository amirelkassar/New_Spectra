import Avatar from '@/components/avatar';
import Card from '@/components/card';
import { BackButton, H1 } from '@/client/_components/ui';
import { AppointmentDate } from './appointment-date';

export const AppointmentInfo = ({ data = {} }) => {
  return (
    <Card className='space-y-5'>
      <div className='flex gap-5'>
        <BackButton />
        <H1>اختيار الميعاد</H1>
      </div>

      <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
        <Doctor
          avatar={data?.avatar}
          name={data?.doctor}
          profession={data?.profession}
        />

        <AppointmentDate />
      </div>
    </Card>
  );
};

const Doctor = ({
  avatar = '',
  name = '',
  profession = '',
}) => {
  return (
    <div className='flex gap-5'>
      <Avatar
        src={avatar}
        name={name}
        className='size-20'
        radius='md'
      />
      <div className='text-xs mdl:text-base space-y-1'>
        <h5 className='font-bold'>{name}</h5>
        <p>{profession}</p>
      </div>
    </div>
  );
};
