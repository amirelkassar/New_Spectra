'use client';

import SelectInput from '@/components/inputs/select-input';

const DATA = [
  { label: 'Doctor Of Medicine', value: '1' },
  { label: 'Bachelor Of Medicine', value: '2' },
  { label: 'Bachelor Of Pharmacy', value: '5' },
  { label: 'Bachelor Of Nursing', value: '6' },
  { label: 'Master Of Medicine', value: '7' },
  { label: 'Master Of Surgery', value: '8' },
  { label: 'Master Of Public Health', value: '9' },
  { label: 'Doctor Of Philosophy', value: '11' },
  { label: 'Doctor Of Pharmacy', value: '15' },
  { label: 'Doctor Of Nursing Practice', value: '16' },
];

export const AcademicDegreeSelect = ({ ...props }) => {
  return (
    <SelectInput
      {...props}
      data={props.data || DATA}
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
