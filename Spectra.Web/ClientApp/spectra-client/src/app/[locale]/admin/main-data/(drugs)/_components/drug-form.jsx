'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import { PhotoDropzone } from '@/components/photo-dropzone';
import CloseIcon from '@/assets/icons/close';
import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';

export const DrugForm = ({
  data,
  onChange = () => {},
  onSubmit = () => {},
  error,
  isPending = false,
  btnLabel = 'حفظ',
}) => {
  if (!data) return null;
  return (
    <form
      className='flex flex-col gap-4 lg:gap-8 px-3'
      onSubmit={onSubmit}
    >
      <DrugImageUploader
        image={data.photo}
        onChange={onChange}
      />
      <InputGreen
        label='اسم العقار'
        name='name'
        placeholder='اسم العقار او نوع التوصية'
        value={data.name}
        onChange={onChange}
        error={GetErrorMsg(error, 'Name')}
      />
      <InputGreen
        label='الكود'
        name='code'
        value={data.code}
        onChange={onChange}
      />
      <InputGreen
        label='المادة الفعالة'
        name='activeIngredient'
        value={data.activeIngredient}
        onChange={onChange}
        error={GetErrorMsg(error, 'ActiveIngredient')}
      />
      <InputGreen
        label='الاسم العلمي'
        name='scientificName'
        value={data.scientificName}
        onChange={onChange}
        error={GetErrorMsg(error, 'ScientificName')}
      />
      <InputGreen
        label='النوع'
        name='type'
        value={data.type}
        onChange={onChange}
        error={GetErrorMsg(error, 'Type')}
      />
      <InputGreen
        label='الجرعة الموصى به'
        name='recommendedDosage'
        value={data.recommendedDosage}
        onChange={onChange}
        error={GetErrorMsg(error, 'RecommendedDosage')}
      />
      <InputGreen
        label='تركيز الدواء'
        name='doncentration'
        value={data.doncentration}
        onChange={onChange}
        error={GetErrorMsg(error, 'Doncentration')}
      />
      <InputGreen
        label='تفاعلات الدواء مع أدوية أخرى'
        name='interactionsWithOtherdrugs'
        value={data.interactionsWithOtherdrugs}
        onChange={onChange}
        error={GetErrorMsg(
          error,
          'InteractionsWithOtherdrugs'
        )}
      />
      <InputGreen
        label='موانع الاستخدام'
        name='contraindications'
        value={data.contraindications}
        onChange={onChange}
        error={GetErrorMsg(error, 'Contraindications')}
      />
      <InputGreen
        label='ملاحظات'
        name='nots'
        value={data.nots}
        onChange={onChange}
        error={GetErrorMsg(error, 'Nots')}
      />

      <div className='flex items-center gap-4 md:gap-10 flex-col md:flex-row mt-14'>
        <Button
          disabled={isPending}
          type='submit'
          variant='secondary'
          className='max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]'
        >
          {btnLabel}
        </Button>
      </div>
    </form>
  );
};

const DrugImageUploader = ({
  onChange = () => {},
  image = undefined,
}) => {
  const src = useMemo(() => {
    if (!image) return '';

    if (image instanceof File) {
      return URL.createObjectURL(image);
    }

    return image;
  }, [image]);

  return (
    <div className='flex-1 w-full h-auto relative'>
      <span className='text-[12px] block md:text-base mb-2 font-bold'>
        صورة العقار
      </span>

      {image ? (
        <div className='relative flex items-center justify-center w-24 mdl:w-36 h-16 mdl:h-24'>
          <Image
            src={src}
            width={144}
            height={96}
            alt='drug-photo'
            className='h-auto w-full object-contain object-center max-w-full max-h-full'
          />

          <div
            onClick={() => {
              const e = {
                target: {
                  value: undefined,
                  name: 'photo',
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
            const e = {
              target: {
                value: file[0],
                name: 'photo',
              },
            };
            onChange(e);
          }}
        />
      )}
    </div>
  );
};
