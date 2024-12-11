'use client';

import { ServicesSelect } from '../../_components/ui';
import { useContractStore } from '../../_hooks';

export const ChooseServices = () => {
  const SERVICES = useContractStore((s) => s.allServices);

  const selectedFreelanceIds = useContractStore(
    (s) => s.selectedFreelanceIds
  );

  const selectedSpectraTeamIds = useContractStore(
    (s) => s.selectedSpectraTeamIds
  );

  const setSelectedFreelanceIds = useContractStore(
    (s) => s.setSelectedFreelanceIds
  );

  const setSelectedSpectraTeamIds = useContractStore(
    (s) => s.setSelectedSpectraTeamIds
  );

  return (
    <ServicesSelect
      data={SERVICES}
      selectedFreelance={selectedFreelanceIds}
      selectedSpectra={selectedSpectraTeamIds}
      onFreelanceSelect={setSelectedFreelanceIds}
      onSpectraSelect={setSelectedSpectraTeamIds}
    />
  );
};
