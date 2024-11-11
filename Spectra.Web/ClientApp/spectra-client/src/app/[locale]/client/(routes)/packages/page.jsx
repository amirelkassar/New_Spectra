import { H1, Container } from '@/client/_components/ui';
import { ChildSelect } from '@/client/_components/child';
import { CHILDS } from '@/data';
import { Packages } from './_components/packages';

const PackagesPage = () => {
  return (
    <Container>
      <H1>الباقات</H1>

      <ChildSelect data={CHILDS} />

      <Packages />
    </Container>
  );
};

export default PackagesPage;
