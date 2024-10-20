import { BookContextProvider } from './_context/useBook';

const TeamLayout = ({ children }) => {
  return <BookContextProvider>{children}</BookContextProvider>;
};

export default TeamLayout;
