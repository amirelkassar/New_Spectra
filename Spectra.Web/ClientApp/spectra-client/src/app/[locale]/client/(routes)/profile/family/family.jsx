import { Container } from '@/client/_components/ui';
import { ChildSelect } from '@/client/_components/child';
import { FamProfile } from './_components/fam-profile';
import { ChildPortfolio } from './_components/child-portfolio';
export const Family = ({
  parentData = {},
  childData = [],
}) => {
  return (
    <Container>
      <FamProfile initialData={parentData} />

      <ChildSelect data={childData} />

      <ChildPortfolio />
    </Container>
  );
};
