import { GradientCard } from '@/components/gradient-card';
import { DoctorBadge } from '../../_components/doctor-badge';
import Button from '@/components/button';

export const SuggestedDoctor = ({
  doctor = {
    name: 'احمد محمد كمال',
    profession: 'اخصائى نفسي',
    rate: '9.5',
    avatar: '',
  },
}) => {
  return (
    <GradientCard className='flex flex-col mdl:flex-row items-center gap-x-20 gap-y-5 justify-center'>
      <div className='space-y-5'>
        <h3 className='font-bold text-sm mdl:text-xl text-center mdl:text-start mdl:ps-5'>
          الطبيب المرشح لك
        </h3>

        <div>
          <DoctorBadge
            className='mdl:min-w-64'
            {...doctor}
          />
        </div>
      </div>

      <div>
        <Button
          className='text-sm mdl:text-xl font-bold w-full mdl:min-w-72'
          variant='secondary'
        >
          حجز ميعاد اول جلسة
        </Button>
      </div>
    </GradientCard>
  );
};
