'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useServicesById } from '@/hooks/queries/admin/main-data/services';

export const ViewService = ({ id }) => {
  const query = useServicesById(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Service data={data} />}
    </QueryWrapper>
  );
};

const Service = ({ data }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className=' font-Regular mb-3 text-sm lg:text-base'>
          اسم الخدمة
        </h3>
        <p className='text-base lg:text-xl font-bold'>
          {' '}
          {data?.data.data.name}{' '}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className=' font-Regular mb-3 text-sm lg:text-base'>
          تعريف للخدمة
        </h3>
        <p className='text-base lg:text-xl font-bold'>
          {data?.data.data.definitionServices}
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className=' font-Regular mb-3 text-sm lg:text-base'>
          سعر الخدمة
        </h3>
        <p className='text-base lg:text-xl font-bold'>
          {' '}
          {data?.data.data.price}$
        </p>
      </div>
      <div className='pb-5 border-b last-of-type:border-none border-grayLight'>
        <h3 className=' font-Regular mb-3 text-sm lg:text-base'>
          الشروط و الاحكام
        </h3>
        <p className='text-base lg:text-xl font-bold'>
          {data?.data.data.termsAndConditions}
        </p>
      </div>
    </div>
  );
};
