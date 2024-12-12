import { Container } from '@/app/[locale]/(dashboard)/client/_components/ui';
import { Header } from './_components/header';
import { Legend } from './_components/legend';
import { Calendar } from './_components/calendar';

const CalendarPage = () => {
  return (
    <Container className='lg:bg-white space-y-5'>
      <Header />
      <Legend />
      <Calendar />
    </Container>
  );
};

export default CalendarPage;
