import Button from '@/components/button';
import GetErrorMsg from '@/components/getErrorMsg';
import MobileInput from '@/components/inputs/mobile-input';
import { GetCountry } from '@/hooks/queries/general/generalApi';
import { Select, TextInput } from '@mantine/core';
import React, { useEffect, useState } from 'react';
const jobType = [
  {
    value: '1',
    label: 'دكتور',
  },
  {
    value: '2',
    label: 'متخصص',
  },
  {
    value: '3',
    label: 'محاسب',
  },
  {
    value: '4',
    label: 'سكرتير',
  },
];
const Gender = [
  {
    value: '1',
    label: 'ذكر',
  },
  {
    value: '2',
    label: 'انثى',
  },
];
function FormOne({
  handleOnChange,
  handleOnChangePHone,
  setFirstData,
  firstData,
  setPageForm,
  error,
}) {
  const { data: dataCountry, isLoading } = GetCountry();
  const [selectCountry, setSelectCountry] = useState('');

  useEffect(() => {
    if (selectCountry) {
      console.log('hhh');
    }
  }, [selectCountry]);

  return (
    <div>
      <form className='flex flex-col gap-3 lg:gap-6 md:px-3 mb-14 focus:'>
        <Select
          data={jobType}
          label={'المهنة'}
          placeholder='اختر المهنة'
          name='JobTypes'
          value={firstData.JobTypes || ''}
          error={GetErrorMsg(error, 'JobTypes')}
          onChange={(value) =>
            setFirstData({ ...firstData, JobTypes: value })
          }
          className='MultiSelect'
          classNames={{
            input:
              ' rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]',
            label: 'text-base lg:text-xl mb-2',
          }}
        />
        <TextInput
          label={'الاسم كامل'}
          placeholder={'ادخل الاسم كامل'}
          name='FirstName'
          value={firstData.FirstName || ''}
          onChange={handleOnChange}
          error={GetErrorMsg(error, 'FirstName')}
          classNames={{
            input:
              ' rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]',
            label: 'text-base lg:text-xl mb-2',
          }}
        />
        <Select
          data={Gender}
          label={'اختر النوع'}
          placeholder='اختر النوع'
          name='HumenGenders'
          value={firstData.HumenGenders || ''}
          onChange={(value) => {
            setFirstData({
              ...firstData,
              HumenGenders: value,
            });
          }}
          error={GetErrorMsg(error, 'HumenGenders')}
          classNames={{
            input:
              ' rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]',
            label: 'text-base lg:text-xl mb-2',
          }}
        />
        <Select
          data={dataCountry?.data?.map((country) => ({
            value: country.name,
            label: country.name,
          }))}
          label={'اختر البلد'}
          placeholder='اختر البلد'
          error={GetErrorMsg(error, 'Country')}
          searchable
          clearable
          name='Country'
          value={firstData.Country || ''}
          onChange={(value) => {
            setSelectCountry(value);
            setFirstData({ ...firstData, Country: value });
          }}
          classNames={{
            input:
              ' rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]',
            label: 'text-base lg:text-xl mb-2',
          }}
        />
        <Select
          data={['القاهره', 'اسكندريه']}
          label={'اختر المدينة'}
          placeholder='اختر المدينة'
          error={GetErrorMsg(error, 'City')}
          name='City'
          value={firstData.City || ''}
          onChange={(value) =>
            setFirstData({ ...firstData, City: value })
          }
          classNames={{
            input:
              ' rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]',
            label: 'text-base lg:text-xl mb-2',
          }}
        />
        <MobileInput
          name='PhoneNumbers'
          onChange={handleOnChangePHone}
          size='lg'
          label={'رقم الهاتف '}
          placeholder={'ادخل رقم الهاتف'}
          error={GetErrorMsg(error, 'PhoneNumbers')}
          inputClassName='rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]'
        />
        <TextInput
          label={'البريد الالكترونى '}
          type={'email'}
          placeholder={'ادخل بريدك الالكترونى'}
          name='Emailaddress'
          value={firstData.Emailaddress || ''}
          onChange={handleOnChange}
          classNames={{
            input:
              ' rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]',
            label: 'text-base lg:text-xl mb-2',
          }}
          error={GetErrorMsg(error, 'Emailaddress')}
        />
        <TextInput
          label={'رقم الهوية '}
          type={'number'}
          placeholder={'ادخل رقم الهوية'}
          name='NationalId'
          value={firstData.NationalId || ''}
          onChange={handleOnChange}
          classNames={{
            input:
              ' rounded-xl border-greenMain   !h-auto py-1 min-h-[60px]',
            label: 'text-base lg:text-xl mb-2',
          }}
          error={GetErrorMsg(error, 'NationalId')}
        />
        <Button
          onClick={() => setPageForm(2)}
          variant='secondary'
          className='font-Bold text-base md:text-xl w-[316px] h-14 max-w-full'
        >
          التالى
        </Button>
      </form>
    </div>
  );
}

export default FormOne;
