import Container from '../../_components/ui/container';
import { Heading } from '../../_components/ui/heading';
import { Steps } from './_components/steps';
const StepsPage = () => {
  return (
    <Container>
      <section className='space-y-5'>
        <Heading label='الخطوات' />
        <Steps />
      </section>
    </Container>
  );
};
export default StepsPage;
