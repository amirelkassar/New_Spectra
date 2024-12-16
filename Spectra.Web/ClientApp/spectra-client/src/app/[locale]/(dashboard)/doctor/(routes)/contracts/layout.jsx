import { ContractLayout } from './_components/contract-layout';
import { Chat } from './_components/contract-layout/chat';
import { ContractProvider } from './_hooks/use-contract-store';

export const contractCase = {
  0: 'notStarted',
  1: 'save',
  2: 'sentToAdmin',
  3: 'backToEmployee',
  4: 'readyForSigning',
  5: 'offerAccepted',
  6: 'active',
  7: 'refused',
};

const Layout = async ({ children }) => {
  return (
    <ContractProvider>
      <div
        data-case={contractCase[0]}
        className='my-5 md:m-0 md:p-5 lg:p-3 md:h-full flex flex-col'
      >
        <ContractLayout contractCase={contractCase[0]} />

        <div className='flex overflow-hidden'>
          <Chat />

          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </ContractProvider>
  );
};

export default Layout;
