'use client';

import { useLocale } from 'next-intl';

import { DoctorBadge } from '@/components/team';
import { useGroupMembers } from '@/hooks/queries/admin/staff/team';
import { QueryWrapper } from '@/components/query-wrapper';
import { useImagePath } from '@/hooks/use-image-path';
import { useDeleteMember } from '../_hooks/use-delete-member';
import DeleteIcon from '@/assets/icons/delete';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { AddTeamModal } from './add-team-modal';
import Card from '@/components/card';

export const Team = ({ ownerId }) => {
  const query = useGroupMembers({ ownerId });

  const { onDelete } = useDeleteMember({ ownerId });

  return (
    <Card className='space-y-10'>
      <div className='flex items-center gap-5'>
        <SectionTitle>الفريق الطبي</SectionTitle>
        <AddTeamModal />
      </div>
      <QueryWrapper query={query}>
        {({ data }) => (
          <div className='flex flex-wrap gap-4 *:shrink-0'>
            {data?.map((member) => (
              <TeamMember
                onDelete={onDelete}
                key={member.id}
                {...member}
              />
            ))}
          </div>
        )}
      </QueryWrapper>
    </Card>
  );
};

const TeamMember = ({
  id = '',
  firstName = '',
  lastName = '',
  mainSpecializationArName = '',
  mainSpecializationEnName = '',
  userImage = '',
  rate = '',
  onDelete = () => {},
}) => {
  const locale = useLocale();

  const path = useImagePath(userImage);

  const profession =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  return (
    <div
      data-id={id}
      id='team-member'
      className='flex items-start gap-2 h-auto'
    >
      <DoctorBadge
        name={`${firstName} ${lastName}`}
        profession={profession}
        rate={rate}
        avatar={path}
        className='h-full'
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDelete(id);
        }}
        type='button'
        className='border-red duration-200 hover:shadow-md border rounded-md w-9 md:w-12 h-9 md:h-12 flex items-center justify-center'
      >
        <DeleteIcon className='w-4 md:w-5 h-auto' />
      </button>
    </div>
  );
};
