'use client';

import { Modal } from '@mantine/core';
import { useCallback } from 'react';
import { usePathname, useRouter } from '@/navigation';
import { useDisclosure } from '@mantine/hooks';

import { AddButton } from './add-button';
import TextInput from '@/components/inputs/text-input';
import Button from '@/components/button';
import SelectInput from '@/components/inputs/select-input';

export const AddChildModal = ({ trigger = null }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();
  const router = useRouter();

  const removeSearchParams = useCallback(() => {
    router.replace(pathname);
  }, [pathname, router]);

  return (
    <>
      {/* TRIGGER */}

      <div className='w-fit' role='dialog' onClick={open}>
        {trigger || <AddButton label='اضافة طفل' />}
      </div>

      {/* MODAL */}
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={() => {
          close();
          removeSearchParams();
        }}
        size={'lg'}
      >
        <div className='space-y-5'>
          {/* HEADER */}
          <h3 className='font-bold text-sm py-3 lg:text-medium text-black'>
            اضافة طفل
          </h3>

          {/* FORM */}
          <form className='space-y-3'>
            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='اسم الطفل'
              placeholder='محمد'
            />

            <SelectInput
              labelClassName='font-normal text-xs mdl:text-base'
              data={['ذكر', 'انثى']}
              label='النوع'
              placeholder='ذكر / انثى'
            />

            <div className='grid grid-cols-3 gap-3 place-items-end'>
              <SelectInput
                labelClassName='font-normal text-xs mdl:text-base'
                data={[
                  '2019',
                  '2020',
                  '2021',
                  '2022',
                  '2023',
                ]}
                placeholder='سنة'
                label='تاريخ الميلاد'
                searchable
              />
              <SelectInput
                labelClassName='font-normal text-xs mdl:text-base'
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                ]}
                placeholder='شهر'
                searchable
              />

              <SelectInput
                labelClassName='font-normal text-xs mdl:text-base'
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                  '17',
                  '18',
                  '19',
                  '20',
                  '21',
                  '22',
                  '23',
                  '24',
                  '25',
                  '26',
                  '27',
                  '28',
                  '29',
                  '30',
                  '31',
                ]}
                placeholder='يوم'
                searchable
              />
            </div>

            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='طول الطفل'
              placeholder='90 سم'
            />

            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='وزن الطفل'
              placeholder='15 كجم'
            />
            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='الرقم القومي للطفل'
              placeholder='123456789'
            />
            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='اعراض علي الطفل'
              placeholder='عدم الانتباه - عنيف'
            />
            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='تاريخ ظهور الاعراض'
              placeholder='من سنتين'
            />

            <SelectInput
              labelClassName='font-normal text-xs mdl:text-base'
              data={['مكتسبة', 'وراثة']}
              label='وراثة ام مكتسبة'
              placeholder='وراثة / مكتسبة'
            />

            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='اعراض جسدية'
              placeholder='حساسية مفرطة - مشاكل في الجهاز الهضمي'
            />
            <TextInput
              labelClassName='font-normal text-xs mdl:text-base'
              label='ملحوظات'
              placeholder='اي ملحوظات اخري تريد اضافتها'
            />

            <div className='flex flex-col mdl:flex-row gap-3 *:flex-1 !mt-10'>
              <Button
                type='submit'
                variant='secondary'
                className='text-sm mdl:text-base font-bold'
              >
                تأكيد
              </Button>
              <Button
                type='button'
                onClick={() => {
                  close();
                  removeSearchParams();
                }}
                className='text-sm mdl:text-base font-bold'
              >
                الغاء
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
