import { UpdateContract } from '../_components/update-contract';

const UpdateContractPage = ({ params }) => {
  const contractId = params.contractId;

  return <UpdateContract id={contractId} />;
};

export default UpdateContractPage;
