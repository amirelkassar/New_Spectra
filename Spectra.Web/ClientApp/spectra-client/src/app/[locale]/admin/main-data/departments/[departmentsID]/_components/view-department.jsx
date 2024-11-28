'use client';

import { GetSectionID } from '@/hooks/queries/admin/main-data/section';
import { QueryWrapper } from '@/components/query-wrapper';

export const ViewDepartment = ({ id }) => {
  const {
    data,
    refetch,
    isPending,
    isPaused,
    isError,
    failureReason,
  } = GetSectionID(id);

  const item = data?.data;
  const hasData = !!item?.name;
  const errorCode = failureReason?.status;

  return (
    <QueryWrapper
      status={{
        isPending,
        isPaused,
        isError,
        hasData,
        errorCode,
      }}
      refetch={refetch}
    >
      <Department data={item} />
    </QueryWrapper>
  );
};

const Department = ({ data }) => {
  if (!data) return null;
  return null;
};
