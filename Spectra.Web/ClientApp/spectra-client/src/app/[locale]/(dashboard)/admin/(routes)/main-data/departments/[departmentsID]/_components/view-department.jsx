'use client';

import { useMemo } from 'react';
import { useLocale } from 'next-intl';

import { GetSectionID } from '@/hooks/queries/admin/main-data/section';
import { QueryWrapper } from '@/components/query-wrapper';
import { Info } from '@/app/[locale]/(dashboard)/admin/_components/ui';

export const ViewDepartment = ({ id }) => {
  const query = GetSectionID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Department data={data} />}
    </QueryWrapper>
  );
};

const Department = ({ data }) => {
  const locale = useLocale();

  const specsifications = useMemo(() => {
    if (!data) return;

    const specs = { ar: [], en: [] };

    data?.specsifications?.forEach((item) => {
      specs.ar.push(item.arName);
      specs.en.push(item.enName);
    });

    return specs;
  }, [data]);

  if (!data) return null;
  return (
    <div className='space-y-5'>
      <Info label='اسم القسم باللغة العربية' data={data.arName} />
      <Info label='اسم القسم باللغة الانجليزية' data={data.enName} />
      <Info label='التخصصات' data={specsifications[locale]} />
      <Info label='رئيس القسم' data={data.headDoctorName} />
    </div>
  );
};
