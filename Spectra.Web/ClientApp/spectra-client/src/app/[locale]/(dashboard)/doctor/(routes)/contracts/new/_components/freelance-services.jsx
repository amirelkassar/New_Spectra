'use client';

import { memo } from 'react';

import { ServiceInfo } from '../../_components/service-info';
import { useContractStore } from '../../_hooks';
import { Alert } from '@/components/alert';

const MemoizedServiceInfo = memo(ServiceInfo);

export const FreelanceServices = () => {
  const freelancer = useContractStore((s) => s.freelancer);

  const remove = useContractStore((s) => s.removeService);

  const percentage = useContractStore(
    (state) => state.freelanceEmployeePercentage
  );

  if (!freelancer?.length)
    return <Alert>No freelance services selected.</Alert>;

  return (
    <div>
      {freelancer.map((s) => (
        <MemoizedServiceInfo
          key={s?.id}
          id={s?.id}
          name={s?.enName}
          price={s?.price}
          employeePercentage={percentage}
          deletable
          onDelete={() => remove(s?.id, 'freelancer')}
          terms={s?.enTermsAndConditions}
        />
      ))}
    </div>
  );
};
