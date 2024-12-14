'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DoctorBadge } from '@/components/team';
import { useLocale } from 'next-intl';
import { useImagePath } from '@/hooks/use-image-path';
import { useProfileEmployeeGroups } from '@/hooks/queries/user/employee-groups';
import Card from '@/components/card';
import ADHD from '@/assets/icons/adhd';

export const Team = () => {
  const query = useProfileEmployeeGroups();
  return (
    <Card className='h-full space-y-5' title='الفريق الطبي'>
      <QueryWrapper query={query}>
        {({ data }) => <RenderTeam team={data} />}
      </QueryWrapper>
    </Card>
  );
};

const RenderTeam = ({ team = [] }) => {
  return (
    <>
      {!!team?.length ? (
        <div className='flex gap-4 flex-wrap *:shrink-0'>
          {team.map((member) => (
            <TeamMember key={member?.id} {...member} />
          ))}
        </div>
      ) : (
        <p className='text-grayDark'>
          <ADHD className='size-4 inline-block me-2' />
          لا يوجد فريق طبي
        </p>
      )}
    </>
  );
};

const TeamMember = ({
  firstName = '',
  lastName = '',
  mainSpecializationArName = '',
  mainSpecializationEnName = '',
  userImage = '',
  rate = '',
}) => {
  const locale = useLocale();

  const path = useImagePath(userImage);

  const profession =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  return (
    <DoctorBadge
      name={`${firstName} ${lastName}`}
      profession={profession}
      rate={rate}
      avatar={path}
      className='h-full'
    />
  );
};
