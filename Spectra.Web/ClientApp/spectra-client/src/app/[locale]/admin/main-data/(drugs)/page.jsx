import { Heading } from '../_components/heading';
import { DrugsTable } from './_components/drugs-table';

import ROUTES from '@/routes';

const DrugClient = () => {
  return (
    <div>
      <Heading
        title='العقاقير'
        btnLabel='اضافة عقار'
        path={ROUTES.ADMIN.DATAMAIN.DRUGSADD}
      />

      <DrugsTable />
    </div>
  );
};

export default DrugClient;
