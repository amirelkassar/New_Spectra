'use client';
import { MultiSelect, Textarea } from '@mantine/core';
import { useState } from 'react';
import { Link, useRouter } from '@/navigation';
import Button from '@/components/button';
import BackIcon from '@/assets/icons/back';
import ROUTES from '@/routes';
import { Dropzone } from '@mantine/dropzone';
import Image from 'next/image';
import UploadImgIcon from '@/assets/icons/uploadImg';
import EditImgIcon from '@/assets/icons/editImg';
import CheckHeartIcon from '@/assets/icons/check-heart';
import PlusInsideCircleIcon from '@/assets/icons/plus-inside-circle';
import InputGreen from '@/components/Input-green';
import ArrowDownIcon from '@/assets/icons/arrow-down';
import { useAddService } from '@/hooks/queries/admin/main-data/services';
import GetErrorMsg from '@/components/getErrorMsg';
import { Toast } from '@/components/toast';
const dataSelect = [
  'SPEECH Pediatrics LANGUAGE ASSESSMENT',
  'Psychological Initial Assessment',
  ' recommendation OT VR',
  'Common question',
  'Doctors follow up',
];
function ServicesShow() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    AvailableSrvices: '1',
    Name: '',
    DefinitionServices: '',
    Photo: '',
    Price: '',
    TermsAndConditions: '',
    Secations: [
      { sectiontitle: '', sectiondescription: '' },
    ],
  });
  const {
    mutateAsync: createDrug,
    error,
    isPending,
    isError,
    reset,
  } = useAddService();

  const handleReportsChange = (selected) => {
    setFormData((prevData) => ({
      ...prevData,
      Reports: selected,
    }));
    if (isError) {
      reset();
    }
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

  const handleHeaderInputChange = (files) => {
    setFormData((prevData) => ({
      ...prevData,
      Photo: URL.createObjectURL(files[0]),
    }));
    if (isError) {
      reset();
    }
  };

  const handleInputContentChange = (index, e) => {
    const { name, value } = e.target;
    const newSections = formData.Secations.map(
      (section, i) =>
        i === index
          ? { ...section, [name]: value }
          : section
    );
    setFormData((prevData) => ({
      ...prevData,
      Secations: newSections,
    }));
    if (isError) {
      reset();
    }
  };

  const handleAddSection = () => {
    setFormData((prevData) => ({
      ...prevData,
      Secations: [
        ...prevData.Secations,
        { sectiontitle: '', sectiondescription: '' },
      ],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Append the simple fields to FormData
    for (const key in formData) {
      if (key !== 'Secations') {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Append Secations array to FormData with correct key structure
    formData.Secations.forEach((section, index) => {
      formDataToSend.append(
        `Secations[${index}].sectiontitle`,
        section.sectiontitle
      );
      formDataToSend.append(
        `Secations[${index}].sectiondescription`,
        section.sectiondescription
      );
    });

    // Call the API with the form data
    Toast.Promise(createDrug(formDataToSend), {
      success: 'تم انشاء الخدمة بنجاح',
      onSuccess: () => {
        router.replace(ROUTES.ADMIN.DATAMAIN.SERVICES);
      },
    });
  };

  return (
    <div>
      <div className='flex items-center gap-4 lg:gap-7 -mb-5 relative z-10'>
        <Link
          href={ROUTES.ADMIN.DATAMAIN.SERVICESADD}
          className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center'
        >
          <BackIcon className={'w-full h-full'} />
        </Link>
        <h2 className='text-[36px]'> اضافة خدمة </h2>
      </div>
      <form className=' w-full '>
        <div className="flex gap-3 mb-20 pb-10 relative before:content-[''] before:absolute before:bg-blueLight before:left-1/2 before:-translate-x-1/2 before:w-[calc(100%+40px)] before:h-[calc(100%+40px)] before:rounded-t-xl before:top-[-46px]">
          <div className='flex flex-1 pt-14 flex-col gap-5 relative'>
            <InputGreen
              label='عنوان الخدمة'
              name='Name'
              value={formData.Name}
              onChange={handleInputChange}
              error={GetErrorMsg(error, 'Name')}
            />

            <Textarea
              label='تعريف مختصر للخدمة'
              name='DefinitionServices'
              error={GetErrorMsg(
                error,
                'DefinitionServices'
              )}
              value={formData.DefinitionServices}
              onChange={handleInputChange}
              radius='md'
              size='xl'
              autosize
              minRows={4}
              classNames={{
                input:
                  'min-h-[160px] h-auto w-full rounded-lg bg-grayBlueLight border-grayMedium text-[24px]',
                label: 'text-base mb-2',
              }}
            />
          </div>

          <div className='flex-1 w-full h-auto relative'>
            {formData.Photo ? (
              <div className='relative w-full h-auto'>
                <Image
                  src={formData.Photo}
                  width={890}
                  height={300}
                  priority={true}
                  alt='img'
                  className='w-full max-h-[570px] h-full object-cover object-top rounded-[10px]'
                />
                <Dropzone
                  maxFiles={1}
                  onDrop={handleHeaderInputChange}
                  maxSize={5 * 1024 ** 2}
                  className='size-11 p-[2px] duration-200 hover:shadow-md hover:bg-greenMain rounded-full bg-greenMain flex items-center justify-center absolute left-1/2 -translate-x-1/2 -bottom-5'
                >
                  <EditImgIcon className='w-full h-auto flex-1' />
                </Dropzone>
              </div>
            ) : (
              <Dropzone
                maxFiles={1}
                onDrop={handleHeaderInputChange}
                maxSize={5 * 1024 ** 2}
                className='mb-10 rounded-xl'
              >
                <div className='flex gap-4 py-8 flex-col justify-center h-[300px] items-center'>
                  <UploadImgIcon />
                  <h2 className='text-base text-grayDark font-Light'>
                    اضغط هنا لرفع صورة
                  </h2>
                </div>
              </Dropzone>
            )}
            {GetErrorMsg(error, 'Photo') ? (
              <p className='text-red font-Regular text-sm'>
                {GetErrorMsg(error, 'Photo')}
              </p>
            ) : null}
          </div>
        </div>
        <div className='lgl:max-w-[80%] mx-auto mb-10'>
          {formData.Secations.map((section, index) => (
            <div
              key={index}
              className='mb-5 flex flex-col gap-7 relative'
            >
              <div className="content-[''] -right-8 w-5 h-5 absolute top-5 bg-no-repeat bg-[20px]">
                <CheckHeartIcon className=' w-full h-auto ' />
              </div>
              <InputGreen
                placeholder='اكتب العنوان هنا ..'
                onChange={(e) =>
                  handleInputContentChange(index, e)
                }
                name='sectiontitle'
                value={section.sectiontitle}
              />
              <Textarea
                placeholder='اكتب المحتوى هنا ..'
                onChange={(e) =>
                  handleInputContentChange(index, e)
                }
                value={section.sectiondescription}
                size='lg'
                name='sectiondescription'
                radius='md'
                autosize
                minRows={4}
                classNames={{
                  input:
                    'min-h-[170px] bg-[#FCFCFD] border border-[#CFD0D7]',
                }}
              />
            </div>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddSection();
            }}
            className='flex flex-col gap-4 duration-200 hover:shadow-md py-8 items-center justify-center w-full px-4 min-h-[150px] bg-blueLight border border-greenMain rounded-xl font-bold'
          >
            <PlusInsideCircleIcon
              className={'w-11 h-auto'}
            />
            <p className='text-xl font-Bold text-center'>
              {' '}
              إضافة قسم
            </p>
          </button>
        </div>
        <div className='lgl:max-w-[80%] mx-auto'>
          <div className='flex flex-col gap-8 w-full'>
            <div className=' relative  '>
              <div className="content-[''] -right-8 w-5 h-5 absolute top-5 bg-no-repeat bg-[20px]">
                <CheckHeartIcon className=' w-full h-auto ' />
              </div>
              <InputGreen
                label='سعر الخدمة '
                value={formData.Price}
                onChange={handleInputChange}
                name='Price'
                type='number'
                error={GetErrorMsg(error, 'Price')}
              />
            </div>
            <Textarea
              placeholder='الشروط و الاحكام'
              radius='md'
              autosize
              minRows={4}
              value={formData.TermsAndConditions}
              onChange={handleInputChange}
              name='TermsAndConditions'
              error={GetErrorMsg(
                error,
                'TermsAndConditions'
              )}
              classNames={{
                input:
                  'min-h-[170px] bg-[#FCFCFD]  border border-[#CFD0D7] ',
              }}
            />
          </div>
        </div>
        <div className='lgl:max-w-[80%] mx-auto mt-4 md:mt-10'>
          <MultiSelect
            data={dataSelect}
            label='اضافة التقارير الخاصة بالخدمة'
            placeholder='اختر  التقارير الخاصة بالخدمة'
            onChange={handleReportsChange}
            rightSection={<ArrowDownIcon />}
            className='MultiSelect h-auto flex-1'
            classNames={{
              input: ' !h-auto py-1 min-h-[60px]',
              label: 'text-[12px] md:text-[16px] mb-2',
            }}
          />
        </div>

        <div className='flex flex-col mt-16 items-center gap-3 lgl:max-w-[80%] mx-auto'>
          <Button
            onClick={handleSubmit}
            disabled={isPending}
            className='w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md'
            variant='secondary'
          >
            تأكيد
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

export default ServicesShow;
