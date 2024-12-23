import { RenderLayout } from './_components/render-layout';

const ContractLayout = async ({ params, children }) => {
  const contractId = params?.contractId || '';

  return <RenderLayout id={contractId}>{children}</RenderLayout>;
};

export default ContractLayout;
