import { ViewContract } from './_components/view-contract';

const ContractPage = ({ params }) => {
  const contractId = params?.contractId || '';

  return <ViewContract id={contractId} />;
};

export default ContractPage;
