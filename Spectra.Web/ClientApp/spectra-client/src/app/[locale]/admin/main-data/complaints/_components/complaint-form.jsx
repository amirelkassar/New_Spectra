'use client';

import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import { Textarea } from '@mantine/core';

export const ComplaintForm = ({
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
      className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'
    >
      <InputGreen
        label='اسم الشكوى'
        name='complaintName'
        value={data.complaintName}
        onChange={onChange}
        error={GetErrorMsg(error, 'ComplaintName')}
      />
      <InputGreen
        label='الكود'
        name='code1'
        value={data.code1}
        onChange={onChange}
        error={GetErrorMsg(error, 'Code1')}
      />
      <Textarea
        classNames={{
          input:
            'min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] border-greenMain rounded-2xl',
          label: 'text-[12px] md:text-[16px] mb-2',
        }}
        error={GetErrorMsg(
          error,
          'DescriptionOfTheComplaint'
        )}
        label='وصف الشكوى'
        name='descriptionOfTheComplaint'
        value={data.descriptionOfTheComplaint}
        onChange={onChange}
      />

      <Button
        disabled={isPending}
        type='submit'
        variant='secondary'
        className='max-w-xs w-full font-bold py-4 mx-auto md:mx-0 mt-10'
      >
        {btnLabel}
      </Button>
    </form>
  );
};
