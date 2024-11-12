import Card from '@/components/card';
import Avatar from '@/components/avatar';
import { Section, Info } from '@/client/_components/ui';
import { EditButton } from '@/components/buttons/edit-button';
import { EditFamProfileModal } from './edit-fam-profile-modal';

export const ProfileInfo = ({ initialData = {} }) => {
  return (
    <Section id='family-profile' className='mdl:pt-0'>
      <Card className='flex items-center gap-5'>
        {/* AVATAR */}
        <Avatar
          name={initialData.fullname}
          src={initialData.avatar}
          className='size-14 mdl:size-20 rounded-full shrink-0'
        />

        <div className='text-sm mdl:text-base flex-1 space-y-2'>
          {/* NAME */}
          <Info value={initialData?.fullname} />

          {/* Country */}
          <Info
            value={initialData?.country}
            valueClassName='font-normal'
          />
          {/* EMAIL */}
          <Info
            value={initialData?.email}
            valueClassName='font-normal'
          />
        </div>

        {/* EDIT BUTTON */}
        <EditFamProfileModal initialData={initialData}>
          <EditButton className='text-white bg-greenMain hover:bg-greenMain/90 transition'>
            تعديل
          </EditButton>
        </EditFamProfileModal>
      </Card>
    </Section>
  );
};
