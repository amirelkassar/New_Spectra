'use client';

import { useLocale } from 'next-intl';

import SelectInput from '@/components/inputs/select-input';

const DATA = {
  ar: [
    { label: 'دكتور', value: '1' },
    { label: 'اخصائي', value: '2' },
    { label: 'محاسب', value: '3' },
    { label: 'سكرتير', value: '4' },
  ],
  en: [
    { label: 'Doctor', value: '1' },
    { label: 'Specialist', value: '2' },
    { label: 'Accountant', value: '3' },
    { label: 'Secretary', value: '4' },
  ],
};

export const ProfessionSelect = ({ ...props }) => {
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
