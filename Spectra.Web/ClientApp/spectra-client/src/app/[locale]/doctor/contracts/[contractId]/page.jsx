import Card from '@/components/card';
import { SignModal } from '../_components/sign-modal';

const ContractPage = ({ params }) => {
  const contractId = params?.contractId || '';
  return (
    <Card>
      <h1>Contract: {contractId}</h1>
      <SignModal />
    </Card>
  );
};

export default ContractPage;
