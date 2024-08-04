'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { AddButton } from './add-button';
import TextInput from '@/components/inputs/text-input';
import Button from '@/components/button';

export const AddClientModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className='w-fit' role='dialog' onClick={open}>
        <AddButton label='اضافة عميل' />
      </div>

      {/* MODAL */}
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={() => {
          close();
        }}
        size={'md'}
      >
        <div className='space-y-5'>
          {/* HEADER */}
          <h3 className='font-bold text-sm py-3 lg:text-medium text-black'>
            اضافة طفل
          </h3>

          {/* FORM */}
          <form className='space-y-3'>
            <div className='flex items-center gap-3'>
              <TextInput label='اسم الطفل الاول' />
              <TextInput label='اسم الطفل الثاني' />
            </div>
            <div className='flex items-center gap-3'>
              <TextInput label='النوع' />
              <TextInput label='تاريخ الميلاد' />
            </div>

            <TextInput label='اعراض علي الطفل' />
            <TextInput label='تاريخ ظهور الاعراض' />
            <TextInput label='وراثة ام مكتسبة' />
            <TextInput label='اعراض جسدية' />
            <TextInput label='ملحوظات' />
            <Button
              type='submit'
              variant='secondary'
              className='text-sm lg:text-base font-bold block mx-auto w-full'
            >
              تأكيد
            </Button>
            <Button
              type='button'
              onClick={close}
              className='text-sm lg:text-base font-bold block mx-auto w-full'
            >
              الغاء
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};
