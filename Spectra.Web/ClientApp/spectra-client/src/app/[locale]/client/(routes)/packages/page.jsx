import Container from '../../_components/ui/container';

import { H1 } from '../../_components/ui/h1';
import { ChildSelect } from '@/client/_components/child';
import { CHILDSDATA } from '@/lib/demoData';
import { Packages } from './_components/packages';

const PackagesPage = () => {
  return (
    <Container className='space-y-5'>
      <H1>الباقات</H1>

      <ChildSelect data={CHILDSDATA} />

      <Packages />
    </Container>
  );
};

export default PackagesPage;
