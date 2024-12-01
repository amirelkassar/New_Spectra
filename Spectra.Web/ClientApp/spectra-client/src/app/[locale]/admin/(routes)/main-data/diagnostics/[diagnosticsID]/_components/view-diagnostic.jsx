'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { GetDiagnosticsID } from '@/hooks/queries/admin/main-data/diagnostics';
import { Info } from '@/admin/_components/ui';

export const ViewDiagnostic = ({ id }) => {
  const query = GetDiagnosticsID(id);

  return (
    <QueryWrapper query={query}>
      {({ data }) => <Diagnostic data={data} />}
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
