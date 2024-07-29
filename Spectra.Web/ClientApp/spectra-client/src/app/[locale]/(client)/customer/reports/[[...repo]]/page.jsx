import { childPopupData } from '@/lib/demoData';
import ChildPopover from '../../../_components/child-popover';
import Container from '../../../_components/container';
import { Heading } from '../../../_components/heading';
import { Reports } from './_components/reports';

const ReportsPage = ({ params }) => {
  const { repo } = params;
  return (
    <Container>
      <section className='space-y-5'>
        <Heading label='التقارير' />
        <ChildPopover data={childPopupData} />
        <Reports repo={repo} />
      </section>
    </Container>
  );
};

export default ReportsPage;
