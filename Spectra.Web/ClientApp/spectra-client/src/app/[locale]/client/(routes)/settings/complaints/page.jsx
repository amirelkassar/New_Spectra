import {
  BackButton,
  Container,
  H1,
} from '@/client/_components/ui';
import { ComplaintsForm } from './_components/complaints-form';

const ComplaintsPage = () => {
  return (
    <Container className='space-y-5 lg:bg-white'>
      <div className='flex items-center gap-5'>
        <BackButton />
        <H1>الاعدادات - الشكاوي</H1>
      </div>

      <ComplaintsForm />
    </Container>
  );
};

export default ComplaintsPage;
