import {
  BackButton,
  Container,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { ChildPortfolio } from '../../../_components/child';
import { ChildSelect } from '@/app/[locale]/(dashboard)/client/_components/child';
import { CHILDS } from '@/data';

const ChildPage = () => {
  return (
    <Container>
      <BackButton />

      <ChildSelect data={CHILDS} />

      <ChildPortfolio />
    </Container>
  );
};

export default ChildPage;
