import Container from '../_components/container';

import { H1 } from '../_components/h1';
import { ChildSelect } from '../_components/child-select';
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
