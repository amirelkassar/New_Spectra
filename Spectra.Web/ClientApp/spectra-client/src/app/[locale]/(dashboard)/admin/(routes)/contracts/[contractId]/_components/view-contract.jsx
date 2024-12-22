'use client';

import { ContractCopy } from '@/dashboard/_components/contract/contract-copy';
import Card from '@/components/card';
import { QueryWrapper } from '@/components/query-wrapper';
import { useAdminContractById } from '@/hooks/queries/admin/contract';
import ROUTES from '@/routes';

export const ViewContract = ({ id = '' }) => {
  const query = useAdminContractById(id);

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
          viewHref={ROUTES.ADMIN.CONTRACTS.VIEW_VERSION(
            contractId,
            copy?.id
          )}
        />
      ))}
    </Card>
  );
};
