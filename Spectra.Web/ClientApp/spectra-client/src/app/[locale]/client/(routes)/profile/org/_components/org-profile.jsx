import Card from '@/components/card';
import Avatar from '@/components/avatar';
import { EditButton } from '@/components/buttons/edit-button';
import { AddClientModal } from './add-client-modal';
import { EditOrgProfileModal } from './edit-org-profile-modal';
import { H1 } from '../../../../_components/ui/h1';
import { Info } from '../../../../_components/ui/info';

export const OrgProfile = ({ initialData = {} }) => {
  return (
    <section className='!mb-14 lg:!mb-0 relative'>
      <Card>
        <H1 className='lg:gap-x-9 gap-x-5'>
          ملفي
          <AddClientModal />
        </H1>

        <div className='my-8 flex flex-col lg:flex-row lg:items-center gap-5'>
          {/* CUSTOMER AVATAR, NAME AND EMAIL */}
          <div className='flex flex-col gap-5 justify-center items-center text-black text-sm lg:text-base'>
            {/* AVATAR */}
            <Avatar
              name={initialData.fullname}
              src={initialData.avatar}
              className='size-20 lg:size-28 rounded-full inline-flex'
            />

            <div className='text-center space-y-1'>
              {/* NAME */}
              <Info value={initialData?.fullname} />

              {/* EMAIL */}
              <Info
                value={initialData?.email}
                valueClassName='font-normal'
              />
            </div>

            {/* EDIT BUTTON */}
            <EditOrgProfileModal initialData={initialData}>
              <EditButton className='absolute lg:relative bottom-0 right-1/2 translate-x-1/2 ltr:-translate-x-1/2 translate-y-full lg:translate-y-0 lg:translate-x-0 lg:bottom-auto lg:right-auto w-full max-w-44 mdl:max-w-60 lg:max-w-44'>
                تعديل
              </EditButton>
            </EditOrgProfileModal>
          </div>

          {/* CUSTOMER INFO */}
          <div className='text-black gap-3 mdl:gap-10 flex-1 mdl:ps-5 lg:border-s-2 lg:border-grayLight grid grid-cols-2 mdl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
            <Info
              title='البلد'
              value={initialData?.country}
            />

            <Info
              title='المدينة'
              value={initialData?.city}
            />

            <Info
              title='التخصص'
              value={initialData?.specialization}
            />

            <Info title='النوع' value={initialData?.type} />

            <Info
              title='عدد العملاء'
              value={initialData?.clientsNo}
            />
            <Info
              title='عدد الجلسات'
              value={initialData?.sessionsNo}
            />
            <Info
              title='عدد الكشوفات'
              value={initialData?.reportsNo}
            />
          </div>
        </div>
      </Card>
    </section>
  );
};
