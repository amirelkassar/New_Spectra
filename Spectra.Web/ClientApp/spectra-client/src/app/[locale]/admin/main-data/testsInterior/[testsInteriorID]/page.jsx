import { BackButton } from '@/components/buttons/back-button';
import { CellActions } from '../_components/cell-actions';
import { ViewTest } from './_components/view-test';

function page({ params }) {
  const testsInteriorID = params?.testsInteriorID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center justify-between gap-5'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>تفاصيل الفحص</h2>
        </div>

        <CellActions />
      </div>

      <ViewTest id={testsInteriorID} />
    </div>
  );
}

export default page;
