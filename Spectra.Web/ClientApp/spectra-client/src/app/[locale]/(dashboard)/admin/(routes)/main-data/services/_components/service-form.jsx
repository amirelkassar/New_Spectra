'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Checkbox, Textarea } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import HeartCheckedIcon from '@/assets/icons/heart-checked';
import Image from 'next/image';
import CloseIcon from '@/assets/icons/close';
import { PhotoDropzone } from '@/components/photo-dropzone';
import { ReportSelect } from '../../_components/reports-select';
import { useImagePath } from '@/hooks/use-image-path';
import { SpecializationMultiSelect } from '@/app/[locale]/(dashboard)/admin/_components/ui/specialization-multi-select';
import DeleteIcon from '@/assets/icons/delete';

export const ServiceFrom = ({
  data,
  error,
  isPending = false,
  btnLabel = 'حفظ',
  onSubmit = () => {},
  onChange = () => {},
  onCancel = () => {},
}) => {
  if (!data) return null;
  return (
    <form
      onSubmit={onSubmit}
      className='px-3 mb-14 max-w-screen-lg mx-auto'
    >
      <RenderForm data={data} error={error} onChange={onChange} />

      <div className='flex flex-col mt-10 items-center gap-3 col-span-2'>
        <Button
          disabled={isPending}
          type='submit'
          variant='secondary'
          className='w-full font-bold py-4'
        >
          {btnLabel}
        </Button>
        <Button
          disabled={isPending}
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
    </form>
  );
};

const RenderForm = ({ data, error, onChange }) => {
  switch (String(data?.serviceType)) {
    case '1':
      return (
        <InternalServices
          data={data}
          error={error}
          onChange={onChange}
        />
      );
    case '2':
      return (
        <ExternalServices
          data={data}
          error={error}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
};

const InternalServices = ({ data, error, onChange }) => {
  return (
    <div className='space-y-4 mdl:space-y-6'>
      <InputGreen
        label='اسم الخدمة باللغة العربية'
        name='arName'
        value={data?.arName || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArName')}
      />
      <InputGreen
        label='اسم الخدمة باللغة الانجليزية'
        name='enName'
        value={data?.enName || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnName')}
      />

      <InputGreen
        label='وصف الخدمة باللغة العربية'
        name='arDescription'
        value={data?.arDescription || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArDescription')}
      />

      <InputGreen
        label='وصف الخدمة باللغة الانجليزية'
        name='enDescription'
        value={data?.enDescription || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnDescription')}
      />

      <Textarea
        label='الشروط و الاحكام باللغة العربية'
        name='arTermsAndConditions'
        value={data?.arTermsAndConditions || ''}
        error={GetErrorMsg(error, 'ArTermsAndConditions')}
        onChange={onChange}
        size='lg'
        autosize
        minRows={4}
        classNames={{
          input: 'min-h-[160px] w-full rounded-xl border-greenMain',
          label: 'text-base mb-2',
        }}
      />

      <Textarea
        label='الشروط و الاحكام باللغة الانجليزية'
        name='enTermsAndConditions'
        value={data?.enTermsAndConditions || ''}
        error={GetErrorMsg(error, 'EnTermsAndConditions')}
        onChange={onChange}
        size='lg'
        autosize
        minRows={4}
        classNames={{
          input: 'min-h-[160px] w-full rounded-xl border-greenMain',
          label: 'text-base mb-2',
        }}
      />

      <ReportSelect
        label='اضافة التقارير الخاصة بالخدمة'
        name='reports'
        defaultValue={data?.reports || []}
        onSelect={onChange}
        error={GetErrorMsg(error, 'Reports')}
      />

      <SpecializationMultiSelect
        label='اضافة التخصصات المرتبطة بالخدمة'
        name='specifications'
        defaultValue={data?.specifications || []}
        onSelect={onChange}
        error={GetErrorMsg(error, 'Specifications')}
      />

      <InputGreen
        label='سعر الخدمة'
        name='price'
        type='number'
        value={data?.price || ''}
        onChange={onChange}
        rightSection={'SAR'}
        error={GetErrorMsg(error, 'Price')}
      />

      <InputGreen
        label='نسبة الخصم'
        name='discount'
        type='number'
        value={data?.discount || ''}
        onChange={onChange}
        rightSection={'%'}
        error={GetErrorMsg(error, 'Discount')}
      />

      <Checkbox
        checked={data?.enableForSpectraTeam || false}
        name='enableForSpectraTeam'
        onChange={(e) => {
          onChange({
            target: {
              name: 'enableForSpectraTeam',
              value: e.target.checked,
            },
          });
        }}
        error={GetErrorMsg(error, 'EnableForSpectraTeam')}
        label='إتاحة الخدمة لفريق أطباء سبيكترا'
        color='#10B0C1'
        radius='xs'
        size='md'
      />

      <Checkbox
        checked={data?.enableForFreeLancer || false}
        name='enableForFreeLancer'
        onChange={(e) => {
          onChange({
            target: {
              name: 'enableForFreeLancer',
              value: e.target.checked,
            },
          });
        }}
        error={GetErrorMsg(error, 'EnableForFreeLancer')}
        label='إتاحة الخدمة للأطباء المستقلين'
        color='#10B0C1'
        radius='xs'
        size='md'
      />
    </div>
  );
};

const ExternalServices = ({ data, error, onChange }) => {
  return (
    <div className='grid grid-cols-2 gap-4 lg:gap-8 '>
      <InputGreen
        label='اسم الخدمة باللغة العربية'
        name='arName'
        value={data?.arName || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArName')}
        className='col-span-2'
      />
      <InputGreen
        label='اسم الخدمة باللغة الانجليزية'
        name='enName'
        value={data?.enName || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnName')}
        className='col-span-2'
      />

      <InputGreen
        label='وصف الخدمة باللغة العربية'
        name='arDescription'
        value={data?.arDescription || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArDescription')}
        className='col-span-2'
      />

      <InputGreen
        label='وصف الخدمة باللغة الانجليزية'
        name='enDescription'
        value={data?.enDescription || ''}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnDescription')}
        className='col-span-2'
      />

      <div className='col-span-2 space-y-4 mdl:space-y-6'>
        <ServiceContent
          data={data?.contents || []}
          onChange={onChange}
          error={GetErrorMsg(error, 'Contents')}
        />

        <ServicePhoto
          data={data?.heroImage}
          onChange={onChange}
          error={GetErrorMsg(error, 'HeroImage')}
        />
      </div>
    </div>
  );
};

const ServiceContent = ({ data, error, onChange }) => {
  const [contents, setContents] = useState(() =>
    !!data?.length
      ? data
      : [
          {
            arTitle: '',
            enTitle: '',
            arDescription: '',
            enDescription: '',
          },
        ]
  );

  const handleChange = useCallback((e, index) => {
    const { name, value } = e.target;
    setContents((prevContents) =>
      prevContents.map((content, i) =>
        i === index ? { ...content, [name]: value } : content
      )
    );
  }, []);

  const handleRemove = useCallback((index) => {
    setContents((prevContents) =>
      prevContents.filter((_, i) => i !== index)
    );
  }, []);

  const handleAddSection = useCallback(() => {
    setContents((prevContents) => [
      ...prevContents,
      {
        arTitle: '',
        enTitle: '',
        arDescription: '',
        enDescription: '',
      },
    ]);
  }, []);

  const debouncedOnChange = useDebouncedCallback((contents) => {
    const filteredContents = contents.filter(
      (c) =>
        c.arTitle && c.arDescription && c.enTitle && c.enDescription
    );

    onChange({
      target: {
        name: 'contents',
        value: filteredContents,
      },
    });
  }, 1500);

  useEffect(() => {
    if (!onChange) return;
    debouncedOnChange(contents);
  }, [contents, onChange, debouncedOnChange]);

  const contentItem = useMemo(() => {
    return contents.map((content, index) => (
      <div
        className='pb-7 space-y-5 border-b-2 border-grayLight'
        key={index}
      >
        <div className='flex gap-2 ps-5'>
          <HeartCheckedIcon className='shrink-0 text-greenMain' />
          <div className='space-y-3 lg:space-y-5 flex-1'>
            <InputGreen
              placeholder='اكتب العنوان هنا ..'
              name='arTitle'
              value={content?.arTitle || ''}
              onChange={(e) => handleChange(e, index)}
            />
            <Textarea
              placeholder='اكتب المحتوي هنا ..'
              name='arDescription'
              value={content?.arDescription || ''}
              onChange={(e) => handleChange(e, index)}
              size='lg'
              autosize
              minRows={4}
              classNames={{
                input:
                  'min-h-[160px] w-full rounded-xl border-greenMain',
                label: 'text-base mb-2',
                root: 'col-span-2',
              }}
            />
          </div>
        </div>
        <div dir='ltr' className='flex gap-2 ps-5'>
          <HeartCheckedIcon className='shrink-0 text-greenMain' />
          <div className='space-y-3 lg:space-y-5 flex-1'>
            <InputGreen
              placeholder='Write the title here ..'
              name='enTitle'
              value={content?.enTitle || ''}
              onChange={(e) => handleChange(e, index)}
              classNames={{
                input: 'text-left',
              }}
            />
            <Textarea
              placeholder='Write the content here ..'
              name='enDescription'
              value={content?.enDescription || ''}
              onChange={(e) => handleChange(e, index)}
              size='lg'
              autosize
              minRows={4}
              classNames={{
                input:
                  'min-h-[160px] w-full rounded-xl border-greenMain text-left',
                label: 'text-base mb-2',
                root: 'col-span-2',
              }}
            />
          </div>
        </div>

        <div
          onClick={() => handleRemove(index)}
          role='button'
          className='border border-red text-red rounded-md max-w-60 px-5 py-2 flex items-center justify-center gap-2 text-sm mdl:text-xl font-bold mx-auto'
        >
          <DeleteIcon className='size-4' />
          مسح القسم
        </div>
      </div>
    ));
  }, [contents, handleChange, handleRemove]);

  return (
    <div className='space-y-5'>
      <h3 className='text-sm md:text-xl font-bold'>
        محتوي الخدمة باللغة العربية والانجليزية
      </h3>

      <div className='space-y-4 lg:space-y-8'>{contentItem}</div>

      {error && (
        <p className='text-red text-xs md:text-base ps-12 !m-0'>
          {error}
        </p>
      )}

      <button
        type='button'
        onClick={handleAddSection}
        className='w-full bg-blueLighter rounded-xl border border-greenMain px-5 py-8 text-center text-sm md:text-xl font-bold transition-shadow hover:shadow-md flex flex-col gap-3 items-center'
      >
        <PlusInsideCircleIcon className='text-greenMain shrink-0 size-7 md:size-11' />
        اضافة قسم
      </button>
    </div>
  );
};

const ServicePhoto = ({ data, error, onChange }) => {
  const imagePath = useImagePath(data);

  const src = useMemo(() => {
    if (!data) return '';

    if (data instanceof File) {
      return URL.createObjectURL(data);
    }

    return imagePath;
  }, [data, imagePath]);

  return (
    <div className='flex-1 w-full h-auto relative space-y-5'>
      <h3 className='text-sm md:text-xl font-bold'>صورة الخدمة</h3>

      {data ? (
        <div className='relative flex items-center justify-center w-auto h-[484px]'>
          <Image
            src={src}
            width={144}
            height={96}
            alt='service-photo'
            className='h-full w-auto object-contain object-center max-w-full max-h-full'
          />

          <div
            onClick={() => {
              const e = {
                target: {
                  value: undefined,
                  name: 'heroImage',
                },
              };
              onChange(e);
            }}
            role='button'
            title='حذف الصورة'
            className='absolute duration-200 hover:shadow-md top-1 start-1 bg-white rounded-full size-5 overflow-hidden'
          >
            <CloseIcon className='size-5' />
          </div>
        </div>
      ) : (
        <PhotoDropzone
          classNames={{
            root: 'mx-auto max-w-sm',
            container: 'min-h-[450px] gap-3',
            icon: 'size-10 md:size-14 mdl:size-14',
          }}
          onDrop={(file) => {
            onChange({
              target: {
                value: file[0],
                name: 'heroImage',
              },
            });
          }}
        />
      )}

      {error && (
        <p className='text-red text-xs md:text-base !m-0'>{error}</p>
      )}
    </div>
  );
};
