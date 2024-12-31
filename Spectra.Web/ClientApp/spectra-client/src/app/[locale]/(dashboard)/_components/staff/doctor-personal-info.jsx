'use client';

import { useGender } from '@/hooks/use-gender';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { InfoData } from '@/dashboard/_components/ui/info-data';
import Card from '@/components/card';

export const DoctorPersonalInfo = ({ data, children }) => {
  const name = (() => {
    if (!data?.firstName || !data?.lastName) return '';
    return `${data?.firstName} ${data?.lastName}`;
  })();

  const gender = useGender(data?.humenGender);

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between px-5 mdl:px-0'>
        <SectionTitle>البيانات الشخصية</SectionTitle>
        {children}
      </div>
      <div className='grid grid-cols-1 mdl:grid-cols-2 gap-2'>
        <Card>
          <InfoData
            label='الاسم'
            value={name}
            direction='col'
            valueClassName='capitalize'
          />
        </Card>
        <Card>
          <InfoData label='النوع' value={gender} direction='col' />
        </Card>

        <Card>
          <InfoData
            label='الوظيفة'
            value={data?.jobName}
            direction='col'
          />
        </Card>

        <Card>
          <InfoData
            label='المسمي الوظيفي'
            value={data?.prefix}
            direction='col'
          />
        </Card>

        <Card>
          <InfoData
            label='البريد الإلكتروني'
            value={data?.emailaddress}
            direction='col'
          />
        </Card>

        <Card>
          <InfoData
            label='رقم الهاتف'
            value={data?.phoneNumber}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='رقم الهوية'
            value={data?.nationalId}
            direction='col'
          />
        </Card>

        <Card>
          <InfoData
            label='البلد'
            value={data?.country}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='المدينة'
            value={data?.city}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='الحي'
            value={data?.state}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='اسم الشارع'
            value={data?.streetName}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='المبني'
            value={data?.building}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='الطابق'
            value={data?.floor}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='علامة مميزة للعنوان'
            value={data?.commonMark}
            direction='col'
          />
        </Card>
        <Card>
          <InfoData
            label='رقم البريد'
            value={data?.postalCode}
            direction='col'
          />
        </Card>
      </div>
    </div>
  );
};
