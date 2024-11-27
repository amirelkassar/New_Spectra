'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Textarea } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';

import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import { SpecializationSelect } from '../../_components/specialization-select';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import HeartCheckedIcon from '@/assets/icons/heart-checked';

export const ServiceFrom = ({
  data,
  error,
  isPending = false,
  btnLabel = 'حفظ',
  onSubmit = () => {},
  onChange = () => {},
}) => {
  if (!data) return null;
  return (
    <form
      onSubmit={onSubmit}
      className='grid grid-cols-2 gap-4 lg:gap-8 px-3 mb-14 max-w-screen-lg mx-auto'
    >
      <InputGreen
        label='اسم الخدمة باللغة العربية'
        name='arName'
        value={data.arName}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArName')}
        className='col-span-2'
      />
      <InputGreen
        label='اسم الخدمة باللغة الانجليزية'
        name='enName'
        value={data.enName}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnName')}
        className='col-span-2'
      />

      <InputGreen
        label='وصف الخدمة'
        name='description'
        value={data.description}
        onChange={onChange}
        error={GetErrorMsg(error, 'Description')}
        className='col-span-2'
      />

      <InputGreen
        label='سعر الخدمة'
        name='price'
        type='number'
        value={data.price}
        onChange={onChange}
        error={GetErrorMsg(error, 'Price')}
      />

      <InputGreen
        label='نسبة الخصم'
        name='discount'
        type='number'
        value={data.discount}
        onChange={onChange}
        error={GetErrorMsg(error, 'Discount')}
      />

      <Textarea
        label='الشروط و الاحكام'
        name='termsAndConditions'
        value={data.termsAndConditions}
        error={GetErrorMsg(error, 'TermsAndConditions')}
        onChange={onChange}
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

      {String(data?.serviceType) === '2' && (
        <RemainingInputs
          data={data}
          error={error}
          onChange={onChange}
        />
      )}

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
          type='button'
          className='w-full font-bold py-4'
        >
          عرض
        </Button>
      </div>
    </form>
  );
};

const RemainingInputs = ({ data, error, onChange }) => {
  return (
    <div className='col-span-2 space-y-4 lg:space-y-8'>
      <SpecializationSelect
        label='اضافة التخصصات المرتبطة بالخدمة'
        name='specifications'
        defaultValue={data?.specifications}
        onSelect={onChange}
        error={GetErrorMsg(error, 'Specifications')}
      />

      <ServiceContent
        data={data.contents}
        onChange={onChange}
        error={GetErrorMsg(error, 'Contents')}
      />
    </div>
  );
};

const ServiceContent = ({ data, error, onChange }) => {
  const [contents, setContents] = useState(
    data?.contents || [{ title: '', description: '' }]
  );

  const handleChange = useCallback((e, index) => {
    const { name, value } = e.target;
    setContents((prevContents) =>
      prevContents.map((content, i) =>
        i === index
          ? { ...content, [name]: value }
          : content
      )
    );
  }, []);

  const handleAddSection = useCallback(() => {
    setContents((prevContents) => [
      ...prevContents,
      { title: '', description: '' },
    ]);
  }, []);

  const debouncedOnChange = useDebouncedCallback(
    (contents) => {
      const filteredContents = contents.filter(
        (c) => c.title && c.description
      );

      onChange({
        target: {
          name: 'contents',
          value: filteredContents,
        },
      });
    },
    1500
  );

  useEffect(() => {
    if (!onChange) return;
    debouncedOnChange(contents);
  }, [contents, onChange, debouncedOnChange]);

  const contentItem = useMemo(() => {
    return contents.map((content, index) => (
      <div className='flex gap-2 ps-5' key={index}>
        <HeartCheckedIcon className='shrink-0 text-greenMain' />
        <div className='space-y-3 lg:space-y-5 flex-1'>
          <InputGreen
            placeholder='اكتب العنوان هنا ..'
            name='title'
            value={content.title}
            onChange={(e) => handleChange(e, index)}
          />

          <Textarea
            placeholder='اكتب المحتوي هنا ..'
            name='description'
            value={contents.description}
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
    ));
  }, [contents, handleChange]);

  return (
    <div className='space-y-5'>
      <h3 className='text-sm md:text-xl font-bold'>
        محتوي الخدمة
      </h3>

      <div className='space-y-4 lg:space-y-8'>
        {contentItem}
      </div>

      {error && (
        <p className='text-red text-xs md:text-base ps-12 !m-0'>
          {error}
        </p>
      )}

      <button
        type='button'
        onClick={handleAddSection}
        className='w-full bg-blueLighter rounded-xl border border-greenMain p-5 text-center text-sm md:text-xl font-bold transition-shadow hover:shadow-md flex flex-col gap-3 items-center'
      >
        <PlusInsideCircleIcon className='text-greenMain shrink-0 size-7 md:size-11' />
        اضافة قسم
      </button>
    </div>
  );
};
