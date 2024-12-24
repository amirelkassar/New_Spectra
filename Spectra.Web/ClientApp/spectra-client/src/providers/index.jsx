// SERVER APIS
import { getAuth } from '@/lib/auth';
import { getToken } from '@/lib/token';
import { getMessages } from 'next-intl/server';

// PROVIDERS
import { QueryProvider } from './query-provider';
import { TokenProvider } from './token-provider';
import { SessionProvider } from './session-provider';
import { MantineProvider, createTheme } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';

// APP COMPONENTS
import { Toaster } from 'react-hot-toast';
import { ConfirmModal } from '@/components/modal/confirm-modal';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const theme = createTheme({
  breakpoints: {
    xs: '320px',
    sm: '375px',
    sml: '500px',
    md: '667px',
    mdl: '768px',
    lg: '960px',
    lgl: '1024px',
    xl: '1280px',
    xll: '1400px',
    xxl: '1536px',
  },
});

const AppProviders = async ({ children }) => {
  const [token, session, messages] = await Promise.all([
    getToken(),
    getAuth(),
    getMessages(),
  ]);

  return (
    <NextIntlClientProvider messages={messages}>
      <MantineProvider theme={theme}>
        <QueryProvider>
          <TokenProvider initialValue={token}>
            <SessionProvider initialValue={session}>
              {children}
              <Toaster />
              <ReactQueryDevtools initialIsOpen={false} />
              <ConfirmModal />
            </SessionProvider>
          </TokenProvider>
        </QueryProvider>
      </MantineProvider>
    </NextIntlClientProvider>
  );
};

export default AppProviders;
