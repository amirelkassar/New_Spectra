'use client';

import Card from '@/components/card';
import { QueryWrapper } from '@/components/query-wrapper';
import { ContractCopy } from '@/dashboard/_components/contract/contract-copy';
import { useEmployeeContract } from '@/hooks/queries/employee/contract';

export const ShowContracts = () => {
  const query = useEmployeeContract();

  return (
    <QueryWrapper query={query} isFiltered={true}>
      {({ data, hasData }) => (
        <ContractVersions
          hasData={hasData}
          versions={data?.versions}
        />
      )}
    </QueryWrapper>
  );
};

const ContractVersions = ({ versions = [], hasData = false }) => {
  if (!hasData) return null;

  if (!versions.length) return null;

  return (
    <Card className='space-y-5 h-full'>
      {versions.map((copy, i) => (
        <ContractCopy key={copy?.id || i} {...copy} />
      ))}
    </Card>
  );
};
