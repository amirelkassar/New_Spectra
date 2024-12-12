import { ChildContextProvider } from './_hooks/child-context';
import { CHILDS } from '@/data';

const ClientLayout = ({ children }) => {
  return (
    <ChildContextProvider initialValue={CHILDS[0]}>
      {children}
    </ChildContextProvider>
  );
};

export default ClientLayout;
