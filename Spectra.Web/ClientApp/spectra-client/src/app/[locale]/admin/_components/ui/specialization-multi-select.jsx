'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import MultiSelectInput from '@/components/inputs/multi-select-input';
import { useSpecialization } from '@/hooks/queries/admin/main-data/specialties';
import { useLocale } from 'next-intl';

export const SpecializationMultiSelect = ({
  error,
  defaultValue = [],
  name = '',
  label = '',
  placeholder = '',
  onSelect = () => {},
}) => {
  const locale = useLocale();

  const [value, setValue] = useState([]);

  const { data, isPending, isError } = useSpecialization({
    pageNum: 'all',
  });

  const items = data?.data?.items;
  const hasData = data?.data?.totalCount;

  // HANDLE ERROR, No DATA AND LOADING MEESAGES
  const messages = useMemo(() => {
    if (isPending) return 'Loading ...';
    if (isError) return 'Error loading data';
    if (!hasData) return 'No data found';
  }, [isPending, isError, hasData]);

  // HANDLE GET SELECT OPTIONS
  const options = useMemo(() => {
    if (isPending) return [];
    if (isError) return [];
    if (!hasData) return [];

    return items.map((item) => ({
      value: item.id,
      label: locale === 'ar' ? item.arName : item.enName,
    }));
  }, [isPending, isError, hasData, items, locale]);

  // HANDLE SET ON SELECT IF VALUE CHANGES
  const onChange = useCallback(
    (value) => {
      setValue(value);
      onSelect({
        target: {
          name,
          value,
        },
      });
    },
    [onSelect, name]
  );

  // HANDLE SET DEFAULT SELECTED OPTIONS
  useEffect(() => {
    if (isPending) return;
    if (!defaultValue || !defaultValue?.length) return;

    const defaultValueIds = defaultValue.map(
      (item) => item?.id || item
    );
    setValue(defaultValueIds);
  }, [defaultValue, isPending]);

  return (
    <MultiSelectInput
      data={options}
      searchable
      size='lg'
      classNames={{
        label:
          'text-xs md:text-base mdl:text-base mb-2 ps-0',
        input: 'mdl:rounded-xl',
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
