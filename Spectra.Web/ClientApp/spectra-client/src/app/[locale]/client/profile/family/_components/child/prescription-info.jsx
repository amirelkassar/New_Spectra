'use client';

import { useState } from 'react';

import { Info } from '@/app/[locale]/client/_components/info';
import { PrescriptionCard } from './prescrtiption-card';

export const PrescriptionInfo = ({
  data = {},
  showCard = false,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='relative'>
      {showCard && (
        <PrescriptionCard data={data} isDetailed />
      )}

      <div className='grid grid-cols-1 sml:grid-cols-3'>
        <Info
          containerClassName='sml:col-span-3'
          withBorder
          valueClassName='font-normal'
          titleClassName='font-bold'
          title='الاسم'
          value={data?.drugName}
        />
        <Info
          withBorder
          valueClassName='font-normal'
          titleClassName='font-bold'
          title='الجرعة'
          value={data?.dose}
        />
        <Info
          withBorder
          valueClassName='font-normal'
          titleClassName='font-bold'
          title='عدد المرات'
          value={data?.takingNo}
        />
        <Info
          withBorder
          valueClassName='font-normal'
          titleClassName='font-bold'
          title='الفترة الزمنية'
          value={data?.takingPeriod}
        />
        <Info
          containerClassName='sml:col-span-3'
          withBorder
          valueClassName='font-normal'
          titleClassName='font-bold'
          title='ملاحظات الطبيب'
          value={data?.doctorNotes}
        />

        {showMore && (
          <>
            <Info
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='المادة الفعالة'
              value={data?.ingredient}
            />
            <Info
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='الاسم العلمي'
              value={data?.scientificName}
            />
            <Info
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='النوع'
              value={data?.drugClass}
            />
            <Info
              containerClassName='sml:col-span-3'
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='الجرعة الموصي بها'
              value={data?.recommendedDose}
            />
            <Info
              containerClassName='sml:col-span-3'
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='تركيز الدواء'
              value={data?.drugConcentration}
            />
            <Info
              containerClassName='sml:col-span-3'
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='تفاعلات الدواء مع ادوية اخري'
              value={data?.drugInteractions}
            />
            <Info
              containerClassName='sml:col-span-3'
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='موانع الاستخدام'
              value={data?.warnings}
            />
            <Info
              containerClassName='sml:col-span-3'
              withBorder
              valueClassName='font-normal'
              titleClassName='font-bold'
              title='ملاحظات'
              value={data?.drugNotes}
            />
          </>
        )}
      </div>

      <button
        className='text-sm mdl:text-xl underline px-5'
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? 'قراءة اقل' : 'قراءة المزيد....'}
      </button>
    </div>
  );
};
