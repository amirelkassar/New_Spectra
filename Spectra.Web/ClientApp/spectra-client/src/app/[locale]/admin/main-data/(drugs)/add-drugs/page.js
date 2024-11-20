'use client';
import { useState } from 'react';
import { Dropzone } from '@mantine/dropzone';
import Image from 'next/image';

import BackIcon from '@/assets/icons/back';
import CloseIcon from '@/assets/icons/close';
import UploadImgIcon from '@/assets/icons/uploadImg';
import Button from '@/components/button';

import GetErrorMsg from '@/components/getErrorMsg';
import InputGreen from '@/components/Input-green';
import { getFormData } from '@/lib/utils';
import { Link, useRouter } from '@/navigation';
import ROUTES from '@/routes';
import { useCreateDrug } from '@/useAPI/admin/main-data/drugs';
import { Toast } from '@/components/toast';

function Page() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    ActiveIngredient: '',
    ScientificName: '',
    type: '',
    RecommendedDosage: '',
    Doncentration: '',
    InteractionsWithOtherdrugs: '',
    Contraindications: '',
    Nots: '',
    photos: [], // Include photos directly in formData
  });

  const {
    mutateAsync: createDrug,
    error,
    isError,
    isPending,
    reset,
  } = useCreateDrug();

  const handleHeaderInputChange = (files) => {
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files], // Update photos array with uploaded files
    }));
    if (isError) {
      reset();
    }
  };

  const handleDeleteImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index), // Remove from photos array
    }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = getFormData(formData);

    Toast.Promise(createDrug(data), {
      success: 'تم اضافة العقار بنجاح',
      onSuccess: (res) => {
        if (res?.successOpration)
          router.replace(ROUTES.ADMIN.DATAMAIN.HOME);
      },
    });
  };
  return (
    <div>
      <div className='flex mb-10 items-center gap-4'>
        <Link
          href={ROUTES.ADMIN.DATAMAIN.HOME}
          className='w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center'
        >
          <BackIcon className={'w-full h-full'} />
        </Link>
        <h2 className='headTitleDash'>اضافة وصفة طبية</h2>
      </div>
      <div>
        <form
          className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'
          onSubmit={handleSubmit}
        >
          <div className='flex-1 w-full h-auto relative'>
            <h3 className='text-[12px] md:text-[16px] mb-2 mdl:mb-4'>
              صورة العقار
            </h3>
            {formData.photos.length > 0 ? (
              <div className='flex w-full h-auto items-center flex-wrap gap-3'>
                {formData.photos.map((img, index) => (
                  <div
                    key={index}
                    className='relative flex items-center justify-center max-w-[100px] mdl:max-w-[140px] h-[60px] mdl:h-[98px] w-auto'
                  >
                    <Image
                      src={URL.createObjectURL(img)}
                      width={100}
                      height={100}
                      priority={true}
                      alt={`img-${index}`}
                      className='h-full place-content-center block w-auto object-contain object-center'
                    />
                    <div
                      onClick={() =>
                        handleDeleteImage(index)
                      }
                      className='absolute cursor-pointer bg-white duration-200 hover:shadow-md top-0 start-0 bg-red-500 text-white rounded-full'
                    >
                      <CloseIcon className={'w-5 h-auto'} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Dropzone
                onDrop={handleHeaderInputChange}
                maxSize={5 * 1024 ** 2}
                className='mb-1 mdl:mb-5 rounded-xl'
                accept={['image/*']}
              >
                <div className='flex gap-1 p1-8 flex-col justify-center h-14 mdl:h-[80px] items-center'>
                  <UploadImgIcon className='w-6 mdl:w-8 h-auto' />
                  <h2 className='text-xs mdl:text-base text-grayDark font-Light'>
                    اضغط هنا لرفع صورة
                  </h2>
                </div>
              </Dropzone>
            )}
          </div>

          <InputGreen
            label='اسم العقار'
            name='name'
            placeholder='اسم العقار او نوع التوصية'
            value={formData.name}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'Name')}
          />
          <InputGreen
            label='الكود'
            name='code'
            value={formData.code}
            onChange={handleInputChange}
          />
          <InputGreen
            label='المادة الفعالة'
            name='ActiveIngredient'
            value={formData.ActiveIngredient}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'ActiveIngredient')}
          />
          <InputGreen
            label='الاسم العلمي'
            name='ScientificName'
            value={formData.ScientificName}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'ScientificName')}
          />
          <InputGreen
            label='النوع'
            name='type'
            value={formData.type}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'Type')}
          />
          <InputGreen
            label='الجرعة الموصى به'
            name='RecommendedDosage'
            value={formData.RecommendedDosage}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'RecommendedDosage')}
          />
          <InputGreen
            label='تركيز الدواء'
            name='Doncentration'
            value={formData.Doncentration}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'Doncentration')}
          />
          <InputGreen
            label='تفاعلات الدواء مع أدوية أخرى'
            name='InteractionsWithOtherdrugs'
            value={formData.InteractionsWithOtherdrugs}
            onChange={handleInputChange}
            error={GetErrorMsg(
              error,
              'InteractionsWithOtherdrugs'
            )}
          />
          <InputGreen
            label='موانع الاستخدام'
            name='Contraindications'
            value={formData.Contraindications}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'Contraindications')}
          />
          <InputGreen
            label='ملاحظات'
            name='Nots'
            value={formData.Nots}
            onChange={handleInputChange}
            error={GetErrorMsg(error, 'Nots')}
          />
        </form>

        <div className='flex items-center gap-4 md:gap-10 flex-col md:flex-row'>
          <Button
            onClick={handleSubmit}
            disabled={isPending}
            type='submit'
            variant='secondary'
            className='max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]'
          >
            حفظ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
