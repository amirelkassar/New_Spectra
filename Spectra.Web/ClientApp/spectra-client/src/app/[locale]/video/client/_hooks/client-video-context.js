'use client';

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

const ClientVideoContext = createContext({});

export const ClientVideoProvider = ({ children }) => {
  const [isChatOpen, setChat] = useState(false);

  const toggleChat = useCallback(() => {
    setChat((prev) => !prev);
  }, []);

  return (
    <ClientVideoContext.Provider
      value={{
        isChatOpen,
        toggleChat,
      }}
    >
      {children}
    </ClientVideoContext.Provider>
  );
};

export const useClientVideo = () => {
  const context = useContext(ClientVideoContext);

  if (!context) {
    throw new Error(
      'useClientVideo must be used within a ClientVideoProvider'
    );
  }

  return context;
};
