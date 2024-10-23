import Container from '../../_components/container';
import { FamProfile } from './_components/fam-profile';
import { ChildSelect } from '../../_components/child-select';
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
