'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useStaffById } from '@/hooks/queries/admin/staff/staff';
import { useAdminStaffContract } from '@/hooks/queries/admin/staff/contract';
import { AcceptedContractA4Content } from '@/dashboard/_components/contract/accepted-contract-a4-content';

export const Contract = ({ id }) => {
  const ContractQuery = useAdminStaffContract(id);
  const { data: employeeData } = useStaffById(id);

  return (
    <div className='flex-1'>
      <QueryWrapper query={ContractQuery}>
        {({ data }) => (
          <AcceptedContractA4Content
            contractData={data}
            employeeData={employeeData?.data}
          />
        )}
      </QueryWrapper>
    </div>
  );
};
