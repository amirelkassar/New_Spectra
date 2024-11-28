'use client';

import { GetSectionID } from '@/hooks/queries/admin/main-data/section';
import { QueryWrapper } from '@/components/query-wrapper';

export const ViewDepartment = ({ id }) => {
  const query = GetSectionID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Department data={data} />}
    </QueryWrapper>
  );
};

const Department = ({ data }) => {
  if (!data) return null;
  return null;
};
