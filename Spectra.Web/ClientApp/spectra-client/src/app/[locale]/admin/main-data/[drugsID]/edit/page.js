'use client';
import BackIcon from '@/assets/icons/back';
import CloseIcon from '@/assets/icons/close';
import UploadImgIcon from '@/assets/icons/uploadImg';
import Button from '@/components/button';
import HandelShowDataEdit from '@/components/handelShowDataEdit';
import InputGreen from '@/components/Input-green';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import {
  GetDrugsID,
  useEditDrug,
} from '@/useAPI/admin/main-data/drugs';
import { Dropzone } from '@mantine/dropzone';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function Page({ params }) {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    activeIngredient: '',
    scientificName: '',
    type: '',
    recommendedDosage: '',
    doncentration: '',
    interactionsWithOtherdrugs: '',
    interactionsWithOtherdrugs: '',
    notes: '',
    attachmentPath: [],
  });
  const { data, isLoading } = GetDrugsID(params.drugsID);
  const { mutate: EditDrug } = useEditDrug(formData?.id);
  useEffect(() => {
    data?.data.data ? setFormData(data.data.data) : null;
  }, [isLoading]);

  const handleHeaderInputChange = (files) => {
    setFormData((prev) => ({
      ...prev,
      attachmentPath: prev.attachmentPath
        ? [...prev.attachmentPath, ...files]
        : files,
    }));
  };

  const handleDeleteImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      attachmentPath: prev.attachmentPath.filter(
        (_, i) => i !== index
      ),
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getValue = (value) => (value ? value : '');
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = formData.id;
    console.log(id);

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

    EditDrug(formDataToSend);
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
      <HandelShowDataEdit
        isLoading={isLoading}
        isID={formData?.id}
      >
        <div>
          <form className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'>
            <div className='flex-1 w-full h-auto relative'>
              <h3 className='text-[12px] md:text-[16px] mb-2 mdl:mb-4'>
                صورة العقار
              </h3>
              {formData?.attachmentPath?.length > 0 ? (
                <div className='flex w-full h-auto items-center flex-wrap gap-3'>
                  {formData.attachmentPath.map(
                    (img, index) => (
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
                          <CloseIcon
                            className={'w-5 h-auto'}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <Dropzone
                  onDrop={handleHeaderInputChange}
                  maxSize={5 * 1024 ** 2}
                  className='mb-1 mdl:mb-5 rounded-xl'
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
              value={getValue(formData.name)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='الكود'
              name='code'
              value={getValue(formData.code)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='المادة الفعالة'
              name='activeIngredient'
              value={getValue(formData.activeIngredient)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='الاسم العلمي'
              name='scientificName'
              value={getValue(formData.scientificName)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='النوع'
              name='type'
              value={getValue(formData.type)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='الجرعة الموصى به'
              name='recommendedDosage'
              value={getValue(formData.recommendedDosage)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='تركيز الدواء'
              name='doncentration'
              value={getValue(formData.doncentration)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='تفاعلات الدواء مع أدوية أخرى'
              name='DrugInteractionsWithOtherdrugs'
              value={getValue(
                formData.interactionsWithOtherdrugs
              )}
              onChange={handleInputChange}
            />
            <InputGreen
              label='موانع الاستخدام'
              name='contraindications'
              value={getValue(formData.contraindications)}
              onChange={handleInputChange}
            />
            <InputGreen
              label='ملاحظات'
              name='notes'
              value={getValue(formData.notes)}
              onChange={handleInputChange}
            />
          </form>
          <div className='flex items-center gap-4 md:gap-10 flex-col md:flex-row'>
            <Button
              onClick={handleSubmit}
              type='submit'
              variant='secondary'
              className='max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]'
            >
              حفظ
            </Button>
          </div>
        </div>
      </HandelShowDataEdit>
    </div>
  );
}

export default Page;
