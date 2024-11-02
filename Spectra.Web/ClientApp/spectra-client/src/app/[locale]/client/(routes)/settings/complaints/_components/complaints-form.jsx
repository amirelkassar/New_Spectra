'use client';

import Button from '@/components/button';
import SelectInput from '@/components/inputs/select-input';
import TextInput from '@/components/inputs/text-input';
import { Textarea } from '@/components/inputs/textarea';

export const ComplaintsForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      autoComplete='off'
      className='space-y-3 2xl:max-w-4xl mx-auto'
    >
      <TextInput
        label='عنوان الشكوي'
        name='title'
        id='title'
        size='lg'
        autoComplete='off'
      />

      <Textarea
        label='محتوي الشكوي'
        name='description'
        id='description'
        size='lg'
        autoComplete='off'
        classNames={{
          input: 'min-h-32',
        }}
      />

      <SelectInput
        label='نوع الشكوي'
        name='type'
        id='type'
        size='lg'
        autoComplete='off'
        data={[
          'مدفوعات',
          'طبيب / اخصائي',
          'شكاوي تتعلق بالتواصل',
          'شكاوي تتعلق بالخدمات',
          'اخري',
        ]}
      />

      <Button
        className='w-full sml:max-w-sm mx-auto !mt-10'
        variant='secondary'
        type='submit'
      >
        ارسال
      </Button>
    </form>
  );
};
