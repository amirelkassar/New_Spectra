import { Badge, Title } from '../../_components/ui';
import { CONTRACT_RATES } from '../../contract';
import { SpectraTeamServices } from './spectra-team-services';

export const SpectraTeam = () => {
  return (
    <div className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <Title>
          The price of your services as a member of the Spectra team
        </Title>
        <div className='flex justify-end grow gap-3'>
          <Badge>
            Duration: {CONTRACT_RATES.spectraTeam.duration} min
          </Badge>
          <Badge>
            Your Share:{' '}
            {CONTRACT_RATES.spectraTeam.employeePercentage}%
          </Badge>
        </div>
      </div>

      <SpectraTeamServices />
    </div>
  );
};
