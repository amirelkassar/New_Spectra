'use client';

import { PrescriptionsAccordion } from '@/client/_components/child';
import { prescriptionsData } from '@/lib/demoData';

export const Prescriptions = () => {
  return (
    <div className='space-y-5 max-h-full'>
      <h3 className='font-bold text-sm lgl:text-xl border-b border-grayLight pb-3'>
        الوصفات الطبية
      </h3>
      <PrescriptionsAccordion
        prescriptions={prescriptionsData}
      />
    </div>
  );
};
