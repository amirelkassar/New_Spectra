'use client';

import { useLocale } from 'next-intl';

import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { InfoData } from '@/dashboard/_components/ui/info-data';
import ADHD from '@/assets/icons/adhd';
import CheckHeartIcon from '@/assets/icons/check-heart';
import Card from '@/components/card';
import Button from '@/components/button';

export const DoctorSpecializationsInfo = ({
  specializations = [],
  mainSpecializationArName = '',
  mainSpecializationEnName = '',
  sectionArEnName = '',
  sectionEnName = '',
}) => {
  const locale = useLocale();

  const key = locale === 'ar' ? 'arName' : 'enName';

  const mainSpecialization =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  const section = locale === 'ar' ? sectionArEnName : sectionEnName;

  return (
    <div className='space-y-3'>
      <SectionTitle>التخصصات الطبية</SectionTitle>

      <Card className='space-y-5'>
        <div className='flex items-start gap-3'>
          <CheckHeartIcon className='size-5 mdl:size-7' />
          <InfoData
            direction='col'
            weight='reverse'
            label='القسم'
            value={section}
          />
        </div>

        <div className='flex items-start gap-3'>
          <CheckHeartIcon className='size-5 mdl:size-7' />
          <InfoData
            direction='col'
            weight='reverse'
            label='التخصص الرئيسي'
            value={mainSpecialization}
          />
        </div>

        <div className='flex items-start gap-3'>
          <CheckHeartIcon className='size-5 mdl:size-7' />
          <h4 className='font-bold text-xs mdl:text-base'>
            التخصصات الفرعية
          </h4>
        </div>

        {!!specializations.length ? (
          <div className='flex flex-wrap gap-3'>
            {specializations.map((item) => (
              <Button
                key={item?.id}
                variant='blueLight'
                className='font-medium cursor-default px-4'
              >
                {item[key]}
              </Button>
            ))}
          </div>
        ) : (
          <p className='text-grayDark'>
            <ADHD className='size-4 inline-block me-2' />
            لا يوجد تخصصات
          </p>
        )}
      </Card>
    </div>
  );
};
