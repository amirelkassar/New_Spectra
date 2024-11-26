import {
  H1,
  BackButton,
  Container,
} from '@/client/_components/ui';
import { SurveyForms } from './_components/survey-forms';
import { MILESTONES } from '@/lib/demoData';

const EarlyCheckPage = () => {
  return (
    <Container className='space-y-5'>
      <div className='flex items-center gap-3 mt-5 mdl:mt-0'>
        <BackButton />
        <H1>خدمة الكشف المبكر</H1>
      </div>

      <SurveyForms forms={MILESTONES} />
    </Container>
  );
};

export default EarlyCheckPage;
