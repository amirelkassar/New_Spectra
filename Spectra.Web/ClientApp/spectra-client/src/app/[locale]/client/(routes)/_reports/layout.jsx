import Container from '../../_components/ui/container';
import { Heading } from '../../_components/ui/heading';

const ReportsLayout = ({ children }) => {
  return (
    <Container>
      <section className='space-y-5'>
        <Heading label='التقارير' />

        {children}
      </section>
    </Container>
  );
};

export default ReportsLayout;
