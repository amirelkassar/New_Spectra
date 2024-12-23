import { getEmployeeContract } from '@/hooks/queries/employee/contract';
import { HasContractMessage } from '@/dashboard/_components/contract/has-contract-message';
import { NewContract } from './_components/new-contract';

const NewContractPage = async () => {
  const hasContract = await getHasContract();

  if (hasContract) return <HasContractMessage />;

  return <NewContract />;
};

export default NewContractPage;

const getHasContract = async () => {
  try {
    const res = await getEmployeeContract();
    if (res?.data) return true;
    return false;
  } catch {
    return false;
  }
};
