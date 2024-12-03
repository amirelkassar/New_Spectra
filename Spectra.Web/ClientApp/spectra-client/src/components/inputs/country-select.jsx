'use client';

import { useLocale } from 'next-intl';

import SelectInput from '@/components/inputs/select-input';
import { CountriesLibrary } from '@/lib/countries';

const COUNTRIES = CountriesLibrary.getCountries();

const DATA = {
  ar: COUNTRIES.map((c) => ({
    label: `${c.code} ${c.arName}`,
    value: `${c.code}-${c.name}`,
  })),
  en: COUNTRIES.map((c) => ({
    label: `${c.code} ${c.name}`,
    value: `${c.code}-${c.name}`,
  })),
};

export const CountrySelect = ({ ...props }) => {
  const locale = useLocale();

  return (
    <SelectInput
      {...props}
      data={props.data || DATA[locale]}
      size={props.size || 'lg'}
      searchable
    />
  );
};
