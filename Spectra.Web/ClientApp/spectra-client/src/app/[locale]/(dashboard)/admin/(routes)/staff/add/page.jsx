import { H1 } from '@/dashboard/_components/ui/h1';
import { BackButton } from '@/components/buttons/back-button';
import { AddEmployee } from './_components/add-employee';
import Card from '@/components/card';

const AddEmployeePage = () => {
  return (
    <Card className='h-full space-y-10'>
      <div className='flex items-center gap-5'>
        <BackButton />
        <H1>اضافة موظف</H1>
      </div>

      <AddEmployee />
    </Card>
  );
};

export default AddEmployeePage;
