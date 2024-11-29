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
  return <div className='space-y-5'></div>;
};
