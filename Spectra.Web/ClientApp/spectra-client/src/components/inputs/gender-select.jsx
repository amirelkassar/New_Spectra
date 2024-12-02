'use client';

import { useLocale } from 'next-intl';

import SelectInput from '@/components/inputs/select-input';

const DATA = {
  ar: [
    { label: 'انثي', value: '1' },
    { label: 'ذكر', value: '2' },
  ],
  en: [
    { label: 'Female', value: '1' },
    { label: 'Male', value: '2' },
  ],
};

export const GenderSelect = ({ ...props }) => {
  const locale = useLocale();

  return (
    <SelectInput
      {...props}
      data={props.data || DATA[locale]}
      size={props.size || 'lg'}
      onChange={(value) => {
        props.onChange({
          target: {
            value,
            name: props.name,
          },
        });
      }}
    />
  );
};
