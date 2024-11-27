'use client';

import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';

export const TestForm = ({
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
        label='اسم الفحص'
        name='name'
        value={data.name}
        onChange={onChange}
        error={GetErrorMsg(error, 'Name')}
      />
      <InputGreen
        label='كود الفحص'
        name='code'
        value={data.code}
        onChange={onChange}
        error={GetErrorMsg(error, 'Code')}
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
