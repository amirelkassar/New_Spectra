import Card from '@/components/card';
import { ContractCopy } from '../../_components/contract-copy';

export const ShowContracts = () => {
  return (
    <Card className='space-y-5'>
      <ContractCopy id='1' />
      <ContractCopy id='2' state={2} />
    </Card>
  );
};
