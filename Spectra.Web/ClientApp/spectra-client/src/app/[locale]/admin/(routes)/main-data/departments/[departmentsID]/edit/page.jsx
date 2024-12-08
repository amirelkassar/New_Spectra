import { BackButton } from '@/components/buttons/back-button';
import { UpdateDepartment } from '../_components/update-department';
import Card from '@/components/card';

const UpdateDepartmentPage = ({ params }) => {
  const departmentId = params?.departmentsID;

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل القسم</h2>
      </div>

      <UpdateDepartment id={departmentId} />
    </Card>
  );
};

export default UpdateDepartmentPage;
