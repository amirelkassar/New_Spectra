'use client';

import AnalysisIcon from '@/assets/icons/analysis';
import RumorsIcon from '@/assets/icons/rumors';
import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import { useCallback } from 'react';

export const AnalysisForm = ({
  data,
  isPending = false,
  error,
  onSubmit = () => {},
  onChange = () => {},
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'
    >
      <TypeSelect
        label='اختر النوع'
        value={data?.examinationTypes}
        onChange={onChange}
        error={GetErrorMsg(error, 'ExaminationTypes')}
      />

      <InputGreen
        label='الاسم العلمي'
        name='name'
        error={GetErrorMsg(error, 'Name')}
        value={data?.name}
        onChange={onChange}
      />

      <InputGreen
        label='الكود'
        name='code'
        error={GetErrorMsg(error, 'Code')}
        value={data?.code}
        onChange={onChange}
      />

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

const TypeSelect = ({
  label = '',
  value = '',
  error = '',
  onChange = () => {},
}) => {
  const onClick = useCallback(
    (e, value) => {
      e.preventDefault();
      e.stopPropagation();

      onChange({
        target: {
          name: 'examinationTypes',
          value,
        },
      });
    },
    [onChange]
  );

  return (
    <div>
      {label && (
        <h2 className='text-xs md:text-base mb-2'>
          {label}
        </h2>
      )}
      <div className='flex items-center justify-center gap-8 *:flex-1 max-w-4xl'>
        <TypeButton
          onClick={(e) => onClick(e, '1')}
          aria-pressed={String(value) === '1'}
          label='تحليل'
          icon={
            <AnalysisIcon className='text-greenMain size-6 md:size-9' />
          }
        />

        <TypeButton
          onClick={(e) => onClick(e, '2')}
          aria-pressed={String(value) === '2'}
          label='اشعة'
          icon={
            <RumorsIcon className='text-greenMain size-6 md:size-9' />
          }
        />
      </div>
      {error && <p className='text-red'>{error}</p>}
    </div>
  );
};

const TypeButton = ({ label = '', icon, ...props }) => {
  if (!label && !icon) return null;
  return (
    <div
      role='button'
      className='duration-200 hover:shadow-md rounded-xl flex flex-col md:flex-row items-center gap-3 md:gap-5 p-5 md:p-7 aria-pressed:bg-greenMain aria-pressed:text-white aria-pressed:shadow-md'
      {...props}
    >
      <div className='flex items-center justify-center size-11 md:size-20 rounded-xl bg-white'>
        {icon}
      </div>
      <h3 className='text-xs md:text-xl font-bold'>
        {label}
      </h3>
    </div>
  );
};
