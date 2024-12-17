'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useServicesById } from '@/hooks/queries/admin/main-data/services';
import {
  Info,
  SectionTitle,
} from '@/app/[locale]/(dashboard)/admin/_components/ui';
import { formatCurrency } from '@/lib/utils';
import { useLocale } from 'next-intl';
import HeartCheckedIcon from '@/assets/icons/heart-checked';
import Image from 'next/image';
import { useImagePath } from '@/hooks/use-image-path';
import { Checkbox } from '@mantine/core';

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
  const locale = useLocale();

  const src = useImagePath(data?.heroImagePath);

  const key = locale === 'ar' ? 'arName' : 'enName';

  return (
    <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
      <Info data={data?.arName} label='اسم الخدمة' />

      <Info data={data?.enName} label='Service Name' />

      <Info data={data?.arDescription} label='وصف الخدمة' />

      <Info data={data?.enDescription} label='Service Description' />

      <Info
        data={data?.arTermsAndConditions}
        label='الشرط والاحكام'
        className='mdl:col-span-2'
      />

      <Info
        data={data?.enTermsAndConditions}
        label='Terms and Conditions'
        className='mdl:col-span-2'
      />

      <Info
        data={formatCurrency(data?.price, 'sar')}
        label='سعر الخدمة'
      />
      <Info
        data={data?.discount && `${data?.discount}%`}
        label='نسبة الخصم'
      />

      <Info
        className='mdl:col-span-2'
        data={
          <div className='grid grid-cols-1 mdl:grid-cols-2 gap-x-2 gap-y-4'>
            <Checkbox
              checked={data.enableForSpectraTeam}
              onChange={() => {}}
              label='إتاحة الخدمة لفريق أطباء سبيكترا'
              color='#10B0C1'
              radius='xs'
              size='md'
            />
            <Checkbox
              checked={data.enableForFreeLancer}
              onChange={() => {}}
              label='إتاحة الخدمة للأطباء المستقلين'
              color='#10B0C1'
              radius='xs'
              size='md'
            />
          </div>
        }
      />

      {!!data?.reports?.length && (
        <div className='mdl:col-span-2'>
          <h3 className='font-bold mb-2 text-xs md:text-base'>
            التقارير الخاصة بالخدمة
          </h3>
          <div className='flex items-center flex-wrap gap-2'>
            {data?.reports?.map((s) => (
              <div
                key={s?.id}
                className='text-xs mdl:text-base bg-blueLight px-5 py-2 font-bold rounded-md'
              >
                {s[key]}
              </div>
            ))}
          </div>
        </div>
      )}
      {!!data?.specifications?.length && (
        <div className='mdl:col-span-2'>
          <h3 className='font-bold mb-2 text-xs md:text-base'>
            التخصصات المرتبطة بالخدمة
          </h3>
          <div className='flex items-center flex-wrap gap-2'>
            {data?.specifications?.map((s) => (
              <div
                key={s?.id}
                className='text-xs mdl:text-base bg-blueLight px-5 py-2 font-bold rounded-md'
              >
                {s[key]}
              </div>
            ))}
          </div>
        </div>
      )}
      {!!data?.contents?.length && (
        <div className='mdl:col-span-2 space-y-5 pt-10 border-t-2 border-grayLight'>
          <SectionTitle>محتوي الخدمة</SectionTitle>
          {data?.contents?.map((c) => (
            <div className='space-y-3' key={c?.arTitle}>
              <div dir='rtl' className='flex items-start gap-3'>
                <HeartCheckedIcon className='shrink-0 text-greenMain' />
                <div>
                  <h3 className='font-bold mb-2 text-xs md:text-base'>
                    {c?.arTitle}
                  </h3>
                  <p className='text-sm md:text-xl'>
                    {c?.arDescription}
                  </p>
                </div>
              </div>

              <div dir='ltr' className='flex items-start gap-3'>
                <HeartCheckedIcon className='shrink-0 text-greenMain' />
                <div>
                  <h3 className='font-bold mb-2 text-xs md:text-base'>
                    {c?.enTitle}
                  </h3>
                  <p className='text-sm md:text-xl'>
                    {c?.enDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {src && (
        <div className='mdl:col-span-2 space-y-5 pt-10 border-t-2 border-grayLight'>
          <SectionTitle>صورة الخدمة</SectionTitle>
          <div className='relative flex items-center justify-center w-auto h-[484px]'>
            <Image
              src={src}
              width={700}
              height={484}
              alt='service-photo'
              className='h-full w-auto object-contain object-center max-w-full max-h-full'
            />
          </div>
        </div>
      )}
    </div>
  );
};
