'use client';
import ArrowLeftMainGreen from '@/assets/icons/arrow-left-mainGreen';
import ReportChart from '@/components/reportChart';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

function ReportsAll({ data }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <button
        onClick={open}
        className='flex bg-blueLight duration-200 hover:shadow-md min-w-[178px] items-center justify-center gap-4 px-5 h-[52px] rounded-xl text-greenMain'
      >
        <p className='font-Bold text-sm md:text-base'>عرض الكل</p>
        <ArrowLeftMainGreen className='w-2 h-auto' />
      </button>
      <Modal
        opened={opened}
        size={'xl'}
        onClose={close}
        withCloseButton={false}
        centered
        className='modelReq  '
        classNames={{
          inner: '!w-[1380px]',
          content: '!rounded-xl',
        }}
      >
        <div className='max-w-full'>
          <h2 className='text-base mdl:text-xl font-Bold pb-7 border-b w-full border-grayMedium'>
            ملخص الاداء
          </h2>
          <ReportChart ReportDataChart={data} />
        </div>
      </Modal>
    </div>
  );
}

export default ReportsAll;
