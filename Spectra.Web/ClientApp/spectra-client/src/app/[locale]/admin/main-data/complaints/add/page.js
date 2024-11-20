'use client';
import { useState } from 'react';
import BackIcon from '@/assets/icons/back';
import { Link, useRouter } from '@/navigation';
import Button from '@/components/button';
import ROUTES from '@/routes';
import { Textarea } from '@mantine/core';
import InputGreen from '@/components/Input-green';
import { useCreateComplaint } from '@/useAPI/admin/main-data/complaints';
import GetErrorMsg from '@/components/getErrorMsg';
import { Toast } from '@/components/toast';
function Page() {
  const router = useRouter();

  const {
    mutateAsync: CreateComplaint,
    error,
    isPending,
    isError,
    reset,
  } = useCreateComplaint();

  const [formData, setFormData] = useState({
    complaintName: '',
    code1: '',
    descriptionOfTheComplaint: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (isError) {
      reset();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    Toast.Promise(CreateComplaint(formData), {
      success: 'تم ارسال الشكوي بنجاح',
      onSuccess: () => {
        router.replace(ROUTES.ADMIN.DATAMAIN.COMPLAINTS);
      },
    });
  };

  return (
    <div>
      <div className='flex mb-10 lgl:mt-0 mt-6   items-center gap-4 '>
        <Link
          href={ROUTES.ADMIN.DATAMAIN.COMPLAINTS}
          className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
        >
          <BackIcon className={'w-full h-full'} />
        </Link>
        <h2 className='headTitleDash'>اضافة شكوى</h2>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'
        >
          <InputGreen
            label='اسم الشكوى'
            name='complaintName'
            value={formData.complaintName}
            onChange={handleChange}
            error={GetErrorMsg(error, 'ComplaintName')}
          />
          <InputGreen
            label='الكود'
            name='code1'
            value={formData.code1}
            onChange={handleChange}
            error={GetErrorMsg(error, 'Code1')}
          />
          <Textarea
            classNames={{
              input:
                'min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] border-greenMain rounded-2xl',
              label: 'text-[12px] md:text-[16px]',
            }}
            error={GetErrorMsg(
              error,
              'DescriptionOfTheComplaint'
            )}
            label='وصف الشكوى'
            name='descriptionOfTheComplaint'
            value={formData.descriptionOfTheComplaint}
            onChange={handleChange}
          />
        </form>
        <div className='flex mt-10 items-center gap-4 md:gap-10 flex-col md:flex-row'>
          <Button
            onClick={handleSubmit}
            disabled={isPending}
            variant='secondary'
            className={
              'max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]'
            }
          >
            حفظ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
