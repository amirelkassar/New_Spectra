import { Badge, Title } from '../../_components/ui';
import { SpectraTeamServices } from './spectra-team-services';

export const SpectraTeam = () => {
  return (
    <div className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <Title>
          The price of your services as a member of the
          Spectra team
        </Title>
        <div className='flex justify-end grow gap-3'>
          <Badge>Duration: 30 min</Badge>
          <Badge>Your Share: 75%</Badge>
        </div>
      </div>

      <SpectraTeamServices />
    </div>
  );
};
