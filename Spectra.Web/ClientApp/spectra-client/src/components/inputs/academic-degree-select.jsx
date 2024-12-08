'use client';

import SelectInput from '@/components/inputs/select-input';
import { ACADEMIC_DEGREE } from '@/data';

export const AcademicDegreeSelect = ({ ...props }) => {
  return (
    <SelectInput
      {...props}
      data={props.data || ACADEMIC_DEGREE}
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
