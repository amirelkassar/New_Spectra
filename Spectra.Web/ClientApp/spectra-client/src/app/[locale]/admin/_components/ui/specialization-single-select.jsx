'use client';

import { useMemo } from 'react';
import { useLocale } from 'next-intl';

import SelectInput from '@/components/inputs/select-input';
import { useSpecialization } from '@/hooks/queries/admin/main-data/specialties';

export const SpecializationSingleSelect = ({
  ...props
}) => {
  const locale = useLocale();

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
      value: String(item.id),
      label: locale === 'ar' ? item.arName : item.enName,
    }));
  }, [isPending, isError, hasData, items, locale]);

  return (
    <SelectInput
      {...props}
      data={props.data || options}
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
      nothingFoundMessage={messages}
    />
  );
};
