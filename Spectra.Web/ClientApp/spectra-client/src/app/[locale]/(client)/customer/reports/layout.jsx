import { childPopupData } from '@/lib/demoData';
import ChildPopover from '../../_components/child-popover';
import Container from '../../_components/container';
import { Heading } from '../../_components/heading';

const ReportsLayout = ({ children }) => {
  return (
    <Container>
      <section className='space-y-5'>
        <Heading label='التقارير' />
        <ChildPopover className='lg:min-w-[65%]' data={childPopupData} />
        {children}
      </section>
    </Container>
  );
};

export default ReportsLayout;
