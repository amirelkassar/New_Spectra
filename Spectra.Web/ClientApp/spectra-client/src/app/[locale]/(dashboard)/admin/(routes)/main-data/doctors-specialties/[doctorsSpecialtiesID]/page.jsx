import { CellActions } from '../_components/cell-actions';
import { BackButton } from '@/components/buttons/back-button';
import { ViewSpeciality } from './_components/view-specialty';
import Card from '@/components/card';

const ViewSpecialtyPage = ({ params }) => {
  const doctorsSpecialtiesID = params?.doctorsSpecialtiesID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center justify-between gap-5'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>التخصصات</h2>
        </div>
        <CellActions />
      </div>

      <ViewSpeciality id={doctorsSpecialtiesID} />
    </Card>
  );
};

export default ViewSpecialtyPage;
