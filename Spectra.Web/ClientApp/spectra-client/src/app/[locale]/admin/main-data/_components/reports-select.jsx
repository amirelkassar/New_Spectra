'use client';

import { useCallback, useMemo, useState } from 'react';

import MultiSelectInput from '@/components/inputs/multi-select-input';

export const ReportSelect = ({
  error,
  onSelect = () => {},
  defaultValue = [],
  name = '',
  label = '',
  placeholder = '',
}) => {
  const [value, setValue] = useState(() => {
    if (!defaultValue.length) return [];
    return defaultValue.map((item) =>
      JSON.stringify({
        id: item.id,
        name: item.name,
      })
    );
  });

  // const { data, isPending, isError } =
  //   useReports('*');

  // const items = data?.data?.items;
  // const hasData = !!items?.length;

  const messages = useMemo(() => {
    // if (isPending) return 'Loading ...';
    // if (isError) return 'Error loading data';
    // if (!hasData) return 'No data found';

    return 'To be added soon';
  }, []);

  const selectData = useMemo(() => {
    return [];
    // if (isPending) return [];
    // if (isError) return [];
    // if (!hasData) return [];

    // return items.map((item) => ({
    //   value: JSON.stringify({
    //     id: item.id,
    //     name: item.name,
    //   }),
    //   label: item.name,
    // }));
  }, []);

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
