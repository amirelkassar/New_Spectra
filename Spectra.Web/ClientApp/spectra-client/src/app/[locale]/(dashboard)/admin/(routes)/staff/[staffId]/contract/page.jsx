import { Contract } from './_components/contract';

const ContractsPage = ({ params }) => {
  const staffId = params?.staffId;
  return <Contract id={staffId} />;
};

export default ContractsPage;
