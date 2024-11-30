'use client';

import { useCallback, useMemo, useState } from 'react';

import MultiSelectInput from '@/components/inputs/multi-select-input';
import { useSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { useLocale } from 'next-intl';

export const SpecializationSelect = ({
  error,
  onSelect = () => {},
  defaultValue = [],
  name = '',
  label = '',
  placeholder = '',
}) => {
  const locale = useLocale();

  const { data, isPending, isError } =
    useSpecialization('*');

  const [value, setValue] = useState(() => {
    if (!defaultValue.length) return [];
    return defaultValue.map((item) =>
      JSON.stringify({
        id: item.id,
        arName: item.arName,
        enName: item.enName,
      })
    );
  });

  const items = data?.data?.items;
  const hasData = data?.data?.totalCount;

  const messages = useMemo(() => {
    if (isPending) return 'Loading ...';
    if (isError) return 'Error loading data';
    if (!hasData) return 'No data found';
  }, [isPending, isError, hasData]);

  const selectData = useMemo(() => {
    if (isPending) return [];
    if (isError) return [];
    if (!hasData) return [];

    return items.map((item) => ({
      value: JSON.stringify({
        id: item.id,
        arName: item.arName,
        enName: item.enName,
      }),
      label: locale === 'ar' ? item.arName : item.enName,
    }));
  }, [isPending, isError, hasData, items, locale]);

  const onChange = useCallback(
    (value) => {
      setValue(value);
      onSelect({
        target: {
          value: value.map((item) => JSON.parse(item)),
          name,
        },
      });
    },
    [onSelect, name]
  );

  return (
    <MultiSelectInput
      data={selectData}
      searchable
      size='lg'
      classNames={{
        label:
          'text-xs md:text-base mdl:text-base mb-2 ps-0',
        input: 'border-greenMain mdl:rounded-xl',
      }}
      label={label}
      placeholder={placeholder}
      nothingFoundMessage={messages}
      value={value}
      onChange={onChange}
      error={error}
    />
  );
};
