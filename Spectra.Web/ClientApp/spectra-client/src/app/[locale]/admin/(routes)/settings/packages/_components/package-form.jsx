'use client';

import Package1Icon from '@/assets/icons/package1';
import Package2Icon from '@/assets/icons/package2';
import Package3Icon from '@/assets/icons/package3';
import Package4Icon from '@/assets/icons/package4';

import Card from '@/components/card';
import TextInput from '@/components/inputs/text-input';

import { BackButton } from '@/components/buttons/back-button';
import { SectionTitle } from '@/admin/_components/ui';
import GetErrorMsg from '@/components/getErrorMsg';
import { ContentSelect } from './content-select';

export const PackageForm = ({ form }) => {
  return (
    <form className='space-y-5 h-full'>
      <PackageInfo
        data={form.data}
        onChange={form.onChange}
        error={form.error}
      />

      <ContentSelect
        defaultValue={form.data.services}
        onSelect={form.onChange}
        error={form.error}
        name='services'
        label='محتوي الباقة'
      />
    </form>
  );
};

const PackageInfo = ({ data, onChange, error }) => {
  return (
    <Card className='space-y-7'>
      <div className='flex items-center gap-4 mdl:gap-6'>
        <BackButton />
        <SectionTitle>اضافة باقة</SectionTitle>
      </div>

      <div className='grid grid-cols-1 mdl:grid-cols-2 gap-5'>
        <TextInput
          size='xl'
          label='اسم الباقة بااللغة العربية'
          name='arName'
          value={data.arName}
          onChange={onChange}
          error={GetErrorMsg(error, 'ArName')}
        />
        <TextInput
          size='xl'
          label='اسم الباقة باللغة الانجليزية'
          name='enName'
          value={data.enName}
          onChange={onChange}
          error={GetErrorMsg(error, 'EnName')}
        />
        <TextInput
          size='xl'
          label='سعر الباقة'
          name='price'
          rightSection='SAR'
          type='number'
          value={data.price}
          onChange={onChange}
          error={GetErrorMsg(error, 'Price')}
        />
        <TextInput
          size='xl'
          label='نسبة الخصم'
          name='discount'
          rightSection='%'
          type='number'
          value={data.discount}
          onChange={onChange}
          error={GetErrorMsg(error, 'Discount')}
        />
      </div>

      <IconSelect
        label='يمكنك اختيار رمز الباقة'
        name='iconCode'
        value={data.iconCode}
        onChange={onChange}
        error={GetErrorMsg(error, 'IconCode')}
      />
    </Card>
  );
};

const ICONS = [
  {
    id: 1,
    icon: (
      <Package1Icon className='max-h-full w-auto text-greenMain' />
    ),
  },
  {
    id: 2,
    icon: (
      <Package2Icon className='max-h-full w-auto text-greenMain' />
    ),
  },
  {
    id: 3,
    icon: (
      <Package3Icon className='max-h-full w-auto text-greenMain' />
    ),
  },
  {
    id: 4,
    icon: (
      <Package4Icon className='max-h-full w-auto text-greenMain' />
    ),
  },
];

const IconSelect = ({
  label = '',
  name = '',
  error,
  value,
  onChange = () => {},
}) => {
  return (
    <div>
      {label && (
        <div className='text-base mdl:text-xl mb-2 ps-1'>
          {label}
        </div>
      )}
      <div className='flex gap-5 flex-wrap'>
        {ICONS.map((item) => (
          <div
            key={item?.id}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onChange({
                target: {
                  name,
                  value: item?.id,
                },
              });
            }}
            aria-pressed={item?.id === value}
            role='button'
            className='size-12 mdl:size-16 bg-greenLight rounded-xl border-2 border-transparent flex items-center justify-center p-2 transition hover:border-greenMain aria-pressed:border-greenMain'
          >
            {item.icon}
          </div>
        ))}
      </div>
      {error && (
        <p className='text-red text-xs mdl:text-base'>
          {error}
        </p>
      )}
    </div>
  );
};
