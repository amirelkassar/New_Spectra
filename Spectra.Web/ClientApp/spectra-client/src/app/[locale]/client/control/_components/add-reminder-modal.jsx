'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import { DateTimePicker } from '@mantine/dates';

import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import CloseIcon from '@/assets/icons/close';
import TextInput from '@/components/inputs/text-input';
import { useState } from 'react';
import Button from '@/components/button';

export const AddReminderModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    date: new Date(),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
  };

  return (
    <>
      {/* Modal button trigger */}
      <button onClick={open}>
        <PlusInsideCircleIcon className='lg:size-8 size-5' />
      </button>

      {/* MODAL */}
      <Modal
        opened={opened}
        onClose={() => {
          close();
          setForm({
            title: '',
            subtitle: '',
            date: new Date(),
          });
        }}
        closeButtonProps={{
          icon: <CloseIcon className='size-6 lg:size-10' />,
        }}
        size={'lg'}
      >
        <div className='space-y-5'>
          {/* HEADER */}
          <h3 className='font-bold text-sm lg:text-medium text-black'>
            رسائل التذكير
          </h3>

          {/* FORM */}
          <form className='space-y-3' onSubmit={onSubmit}>
            <TextInput
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              label='العنوان'
              placeholder='كشف....'
            />
            <TextInput
              value={form.subtitle}
              onChange={(e) =>
                setForm({
                  ...form,
                  subtitle: e.target.value,
                })
              }
              label='المحتوي'
              placeholder='كشف ابني ....'
            />

            <DateTimePicker
              valueFormat='DD MMM YYYY hh:mm A'
              label='التاريخ والتوقت'
              placeholder='Pick date and time'
              size='md'
              classNames={{
                label:
                  'font-bold text-xs lg:text-base mb-2 ps-1',
                input: 'rounded-xl focus:border-greenMain',
              }}
              onChange={(val) =>
                setForm({ ...form, date: val })
              }
              value={form.date}
            />

            {/* <div>
              <label
                className='font-bold text-xs lg:text-base block mb-2 ps-1'
                htmlFor='date'
              >
                التاريخ
              </label>
              <div className='w-fit mx-auto'>
                <DatePicker
                  value={form.date}
                  onChange={(val) =>
                    setForm({
                      ...form,
                      date: val,
                    })
                  }
                  weekendDays={[5, 6]}

                  id='date'
                  classNames={{
                    calendarHeader: 'text-greenMain font-Bold',
                    day: 'data-[selected=true]:bg-greenMain',
                  }}
                />
              </div>
            </div>
            <div>
              <label
                className='font-bold text-xs lg:text-base block mb-2 ps-1'
                htmlFor='date'
              >
                التوقيت
              </label>
              <div className='w-fit mx-auto'>
                <input type='time' />
              </div>
            </div> */}

            <Button
              type='submit'
              variant='secondary'
              className='text-sm lg:text-base font-bold block mx-auto w-full max-w-56'
            >
              تأكيد الميعاد
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};
