'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { useStaffById } from '@/hooks/queries/admin/staff/staff';
import { useAdminStaffContract } from '@/hooks/queries/admin/staff/contract';
import { AcceptedContractA4Content } from '@/dashboard/_components/contract/accepted-contract-a4-content';
import { useAdminDownloadEmployeeContract } from '@/hooks/queries/admin/contract';

export const Contract = ({ id }) => {
  const ContractQuery = useAdminStaffContract(id);
  const { data: employeeData } = useStaffById(id);
  const { mutateAsync: download, isPending } =
    useAdminDownloadEmployeeContract();

  return (
    <div className='flex-1'>
      <QueryWrapper query={ContractQuery}>
        {({ data }) => (
          <AcceptedContractA4Content
            contractData={data}
            employeeData={employeeData?.data}
            onDownload={download}
            isDownloading={isPending}
          />
        )}
      </QueryWrapper>
    </div>
  );
};
