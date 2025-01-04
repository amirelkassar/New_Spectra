import {
  H1,
  Container,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { ChildSelect } from '@/app/[locale]/(dashboard)/client/_components/child';
import { CHILDS } from '@/data';
import { Packages } from './_components/packages';

const PackagesPage = () => {
  return (
    <Container>
      <H1 className='mt-3 mdl:mt-0'>الباقات</H1>

      <ChildSelect data={CHILDS} />

      <Packages />
    </Container>
  );
};

export default PackagesPage;
