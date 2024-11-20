'use client';

import { useEffect, useState } from 'react';
import BackIcon from '@/assets/icons/back';
import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import { Toast } from '@/components/toast';
import { Link, useRouter } from '@/navigation';
import ROUTES from '@/routes';
import {
  GetMasterDataServicesID,
  useEditMasterDataServices,
} from '@/useAPI/admin/main-data/services';
import { Textarea } from '@mantine/core';

function Page({ params }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    AvailableSrvices: '1',
    name: '',
    DefinitionServices: '',
    Price: '',
    termsAndConditions: '',
  });

  const { data, isLoading } = GetMasterDataServicesID(
    params.servicesID
  );

  const {
    mutateAsync: EditMasterDataServices,
    error,
    isPending,
    isError,
    reset,
  } = useEditMasterDataServices(formData?.id);

  useEffect(() => {
    data?.data.data ? setFormData(data.data.data) : null;
  }, [isLoading, data?.data?.data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (isError) {
      reset();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => {
          formDataToSend.append(key, file);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    Toast.Promise(EditMasterDataServices(formDataToSend), {
      success: 'تم التعديل بنجاح',
      onSuccess: () => {
        router.replace(ROUTES.ADMIN.DATAMAIN.SERVICES);
      },
    });
  };
  return (
    <div>
      <div className='flex items-center gap-4 lg:gap-7 mb-12'>
        <Link
          href={
            ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(
              data?.data.data.id
            ) + '?show=false'
          }
          className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center'
        >
          <BackIcon className={'w-full h-full'} />
        </Link>
        <h2 className='text-[36px]'>
          {' '}
          تعديل خدمة - داخلية
        </h2>
      </div>
      <form className='lgl:max-w-[80%] flex flex-col gap-6 lg:gap-10 w-full mx-auto lgl:mt-20'>
        <InputGreen
          label='اسم الخدمة'
          name='name'
          value={formData?.name || ''}
          onChange={handleInputChange}
          error={GetErrorMsg(error, 'Name')}
        />
        <InputGreen
          label='تعريف للخدمة'
          name='definitionServices'
          value={formData?.definitionServices || ''}
          onChange={handleInputChange}
          error={GetErrorMsg(error, 'DefinitionServices')}
        />
        <InputGreen
          label='سعر الخدمة'
          name='price'
          type='number'
          value={formData?.price || ''}
          onChange={handleInputChange}
          error={GetErrorMsg(error, 'Price')}
        />
        <Textarea
          label='الشروط و الاحكام'
          name='termsAndConditions'
          value={formData?.termsAndConditions || ''}
          error={GetErrorMsg(error, 'TermsAndConditions')}
          onChange={handleInputChange}
          radius='md'
          size='xl'
          autosize
          minRows={4}
          classNames={{
            input:
              'min-h-[160px] h-auto  w-full rounded-lg border-greenMain text-[24px]',
            label: 'text-base mb-2',
          }}
        />
        <div className='flex flex-col mt-16 items-center gap-3'>
          <Button
            disabled={isPending}
            onClick={handleSubmit}
            className='w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md'
            variant='secondary'
          >
            حفظ
          </Button>
          <Link
            disabled={isPending}
            href={ROUTES.ADMIN.DATAMAIN.SERVICESADD}
            className='w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold'
          >
            إلغاء
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Page;
