'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useServicesById } from '@/hooks/queries/admin/main-data/services';
import { Info } from '@/admin/_components/ui';
import { formatCurrency } from '@/lib/utils';

export const ViewService = ({ id }) => {
  const query = useServicesById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Service data={data} />}
    </QueryWrapper>
  );
};

// {
//   serviceType: '',
//   enName: '',
//   arName: '',
//   price: '',
//   discount: '',
//   enDescription: '',
//   arDescription: '',
//   enTermsAndConditions: '',
//   arTermsAndConditions: '',
//   reports: [],
//   specifications: [],
//   contents: [],
//   heroImage: undefined,
// }

const Service = ({ data }) => {
  return (
    <div className='space-y-5'>
      <Info
        data={data?.arName}
        label='اسم الخدمة باللغة العربية'
      />

      <Info
        data={data?.enName}
        label='اسم الخدمة باللغة الانجليزية'
      />

      <Info
        data={data?.arDescription}
        label='وصف الخدمة باللغة العربية'
      />

      <Info
        data={data?.enDescription}
        label='وصف الخدمة باللغة الانجليزية'
      />

      <Info
        data={data?.arTermsAndConditions}
        label='الشرط والاحكام باللغة العربية'
      />

      <Info
        data={data?.enTermsAndConditions}
        label='الشروط والاحكام باللغة الانجليزية'
      />

      <Info
        data={formatCurrency(data?.price, 'sar')}
        label='سعر الخدمة'
      />
      <Info
        data={`${data?.discount}%`}
        label='نسبة الخصم'
      />

      {!!data?.contents?.length &&
        data?.contents?.map((c) => (
          <div key={c?.arTitle}>
            <Info
              data={c?.arTitle}
              label='عنوان المحتوى بالعربية'
            />

            <Info
              data={c?.enTitle}
              label='عنوان المحتوى بالانجليزية'
            />

            <Info
              data={c?.arDescription}
              label='وصف المحتوى بالعربية'
            />

            <Info
              data={c?.enDescription}
              label='وصف المحتوى بالانجليزية'
            />
          </div>
        ))}
    </div>
  );
};
