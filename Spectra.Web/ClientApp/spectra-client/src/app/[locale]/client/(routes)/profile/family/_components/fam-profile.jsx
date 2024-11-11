import Card from '@/components/card';
import Avatar from '@/components/avatar';
import { H1, Section, Info } from '@/client/_components/ui';
import { EditButton } from '@/components/buttons/edit-button';
import { EditFamProfileModal } from './edit-fam-profile-modal';
import { AddChild } from './add-child';

export const FamProfile = ({ initialData = {} }) => {
  return (
    <Section id='family-profile' className='mdl:pt-0'>
      <Card>
        <div className='flex flex-col lg:flex-row lg:items-center gap-y-5 gap-x-10 mb-10'>
          <H1 id='family-profile'>ملفي</H1>

          <AddChild />
        </div>
        <div className='space-y-5 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-5 lg:items-center'>
          {/* CUSTOMER AVATAR, NAME AND EMAIL */}
          <div className='text-sm mdl:text-base text-center col-span-3'>
            {/* AVATAR */}
            <Avatar
              name={initialData.fullname}
              src={initialData.avatar}
              className='size-20 mdl:size-28 rounded-full flex mx-auto mb-5'
            />

            {/* NAME */}
            <Info value={initialData?.fullname} />

            {/* EMAIL */}
            <Info
              value={initialData?.email}
              valueClassName='font-normal mt-1'
            />
          </div>

          {/* CUSTOMER INFO */}
          <div className='col-span-9 border-t-2 lg:border-t-0 pt-5 lg:pt-0 lg:border-s-2 border-grayLight lg:ps-7 grid grid-cols-2 lg:grid-cols-3 gap-7'>
            <Info
              title='رقم الهوية'
              value={initialData?.id}
            />

            <Info
              title='البلد'
              value={initialData?.country}
            />

            <Info
              title='المدينة'
              value={initialData?.city}
            />

            <Info
              title='الوظيفة'
              value={initialData?.profession}
            />
          </div>

          {/* EDIT BUTTON */}
          <EditFamProfileModal
            className='col-span-3 w-full'
            initialData={initialData}
          >
            <EditButton className='w-full max-w-52 flex mx-auto py-3 mt-10 lg:mt-0'>
              تعديل
            </EditButton>
          </EditFamProfileModal>
        </div>
      </Card>
    </Section>
  );
};
