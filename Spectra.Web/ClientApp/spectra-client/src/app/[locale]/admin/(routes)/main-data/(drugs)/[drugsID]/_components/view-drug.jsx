'use client';

import Image from 'next/image';

import { GetDrugsID } from '@/hooks/queries/admin/main-data/drugs';
import { QueryWrapper } from '@/components/query-wrapper';
import { Info } from '@/admin/_components/ui';
import { useImagePath } from '@/hooks/use-image-path';

export const ViewDrug = ({ id }) => {
  const query = GetDrugsID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Drug data={data} />}
    </QueryWrapper>
  );
};

const Drug = ({ data }) => {
  if (!data) return null;
  return (
    <div className='space-y-5'>
      <DrugImage
        label='صورة العقار'
        data={data?.imagePath}
        noImageText='لا يوجد صورة'
      />

      <Info label='الاسم' data={data?.name} />
      <Info label='الكود' data={data?.code} />
      <Info label='المادة الفعالة' data={data?.activeIngredient} />
      <Info label='الاسم العلمى' data={data?.scientificName} />
      <Info label='النوع' data={data?.type} />
      <Info
        label='الجرعة الموصى بها'
        data={data?.recommendedDosage}
      />
      <Info label='تركيز الدواء' data={data?.doncentration} />
      <Info
        label='تفاعلات الدواء مع ادوية اخرى'
        data={data?.interactionsWithOtherdrugs}
      />

      <Info label='موانع الاستخدام' data={data?.contraindications} />

      <Info
        label='ملاحظات'
        data={data?.nots}
        className='bg-blueLight rounded-xl p-5'
      />
    </div>
  );
};

const DrugImage = ({ label = '', data = '', noImageText = '' }) => {
  const image = useImagePath(data);

  return (
    <div className='pb-5 border-b border-grayLight last:border-transparent'>
      <h3 className='font-bold mb-2 text-xs md:text-base'>{label}</h3>
      {image ? (
        <Image
          alt='drugs'
          src={image}
          className='h-16 lg:h-28 w-auto object-contain object-center'
          width={100}
          height={110}
          priority
        />
      ) : (
        <p className='text-sm md:text-base'>{noImageText}</p>
      )}
    </div>
  );
};
