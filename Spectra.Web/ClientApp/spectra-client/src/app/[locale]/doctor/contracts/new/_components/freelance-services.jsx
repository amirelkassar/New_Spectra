'use client';

import { memo } from 'react';

import { ServiceInfo } from '../../_components/service-info';
import { useContractStore } from '../../_hooks';
import { Alert } from '@/components/alert';

const MemoizedServiceInfo = memo(ServiceInfo);

export const FreelanceServices = () => {
  const freelancer = useContractStore((s) => s.freelancer);

  const remove = useContractStore((s) => s.removeService);

  const setPrice = useContractStore(
    (s) => s.setFreelancerPrice
  );

  if (!freelancer?.length)
    return <Alert>No freelance services selected.</Alert>;

  return (
    <div>
      {freelancer.map((s) => (
        <MemoizedServiceInfo
          key={s.id}
          id={s.id}
          name={s.name}
          value={s.price}
          onValueChange={(price) => setPrice(price, s.id)}
          editable
          deletable
          onDelete={() => remove(s.id, 'freelancer')}
        />
      ))}
    </div>
  );
};
