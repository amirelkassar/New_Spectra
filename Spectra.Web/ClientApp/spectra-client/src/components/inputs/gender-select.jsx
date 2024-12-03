'use client';

import { useLocale } from 'next-intl';

import SelectInput from '@/components/inputs/select-input';

const DATA = {
  ar: [
    { label: 'ذكر', value: '2' },
    { label: 'انثي', value: '1' },
  ],
  en: [
    { label: 'Male', value: '2' },
    { label: 'Female', value: '1' },
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
      value={String(props.value)}
    />
  );
};
