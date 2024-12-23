'use client';

import { ContractCopy } from '@/dashboard/_components/contract/contract-copy';
import { QueryWrapper } from '@/components/query-wrapper';
import { useEmployeeHeadContractById } from '@/hooks/queries/employee-head/contract';
import ROUTES from '@/routes';
import Card from '@/components/card';

export const ViewContract = ({ id = '' }) => {
  const query = useEmployeeHeadContractById(id);

  return (
    <Card className='h-full'>
      <QueryWrapper query={query}>
        {({ data }) => (
          <ContractVersions
            contractId={id}
            versions={data?.versions}
          />
        )}
      </QueryWrapper>
    </Card>
  );
};

const ContractVersions = ({ versions = [], contractId = '' }) => {
  if (!versions.length) return null;

  return (
    <Card className='space-y-5 h-full'>
      {versions.map((copy, i) => (
        <ContractCopy
          key={copy?.id || i}
          {...copy}
          viewHref={ROUTES.DOCTOR.CONTRACTS.VIEW_VERSION(
            contractId,
            copy?.id
          )}
        />
      ))}
    </Card>
  );
};
