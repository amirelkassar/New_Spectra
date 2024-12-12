'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import MultiSelectInput from '@/components/inputs/multi-select-input';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import { usePublicSpecialization } from '@/hooks/queries/public/specialization';

export const SpecializationMultiSelect = ({
  defaultValue = [],
  name = '',
  onSelect = () => {},
  ...props
}) => {
  const locale = useLocale();

  const [value, setValue] = useState([]);

  const { data, isPending, isError } = usePublicSpecialization({
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
      {...props}
      data={options}
      searchable
      size={props.size || 'lg'}
      classNames={{
        ...props.classNames,
        label: cn(
          'text-xs md:text-base mdl:text-base mb-2 ps-0',
          props.classNames?.label
        ),
        input: cn('mdl:rounded-xl', props.classNames?.input),
      }}
      nothingFoundMessage={messages}
      onChange={onChange}
      value={value}
    />
  );
};
