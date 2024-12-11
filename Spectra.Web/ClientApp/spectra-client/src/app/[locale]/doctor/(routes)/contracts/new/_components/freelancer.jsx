import { Badge, Title } from '../../_components/ui';
import { FreelanceServices } from './freelance-services';

export const Freelancer = () => {
  return (
    <div className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <Title>
          Price of your services as a Freelancer
        </Title>
        <div className='flex justify-end grow gap-3'>
          <Badge>Duration: 15 min</Badge>
          <Badge>Platform Fee: 30%</Badge>
        </div>
      </div>

      <FreelanceServices />
    </div>
  );
};
