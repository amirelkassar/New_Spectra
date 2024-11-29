'use client';

import { BackButton } from '@/components/buttons/back-button';
import { AddDepartment } from './_components/add-department';

function Page() {
  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>اضافة قسم</h2>
      </div>

      <AddDepartment />
    </div>
  );
}

export default Page;
