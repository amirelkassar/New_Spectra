'use client';

import { forwardRef, useMemo } from 'react';
import { useLocale } from 'next-intl';

import { CountriesLibrary } from '@/lib/countries';
import SelectInput from '@/components/inputs/select-input';

const getStates = CountriesLibrary.getStatesByCode;
// const getArStates = CountriesLibrary.getStatesByCodeAr;

export const StateSelect = forwardRef(
  ({ countryCode, ...props }, ref) => {
    const locale = useLocale();

    const DATA = useMemo(() => {
      if (!countryCode) return [];
      return {
        en: getStates(countryCode),
      };
    }, [countryCode]);

    const message = useMemo(() => {
      if (countryCode) return null;
      return locale === 'ar'
        ? 'يرجى تحديد الدولة أولاً'
        : 'Please select a country first';
    }, [locale, countryCode]);

    return (
      <SelectInput
        {...props}
        ref={ref}
        data={props.data || DATA['en']}
        size={props.size || 'lg'}
        searchable
        nothingFoundMessage={message}
      />
    );
  }
);

StateSelect.displayName = 'StateSelect';
