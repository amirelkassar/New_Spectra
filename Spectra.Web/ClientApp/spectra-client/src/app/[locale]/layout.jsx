import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import 'react-phone-input-2/lib/material.css';
import '@mantine/carousel/styles.css';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { MantineProvider } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { TokenProvider } from '@/hooks/use-token';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactQueryConfig from '@/config/react-query-config';
import ConfirmModal from '@/components/modal/confirm-modal';
import { getToken } from '@/lib/token';
import { getMessages } from 'next-intl/server';
import { getAuth } from '@/lib/auth';
import { SessionProvider } from '@/hooks/use-auth';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Spectra App',
  description: 'Spectra App',
};

export default async function RootLayout({ children, params }) {
  const locale = params?.locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const [token, session, messages] = await Promise.all([
    getToken(),
    getAuth(),
    getMessages(),
  ]);

  return (
    <html lang={locale} dir={direction}>
      <body className='text-black bg-white'>
        <NextIntlClientProvider messages={messages}>
          <TokenProvider initialValue={token}>
            <SessionProvider initialValue={session}>
              <MantineProvider>
                <ReactQueryConfig>
                  {children}
                  <Toaster />
                  <ReactQueryDevtools initialIsOpen={false} />
                  <ConfirmModal />
                </ReactQueryConfig>
              </MantineProvider>
            </SessionProvider>
          </TokenProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
