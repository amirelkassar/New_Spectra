'use client';

import Button from '@/components/button';
import { Textarea } from '@mantine/core';
import InputGreen from '@/components/Input-green';

import GetErrorMsg from '@/components/getErrorMsg';

export const SpecialityForm = ({
  data = {},
  error,
  isPending = false,
  btnLabel = 'حفظ',
  onSubmit = () => {},
  onChange = () => {},
}) => {
  return (
    <form
      className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'
      onSubmit={onSubmit}
    >
      <InputGreen
        label={'اسم التخصص باللغة العربية'}
        name='arName'
        value={data.arName}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArName')}
      />

      <InputGreen
        label={'اسم التخصص باللغة الانجليزية'}
        name='enName'
        value={data.enName}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnName')}
      />

      <Textarea
        classNames={{
          input:
            'min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px]  border-greenMain rounded-2xl',
          label: 'text-[12px]  md:text-[16px]',
        }}
        label={'وصف التخصص باللغة العربية'}
        name='arDescription'
        value={data.arDescription}
        onChange={onChange}
        error={GetErrorMsg(error, 'ArDescription')}
      />

      <Textarea
        classNames={{
          input:
            'min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px]  border-greenMain rounded-2xl',
          label: 'text-[12px]  md:text-[16px]',
        }}
        label={'وصف التخصص باللغة الانجليزية'}
        name='enDescription'
        value={data.enDescription}
        onChange={onChange}
        error={GetErrorMsg(error, 'EnDescription')}
      />

      <InputGreen
        label={'تكلفة الاستشارة'}
        type='number'
        name='consultationCost'
        value={data.consultationCost}
        onChange={onChange}
        error={GetErrorMsg(error, 'ConsultationCost')}
      />

      <InputGreen
        label={'الكود'}
        name='code'
        value={data.code}
        onChange={onChange}
        error={GetErrorMsg(error, 'Code')}
      />

      <div className='flex mt-10 items-center gap-4 md:gap-10 flex-col md:flex-row'>
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
