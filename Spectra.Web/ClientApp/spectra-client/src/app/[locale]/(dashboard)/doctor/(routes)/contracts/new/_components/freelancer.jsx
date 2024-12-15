'use client';

import { Badge, Input, Title } from '../../_components/ui';
import { useContractStore } from '../../_hooks';
import { CONTRACT_RATES } from '../../contract';
import { FreelanceServices } from './freelance-services';

export const Freelancer = () => {
  return (
    <div className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <Title>Price of your services as a Freelancer</Title>
        <div className='flex justify-end grow gap-3 *:flex-1'>
          <Badge>
            Duration: {CONTRACT_RATES.freelancer.duration} min
          </Badge>
          <EmployeeFeeInput />
        </div>
      </div>

      <FreelanceServices />
    </div>
  );
};

const EmployeeFeeInput = () => {
  const value = useContractStore(
    (state) => state.freelanceEmployeePercentage
  );

  const onChange = useContractStore(
    (state) => state.setfreelanceEmployeePercentage
  );

  return (
    <Input
      indicator='%'
      className='h-full w-full'
      placeholder='Your percentage'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type='number'
    />
  );
};
