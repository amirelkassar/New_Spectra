import { GradientCard } from '@/components/gradient-card';
import { DoctorBadge } from '@/components/team';
import {
  Section,
  SectionTitle,
} from '@/client/_components/ui';
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
    <Section id='suggested-doctor-notification'>
      <GradientCard className='flex flex-col mdl:flex-row items-center gap-x-20 gap-y-5 justify-center'>
        <div className='space-y-5'>
          <SectionTitle
            id='suggested-doctor-notification'
            className='text-center mdl:text-start mdl:ps-5'
          >
            الطبيب المرشح لك
          </SectionTitle>

          <DoctorBadge
            className='mdl:min-w-64'
            {...doctor}
          />
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
    </Section>
  );
};
