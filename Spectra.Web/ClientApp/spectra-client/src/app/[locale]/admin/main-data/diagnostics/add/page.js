'use client';
import React, { useState } from 'react';
import BackIcon from '@/assets/icons/back';
import { Link } from '@/navigation';
import Button from '@/components/button';
import ROUTES from '@/routes';
import { Textarea } from '@mantine/core';
import InputGreen from '@/components/Input-green';
function Page() {
  const [formData, setFormData] = useState({
    code1: '',
    code2: '',
    code3: '',
    name: '',
    description: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className='flex mb-10 lgl:mt-0 mt-6   items-center gap-4 '>
        <Link
          href={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS}
          className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
        >
          <BackIcon className={'w-full h-full'} />
        </Link>
        <h2 className='headTitleDash'>اضافة تشخيص</h2>
      </div>
      <div>
        <form className='flex flex-col gap-4 lg:gap-8 px-3 mb-14'>
          <InputGreen
            label='كود 1'
            name='code1'
            value={formData.code1}
            onChange={handleInputChange}
          />
          <InputGreen
            label='كود 2'
            name='code2'
            value={formData.code2}
            onChange={handleInputChange}
          />
          <InputGreen
            label='كود 3'
            name='code3'
            value={formData.code3}
            onChange={handleInputChange}
          />
          <InputGreen
            label='اسم التشخيص'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
          <Textarea
            label='وصف التشخيص'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            classNames={{
              input:
                'min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] border-greenMain rounded-2xl',
              label: 'text-[12px] md:text-[16px]',
            }}
          />
        </form>
        <div className='flex mt-10 items-center gap-4 md:gap-10 flex-col md:flex-row'>
          <Button
            onClick={() => {
              // console.log(formData);
            }}
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
