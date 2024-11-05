import {
  H1,
  BackButton,
  Container,
} from '@/client/_components/ui';
import { Survey } from './_components/survey';
import { MILESTONES } from '@/lib/demoData';

const EarlyCheckPage = () => {
  return (
    <Container className='space-y-5'>
      <div className='flex items-center gap-3'>
        <BackButton />
        <H1>خدمة الكشف المبكر</H1>
      </div>

      <Survey data={MILESTONES} />
    </Container>
  );
};

export default EarlyCheckPage;
