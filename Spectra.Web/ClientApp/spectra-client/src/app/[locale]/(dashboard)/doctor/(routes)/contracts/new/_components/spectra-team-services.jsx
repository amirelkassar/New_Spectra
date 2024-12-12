'use client';

import { memo } from 'react';

import { ServiceInfo } from '../../_components/service-info';
import { useContractStore } from '../../_hooks';
import { Alert } from '@/components/alert';

const MemoizedServiceInfo = memo(ServiceInfo);

export const SpectraTeamServices = () => {
  const spectraTeam = useContractStore(
    (s) => s.spectraTeam
  );

  const remove = useContractStore((s) => s.removeService);

  if (!spectraTeam?.length)
    return (
      <Alert>No spectra team services selected.</Alert>
    );
  return (
    <div>
      {spectraTeam.map((s) => (
        <MemoizedServiceInfo
          key={s.id}
          id={s.id}
          name={s.name}
          price={s.price}
          fee={25 / 100}
          deletable
          onDelete={() => remove(s.id, 'spectraTeam')}
        />
      ))}
    </div>
  );
};
