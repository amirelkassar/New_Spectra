import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import 'react-phone-input-2/lib/material.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import './globals.css';
import {
  NextIntlClientProvider,
  useMessages,
} from 'next-intl';
import ReactQueryConfig from '@/config/react-query-config';
import ConfirmModal from '@/components/modal/confirm-modal';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const metadata = {
  title: 'Spectra App',
  description: 'Spectra App',
};

export default function RootLayout({ children, params }) {
  const messages = useMessages();
  return (
    <html
      lang={params.locale}
      dir={params.locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <body className='text-black'>
        <NextIntlClientProvider
          locale={params.locale}
          messages={messages}
        >
          <MantineProvider theme={'light'}>
            <ReactQueryConfig>
              {children}
              <Toaster />
              <ReactQueryDevtools initialIsOpen={false} />
              <ConfirmModal />
            </ReactQueryConfig>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
