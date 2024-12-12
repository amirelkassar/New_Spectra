import { BackButton } from '@/components/buttons/back-button';
import { ViewDrug } from './_components/view-drug';
import { CellActions } from '../_components/cell-actions';
import Card from '@/components/card';

function ViewDrugPage({ params }) {
  const drugId = params?.drugsID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>العقاقير</h2>
        </div>
        <CellActions />
      </div>

      <ViewDrug id={drugId} />
    </Card>
  );
}

export default ViewDrugPage;
