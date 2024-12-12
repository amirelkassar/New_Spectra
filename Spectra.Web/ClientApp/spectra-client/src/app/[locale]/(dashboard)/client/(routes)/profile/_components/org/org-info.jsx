import Card from '@/components/card';
import Avatar from '@/components/avatar';
import {
  Section,
  Info,
} from '@/app/[locale]/(dashboard)/client/_components/ui';
import { EditButton } from '@/components/buttons/edit-button';
import { UpdateOrgInfoModal } from './update-org-info-modal';

export const OrgInfo = ({ initialData = {} }) => {
  return (
    <Section className='pt-6' id='family-profile'>
      <Card className='flex justify-between items-center gap-5 bg-blueLighter lg:bg-white p-3 mdl:p-5'>
        <div className='space-y-1 flex items-center gap-5'>
          {/* AVATAR */}
          <Avatar
            name={initialData.fullname}
            src={initialData.avatar}
            className='size-14 mdl:size-20 rounded-full shrink-0'
          />
          <div>
            {/* NAME */}
            <Info
              value={`${initialData?.fullname} - ${initialData?.type}`}
            />

            {/* Country */}
            <Info
              value={`${initialData?.city} - ${initialData?.country}`}
              valueClassName='font-normal'
            />
            {/* EMAIL */}
            <Info
              value={initialData?.email}
              valueClassName='font-normal'
            />
          </div>
        </div>

        <Separator />

        {/* NATIONAL ID */}
        <Info
          containerClassName='hidden lg:block'
          title='رقم الهوية'
          value={initialData?.id}
        />

        <Separator />

        {/* PROFESSION */}
        <Info
          containerClassName='hidden lg:block'
          title='رقم الهاتف'
          value={initialData?.phone}
        />

        {/* EDIT BUTTON */}

        <UpdateOrgInfoModal initialData={initialData}>
          <EditButton className='text-white bg-greenMain hover:bg-greenMain/90 transition'>
            تعديل
          </EditButton>
        </UpdateOrgInfoModal>
      </Card>
    </Section>
  );
};

const Separator = () => (
  <div className='w-0.5 h-20 bg-grayDark/20 hidden lg:block' />
);
