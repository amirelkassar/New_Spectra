import {
  BackButton,
  Container,
  H1,
  Section,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { ComplaintsForm } from './_components/complaints-form';
import Card from '@/components/card';

const ComplaintsPage = () => {
  return (
    <Container>
      <Section id='complaints' className='mdl:pt-0'>
        <Card>
          <div className='flex items-center gap-5 mb-5'>
            <BackButton />
            <H1>الاعدادات - الشكاوي</H1>
          </div>

          <ComplaintsForm />
        </Card>
      </Section>
    </Container>
  );
};

export default ComplaintsPage;
