import { ChatHub } from '@/components/chat-hub';
import { RenderLayout } from './_components/render-layout';

const ContractLayout = async ({ params, children }) => {
  const contractId = params?.contractId || '';

  return (
    <RenderLayout id={contractId}>
      {children}
      <ChatHub />
    </RenderLayout>
  );
};

export default ContractLayout;
