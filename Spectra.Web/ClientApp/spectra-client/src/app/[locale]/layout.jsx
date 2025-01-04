// CSS IMPORTS
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-phone-input-2/lib/material.css';
import './globals.css';

// COMPONENTS IMPORTS
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

// PROVIDERS IMPORTS
import AppProviders from '@/providers';

// META DATA
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

  return (
    <html lang={locale} dir={direction}>
      <body className='text-black bg-white'>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
