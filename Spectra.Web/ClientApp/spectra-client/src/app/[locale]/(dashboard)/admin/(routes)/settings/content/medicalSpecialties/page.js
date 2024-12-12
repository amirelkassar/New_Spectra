'use client';
import React, { useState } from 'react';
import Card from '@/components/card';
import Button from '@/components/button';
import DoctorsContainer from './_components/DoctorsContainer';
import { Link } from '@/i18n/routing';
import ROUTES from '@/routes';
import BackIcon from '@/assets/icons/back';
import RowDoctors from './_components/rowDoctors';
const allDoctors = [
  { id: '1', title: 'اخصائيين التوحد', selected: true },
  { id: '2', title: 'اخصائيين التغذية', selected: true },
  { id: '3', title: 'اخصائيين الاسرة', selected: false },
  { id: '4', title: 'اخصائيين العلاج الطبيعي', selected: false },
  { id: '5', title: 'اخصائيين الأطفال', selected: false },
];

function Page() {
  const [doctorsSelected, setDoctorsSelected] = useState(
    allDoctors.filter((doctor) => doctor.selected)
  );
  const [hiddenDoctors, setHiddenDoctors] = useState(
    allDoctors.filter((doctor) => !doctor.selected)
  );

  const addDoctor = (doctor) => {
    setDoctorsSelected([...doctorsSelected, doctor]);
    setHiddenDoctors(hiddenDoctors.filter((d) => d.id !== doctor.id));
  };

  // Function to remove a doctor from the visible list
  const removeDoctor = (doctor) => {
    setHiddenDoctors([...hiddenDoctors, doctor]);
    setDoctorsSelected(
      doctorsSelected.filter((d) => d.id !== doctor.id)
    );
  };
  return (
    <div>
      <div className=' mb-7 lgl:mb-14 '>
        <div className='flex items-center  gap-2 lg:gap-3'>
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
            className=' w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center'
          >
            <BackIcon className={'w-full h-full'} />
          </Link>
          <h2 className='text-base lg:text-[24px] font-bold '>
            التخصصات الطبية
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap-3 mdl:gap-7'>
        <Card>
          <div className='mdl:mx-2 mdl:my-7'>
            <h2 className=' mb-4 lgl:mb-8 text-[18px] lgl:text-[28px]  font-Bold'>
              الاقسام المعروضة
            </h2>
            <p className='text-center lgl:text-start text-grayDark my-3 lgl:my-8 text-sm lgl:text-xl font-Regular'>
              السحب والإفلات للأقسام لإعادة ترتيبها، قم بالضغط مطولًا
              على القسم المطلوب وسحبه إلى المكان الجديد.
            </p>
            <DoctorsContainer
              doctors={doctorsSelected}
              setDoctors={setDoctorsSelected}
              onRemoveDoctor={removeDoctor}
            />
          </div>
        </Card>
        <Card>
          <h2 className=' mb-5 mdl:mt-6 mdl:mb-14 mdl:mx-4 text-[18px] lgl:text-[28px]  font-Bold border-t-grayMedium/80 border-t-2 md:border-none pt-5'>
            الاقسام الغير معروضة
          </h2>
          <div className='flex flex-col gap-7 lgl:gap-9 mdl:my-7'>
            {hiddenDoctors.map((doctor, index) => (
              <RowDoctors
                key={index}
                title={doctor.title}
                onAdd={() => addDoctor(doctor)}
              />
            ))}
          </div>
        </Card>
        <div className='flex flex-col gap-5 mt-10 lgl:mt-14 w-full md:w-[80%]  mx-auto '>
          <Button
            variant={'secondary'}
            className=' h-[48px] lgl:h-[60px] text-sm lgl:text-xl font-Bold max-w-full  w-full'
          >
            تأكيد
          </Button>
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
            className='w-full  h-[48px] lgl:h-[60px] text-sm lgl:text-xl duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl text-[20px] font-Bold'
          >
            إلغاء
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
