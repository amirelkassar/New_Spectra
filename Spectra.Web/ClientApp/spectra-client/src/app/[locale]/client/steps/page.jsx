import Container from '../_components/container';
import { Heading } from '../_components/heading';
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
