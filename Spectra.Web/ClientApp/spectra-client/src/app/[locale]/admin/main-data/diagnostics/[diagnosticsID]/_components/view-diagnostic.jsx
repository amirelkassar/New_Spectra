'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetDiagnosticsID } from '@/hooks/queries/admin/main-data/diagnostics';
import { Info } from '../../../_components/info';

export const ViewDiagnostic = ({ id }) => {
  const {
    data,
    isPending,
    isPaused,
    isError,
    refetch,
    failureReason,
  } = GetDiagnosticsID(id);

  const hasData = !!Object.keys(data?.data || {})?.length;

  const errorCode = failureReason?.status;

  return (
    <QueryWrapper
      status={{
        isError,
        isPending,
        isPaused,
        hasData,
        errorCode,
      }}
      refetch={refetch}
    >
      <Diagnostic data={data?.data} />
    </QueryWrapper>
  );
};

const Diagnostic = ({ data }) => {
  return (
    <div className='flex flex-col gap-5'>
      <Info label='الكود 1' data={data?.code1} />

      <Info label='الكود 2' data={data?.code2} />

      <Info label='الكود 3' data={data?.code3} />

      <Info label='الاسم' data={data?.name} />

      <Info label='الوصف' data={data?.description} />
    </div>
  );
};
