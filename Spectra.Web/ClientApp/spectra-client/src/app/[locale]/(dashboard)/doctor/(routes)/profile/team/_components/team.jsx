'use client';

import { QueryWrapper } from '@/components/query-wrapper';
import { DoctorBadge } from '@/components/team';
import { useLocale } from 'next-intl';
import { useProfile } from '@/hooks/queries/user/profile';
import { useImagePath } from '@/hooks/use-image-path';
import Card from '@/components/card';
import ADHD from '@/assets/icons/adhd';

export const Team = () => {
  const query = useProfile();
  return (
    <QueryWrapper query={query}>
      {({ data }) => (
        <RenderTeam jobType={data?.jobType} team={data?.team} />
      )}
    </QueryWrapper>
  );
};

const RenderTeam = ({ jobType = '', team = [] }) => {
  if (String(jobType) !== '1') return null;

  return (
    <Card className='h-full' title='الفريق الطبي'>
      {!!team?.length ? (
        <div>
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
    </Card>
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
