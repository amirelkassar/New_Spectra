'use client';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DatePicker } from '@mantine/dates';
import { Textarea } from '@mantine/core';
import { Select } from '@mantine/core';
import { useState } from 'react';

import TimeInput from '@/components/inputs/time-input';
import UploadInput from '@/components/inputs/upload-input';
import { useBook } from '../_context/useBook';
import { Link, useRouter } from '@/navigation';
import { Heading } from '../../../_components/heading';
import ROUTES from '@/routes';
import Container from '../../../_components/container';
import BackIcon from '@/assets/icons/back-black';
import CreditCardIcon from '@/assets/icons/credit-card';
import InsurancePayIcon from '@/assets/icons/insurance-pay';
import Card from '@/components/card';
import { MedicalTeamData, SpecialNeedsData } from '@/lib/demoData';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import TextInput from '@/components/inputs/text-input';

const BookAppointmentPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(null);

  const { selected } = useBook();

  if (!selected.specializationId || !selected.doctorId) {
    router.push(ROUTES.CLIENT.TEAM);
    return null;
  }

  const selectedSpecialization = SpecialNeedsData.find(
    (item) => item.id === selected.specializationId
  );

  const selectedDoctor = MedicalTeamData.find(
    (item) => item.id === selected.doctorId
  );
  return (
    <Container>
      <section>
        <form className='space-y-5'>
          <Card className='space-y-5'>
            {/* Section Heading */}
            <Heading
              label='اختيار الميعاد'
              icon={
                <Link href={ROUTES.CLIENT.TEAM}>
                  <BackIcon className='ltr:rotate-180' />
                </Link>
              }
              className='flex-row-reverse justify-end gap-5'
            />
            {/* INFO */}
            <div className='flex items-center flex-wrap justify-evenly gap-5'>
              {/* Selected Specialization */}
              {selectedSpecialization && (
                <div className='flex items-center gap-3 flex-col lg:size-40 size-32 rounded-lg bg-blueLight justify-center p-3'>
                  {selectedSpecialization.icon}
                  <span className='text-xs text-center lg:text-base text-black'>
                    {selectedSpecialization.label}
                  </span>
                </div>
              )}

              {/* Selected Doctor */}
              {selectedDoctor && (
                <div className='flex items-center gap-3'>
                  <Avatar
                    name={selectedDoctor.doctor}
                    src={selectedDoctor.avatar}
                    className='size-16 lg:size-20 min-w-max inline-flex shrink-0'
                    radius='md'
                  />

                  <p className='flex flex-col text-xs lg:text-base text-black'>
                    <span className='font-bold'>
                      الطبيب {selectedDoctor.doctor}
                    </span>
                    <span>{selectedDoctor.profession}</span>
                  </p>
                </div>
              )}

              {/* Appointment Time */}
              <div className='text-xs lg:text-base text-black flex lg:flex-col gap-3 w-full lg:w-auto justify-center'>
                <p className='font-bold'>ميعاد الحجز</p>
                <span>15/1/2022</span>
                <span>12:00م</span>
              </div>
            </div>
          </Card>
          {/* Date select */}
          <Card className='!font-bold !text-sm lg:!text-medium !text-black'>
            <h4>حدد تاريخ</h4>
            <div className='w-fit mx-auto'>
              <DatePicker value={value} onChange={setValue} />
            </div>
          </Card>

          {/* NOTES */}
          <Card>
            <Textarea
              size='lg'
              radius='md'
              classNames={{
                input: 'focus-within:border-greenMain active:border-greenMain',
                label: 'text-xs lg:text-base mb-2 ps-1',
              }}
              label='ملاحظات'
            />
          </Card>

          {/* FILES UPLOAD */}
          <Card>
            <UploadInput />
          </Card>

          {/* PAYMENT */}
          <Card className='space-y-5'>
            <h4 className='!font-bold !text-sm lg:!text-medium !text-black'>
              الدفع من خلال
            </h4>
            <div className='flex items-center gap-5 flex-col lg:flex-row'>
              <InsuranceModal />
              <Button variant='blueLight' className='w-full py-5 px-2'>
                <CreditCardIcon className='size-10 lg:size-14' />
                البطاقة الائتمانية
              </Button>
            </div>
          </Card>
          <Button
            variant='secondary'
            type='submit'
            className='w-full lg:max-w-64 font-bold'
          >
            تأكيد الحجز
          </Button>
        </form>
      </section>
    </Container>
  );
};

export default BookAppointmentPage;

const InsuranceModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Modal button trigger */}
      <Button onClick={open} variant='blueLight' className='w-full py-5 px-2'>
        <InsurancePayIcon className='size-10 lg:size-14' />
        التأمين
      </Button>

      {/* MODAL */}
      <Modal
        opened={opened}
        onClose={() => {
          close();
        }}
        withCloseButton={false}
        size={'md'}
        title='ادخل التأمين'
        classNames={{
          title: 'text-black font-bold text-sm lg:text-medium',
        }}
      >
        <div className='mt-3 space-y-3'>
          <TextInput label='اسم شركة التأمين' />
          <TextInput label='رقم بوليصة التأمين' />
          <TextInput label='نوع التأمين' />
          <TextInput label='اسم حامل التأمين' />
          <div className='flex items-end gap-5'>
            <Select
              classNames={{
                input: 'rounded-lg focus:border-greenMain',
                label: 'text-xs lg:text-base mb-2 ps-1',
              }}
              placeholder='سنة'
              size='md'
              label='تاريخ الميلاد'
              data={[
                '2024',
                '2023',
                '2022',
                '2021',
                '2020',
                '2019',
                '2018',
                '2017',
                '2016',
                '2015',
                '2014',
                '2013',
                '2012',
                '2011',
                '2010',
              ]}
              withCheckIcon={false}
              allowDeselect={false}
            />
            <Select
              classNames={{
                input: 'rounded-lg focus:border-greenMain',
                label: 'text-xs lg:text-base mb-2 ps-1',
              }}
              placeholder='شهر'
              size='md'
              data={[
                'يناير',
                'فبراير',
                'مارس',
                'ابريل',
                'مايو',
                'يونيو',
                'يوليو',
                'اغسطس',
                'سبتمبر',
                'اكتوبر',
                'نوفمبر',
                'ديسمبر',
              ]}
              withCheckIcon={false}
              allowDeselect={false}
            />
            <Select
              classNames={{
                input: 'rounded-lg focus:border-greenMain',
                label: 'text-xs lg:text-base mb-2 ps-1',
              }}
              placeholder='يوم'
              size='md'
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
              withCheckIcon={false}
              allowDeselect={false}
            />
          </div>
          <TextInput label='رقم الهوية' />
          <TextInput label='تاريخ بدء التغطية' />
          <TextInput label='تاريخ انتهاء التغطية' />
          <TextInput label='نسبة التغطية' />

          <div className='!mt-6 space-y-3'>
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
          </div>
        </div>
      </Modal>
    </>
  );
};
