'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import Package1Icon from '@/assets/icons/package1';
import Package2Icon from '@/assets/icons/package2';
import Package3Icon from '@/assets/icons/package3';
import Package4Icon from '@/assets/icons/package4';
import CloseIcon from '@/assets/icons/close';

import Card from '@/components/card';
import TextInput from '@/components/inputs/text-input';

import GetErrorMsg from '@/components/getErrorMsg';
import { BackButton } from '@/components/buttons/back-button';
import { SectionTitle } from '@/app/[locale]/(dashboard)/admin/_components/ui';
import { ContentSelect } from './content-select';
import { PackageGoals } from '../add/_components/package-goals';
import { PhotoDropzone } from '@/components/photo-dropzone';
import Button from '@/components/button';
import { useImagePath } from '@/hooks/use-image-path';

export const PackageForm = ({
  form,
  btnLabel = 'حفظ',
  title = 'إضافة باقة جديدة',
  onCancel = () => {},
}) => {
  return (
    <form onSubmit={form.onSubmit} className='space-y-5 h-full'>
      <PackageInfo
        data={form.data}
        onChange={form.onChange}
        error={form.error}
        title={title}
      />

      <ContentSelect
        defaultValue={form.data.services}
        onChange={form.onChange}
        error={GetErrorMsg(form.error, 'Services')}
        name='services'
        label='محتوي الباقة'
      />

      <PackageGoals
        defaultValue={form.data.goals}
        error={GetErrorMsg(form.error, 'Goals')}
        onChange={form.onChange}
        name='goals'
        label='الهدف من الباقة'
      />

      <Card>
        <PackageImageUploader
          onChange={form.onChange}
          image={form.data.image}
          label='صورة دعائية'
          name='image'
          error={GetErrorMsg(form.error, 'Image')}
        />

        <div className='flex flex-col mt-10 items-center gap-3 max-w-[80%] mx-auto'>
          <Button
            disabled={form.isPending}
            type='submit'
            variant='secondary'
            className='w-full font-bold py-4'
          >
            {btnLabel}
          </Button>
          <Button
            disabled={form.isPending}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCancel();
            }}
            type='button'
            className='w-full font-bold py-4'
          >
            الغاء
          </Button>
        </div>
      </Card>
    </form>
  );
};

const PackageInfo = ({ data, onChange, error, title }) => {
  return (
    <Card className='space-y-7'>
      <div className='flex items-center gap-4 mdl:gap-6'>
        <BackButton />
        <SectionTitle>{title}</SectionTitle>
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
        <div className='text-base mdl:text-xl mb-2 ps-1'>{label}</div>
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
        <p className='text-red text-xs mdl:text-base'>{error}</p>
      )}
    </div>
  );
};

const PackageImageUploader = ({
  onChange = () => {},
  image = undefined,
  label = '',
  name = '',
  error,
}) => {
  const path = useImagePath(image);

  const src = useMemo(() => {
    if (!image) return '';

    if (image instanceof File) {
      return URL.createObjectURL(image);
    }

    return path;
  }, [image, path]);

  return (
    <div className='flex-1 w-full h-auto relative'>
      {label && (
        <div className='text-base mdl:text-xl mb-5 ps-1'>{label}</div>
      )}

      {image ? (
        <div className='relative flex items-center justify-center w-full h-32 mdl:h-52'>
          <Image
            src={src}
            width={144}
            height={96}
            alt='package-photo'
            className='h-auto w-full object-contain object-center max-w-full max-h-full'
          />

          <div
            onClick={() => {
              const e = {
                target: {
                  value: undefined,
                  name,
                },
              };
              onChange(e);
            }}
            role='button'
            className='absolute duration-200 hover:shadow-md top-1 start-1 bg-white rounded-full size-5 overflow-hidden'
          >
            <CloseIcon className='size-5' />
          </div>
        </div>
      ) : (
        <PhotoDropzone
          onDrop={(file) => {
            onChange({
              target: {
                value: file[0],
                name,
              },
            });
          }}
          classNames={{
            container: 'h-32 mdl:h-52',
          }}
        />
      )}

      {error && (
        <p className='text-red text-xs mdl:text-base'>{error}</p>
      )}
    </div>
  );
};
