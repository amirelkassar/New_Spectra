'use client';

import { Textarea } from '@mantine/core';

import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';

export const DiagnosticForm = ({
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
        label='كود 1'
        name='code1'
        value={data.code1}
        onChange={onChange}
        error={GetErrorMsg(error, 'Code1')}
      />
      <InputGreen
        label='كود 2'
        name='code2'
        value={data.code2}
        onChange={onChange}
        error={GetErrorMsg(error, 'Code2')}
      />
      <InputGreen
        label='كود 3'
        name='code3'
        value={data.code3}
        onChange={onChange}
        error={GetErrorMsg(error, 'Code3')}
      />
      <InputGreen
        label='اسم التشخيص'
        name='name'
        value={data.name}
        onChange={onChange}
        error={GetErrorMsg(error, 'Name')}
      />
      <Textarea
        label='وصف التشخيص'
        name='description'
        value={data.description}
        onChange={onChange}
        error={GetErrorMsg(error, 'Description')}
        classNames={{
          input:
            'min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] border-greenMain rounded-2xl',
          label: 'text-[12px] md:text-[16px]',
        }}
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
