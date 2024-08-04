import Card from '@/components/card';
import { Heading } from '../../../_components/heading';
import { AddChildModal } from './add-child-modal';
import { AddClientModal } from './add-client-modal';
import Button from '@/components/button';
import EditIcon from '@/assets/icons/edit';
import Avatar from '@/components/avatar';

export const ProfileInfo = ({ data = {}, type = '' }) => {
  const isPerson = type === 'person';

  return (
    <Card>
      <Heading
        className='lg:gap-x-9 gap-x-5'
        label='ملفي'
        icon={isPerson ? <AddChildModal /> : <AddClientModal />}
      />
      <section className='my-8 flex flex-col lg:flex-row lg:items-center gap-5'>
        {/* CUSTOMER AVATAR, NAME AND EMAIL */}
        <div className='flex flex-col gap-5 justify-center items-center text-black text-sm lg:text-base'>
          {/* AVATAR */}
          <Avatar
            name={data.fullname}
            src={data.avatar}
            className='size-20 lg:size-28 rounded-full inline-flex'
          />
          <div className='text-center'>
            {/* NAME */}
            <h3 className='font-bold'>{data.fullname}</h3>
            {/* EMAIL */}
            <p>{data.email}</p>
          </div>
          {/* EDIT BUTTON */}
          <Button variant='blueLight' className='!inline-flex'>
            <EditIcon />
            تعديل
          </Button>
        </div>

        {/* CUSTOMER INFO */}
        <ul className='text-black flex-wrap gap-10 flex-1 ps-5 border-s-2 lg:border-grayLight border-transparent *:flex-[1] *:flex-shrink-0 *:basis-[30%] hidden lg:flex'>
          {isPerson && (
            <>
              <li>
                <span>رقم الهوية</span>
                <span className='font-bold block mt-5'>{data.id}</span>
              </li>
              <li>
                <span>البلد</span>
                <span className='font-bold block mt-5'>{data.country}</span>
              </li>
              <li>
                <span>المدينة</span>
                <span className='font-bold block mt-5'>{data.city}</span>
              </li>
              <li>
                <span>الوظيفة</span>
                <span className='font-bold block mt-5'>{data.profession}</span>
              </li>
              <li>
                <span>عدد الاطفال</span>
                <span className='font-bold block mt-5'>{data.childNo}</span>
              </li>
              <li>
                <span>عدد الجلسات</span>
                <span className='font-bold block mt-5'>{data.sessionsNo}</span>
              </li>
              <li>
                <span>عدد الكشوفات</span>
                <span className='font-bold block mt-5'>{data.reportsNo}</span>
              </li>
            </>
          )}

          {!isPerson && (
            <>
              <li>
                <span>البلد</span>
                <span className='font-bold block mt-5'>{data?.country}</span>
              </li>
              <li>
                <span>المدينة</span>
                <span className='font-bold block mt-5'>{data?.city}</span>
              </li>
              <li>
                <span>التخصص</span>
                <span className='font-bold block mt-5'>
                  {data?.specialization}
                </span>
              </li>
              <li>
                <span>النوع</span>
                <span className='font-bold block mt-5'>{data?.type}</span>
              </li>
              <li>
                <span>عدد العملاء</span>
                <span className='font-bold block mt-5'>{data?.clientsNo}</span>
              </li>
              <li>
                <span>عدد الجلسات</span>
                <span className='font-bold block mt-5'>{data?.sessionsNo}</span>
              </li>
              <li>
                <span>عدد الكشوفات</span>
                <span className='font-bold block mt-5'>{data?.reportsNo}</span>
              </li>
              <li>
                <span>عدد المتابعات</span>
                <span className='font-bold block mt-5'>
                  {data?.followingsNo}
                </span>
              </li>
            </>
          )}
        </ul>
      </section>
    </Card>
  );
};
