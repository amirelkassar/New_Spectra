'use client';

import { Certificate } from '@/components/team/certificate';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import Card from '@/components/card';
import ADHD from '@/assets/icons/adhd';

export const DoctorCertificationsInfo = ({ data = [] }) => {
  if (!data?.length)
    return (
      <Card title='الشهادات' className='space-y-5'>
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          لا يوجد شهادات
        </p>
      </Card>
    );
  return (
    <div className='space-y-5'>
      <SectionTitle>الشهادات</SectionTitle>

      <div className='flex flex-wrap gap-5'>
        {data?.map((item) => (
          <Certificate
            key={item?.id}
            name={item?.name}
            image={item?.path}
            date={item?.date}
          />
        ))}
      </div>
    </div>
  );
};
