'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useProfile } from '@/hooks/queries/user/profile';
import { useEmployeeContract } from '@/hooks/queries/employee/contract';
import { AcceptedContractA4Content } from '@/dashboard/_components/contract/accepted-contract-a4-content';

export const Contract = () => {
  const ContractQuery = useEmployeeContract();

  const { data: employeeData } = useProfile();

  return (
    <QueryWrapper query={ContractQuery}>
      {({ data }) => (
        <AcceptedContractA4Content
          contractData={data}
          employeeData={employeeData?.data}
        />
      )}
    </QueryWrapper>
  );
};
