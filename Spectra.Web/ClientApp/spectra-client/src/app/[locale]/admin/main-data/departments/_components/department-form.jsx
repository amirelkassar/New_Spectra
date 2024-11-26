'use client';

import { useCallback, useMemo, useState } from 'react';

import DeleteIcon from '@/assets/icons/delete';
import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import MultiSelectInput from '@/components/inputs/multi-select-input';
import { DoctorBadge } from '@/components/team';
import { useSpecialization } from '@/hooks/queries/admin/main-data/specialties';

export const DepartmentForm = ({
  data,
  error,
  isPending,
  onChange = () => {},
  onSubmit = () => {},
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'
    >
      <InputGreen
        label='اسم القسم'
        name='name'
        value={data?.name}
        onChange={onChange}
        error={GetErrorMsg(error, 'Name')}
      />

      <SpecializationSelect
        error={GetErrorMsg(error, 'Diagnoses')}
        defaultValue={data?.specsifications}
        onSelect={onChange}
      />

      <DepartmentHead />

      <Button
        disabled={isPending}
        type='submit'
        variant='secondary'
        className='max-w-xs w-full font-bold py-4 mx-auto md:mx-0 mt-10'
      >
        حفظ
      </Button>
    </form>
  );
};

const SpecializationSelect = ({
  error,
  onSelect = () => {},
  defaultValue = [],
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

  const { data, isPending, isError } =
    useSpecialization('*');

  const items = data?.data?.items;
  const hasData = !!items?.length;

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
        name: item.name,
      }),
      label: item.name,
    }));
  }, [isPending, isError, hasData, items]);

  const onChange = useCallback(
    (value) => {
      setValue(value);
      onSelect({
        target: {
          value: value.map((item) => JSON.parse(item)),
          name: 'specsifications',
        },
      });
    },
    [onSelect]
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
      label='التخصصات'
      placeholder='اختر التخصصات'
      nothingFoundMessage={messages}
      value={value}
      onChange={onChange}
      error={error}
    />
  );
};

const DepartmentHead = () => {
  return (
    <div className='flex items-start gap-2'>
      <DoctorBadge
        name='احمد محمد كمال'
        profession='طبيب نفسي'
        rate='9.5'
      />

      <button
        onClick={() => {}}
        className='border-red duration-200 hover:shadow-md border rounded-md w-9 md:w-12 h-9 md:h-12 flex items-center justify-center'
      >
        <DeleteIcon className='w-4 md:w-5 h-auto' />
      </button>
    </div>
  );
};
