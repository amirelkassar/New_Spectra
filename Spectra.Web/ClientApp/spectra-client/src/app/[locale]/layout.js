import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import './globals.css';
import clsx from 'clsx';
import localFont from 'next/font/local';

import { NextIntlClientProvider, useMessages } from 'next-intl';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const ibm = localFont({
  src: [
    {
      path: '../../assets/fonts/IBMPlexSansArabicThin.ttf',
      weight: '100',
    },
    {
      path: '../../assets/fonts/IBMPlexSansArabicExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../../assets/fonts/IBMPlexSansArabicLight.ttf',
      weight: '300',
    },
    {
      path: '../../assets/fonts/IBMPlexSansArabicRegular.ttf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/IBMPlexSansArabicMedium.ttf',
      weight: '500',
    },
    {
      path: '../../assets/fonts/IBMPlexSansArabicSemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../assets/fonts/IBMPlexSansArabicBold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-ibm',
});

export default function RootLayout({ children, params }) {
  const messages = useMessages();
  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={clsx(ibm.variable, 'text-black')}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <MantineProvider theme={'light'}>{children}</MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}