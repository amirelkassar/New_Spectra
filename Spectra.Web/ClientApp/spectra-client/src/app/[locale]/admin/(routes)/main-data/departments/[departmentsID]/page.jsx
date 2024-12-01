import { BackButton } from '@/components/buttons/back-button';
import { CellActions } from '../_components/cell-actions';
import { ViewDepartment } from './_components/view-department';

const ViewDepartmentPage = ({ params }) => {
  const departmentId = params?.departmentsID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4 md:gap-0'>
          <BackButton />
          <h2 className='headTitleDash'>تفاصيل القسم</h2>
        </div>
        <CellActions />
      </div>

      <ViewDepartment id={departmentId} />
    </div>
  );
};

export default ViewDepartmentPage;
