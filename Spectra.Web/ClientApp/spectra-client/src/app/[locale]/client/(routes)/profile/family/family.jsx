import Container from '../../../_components/ui/container';
import { FamProfile } from './_components/fam-profile';
import { ChildSelect } from '@/client/_components/child';
import { ChildPortfolio } from './_components/child-portfolio';
export const Family = ({
  parentData = {},
  childData = [],
}) => {
  return (
    <Container className='space-y-10 lg:space-y-5'>
      <FamProfile initialData={parentData} />

      <ChildSelect data={childData} />

      <ChildPortfolio />
    </Container>
  );
};
