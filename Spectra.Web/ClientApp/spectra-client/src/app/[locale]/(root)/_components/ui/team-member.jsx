import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

import { TeamCard } from '@/components/team';
import ROUTES from '@/routes';
import { useImagePath } from '@/hooks/use-image-path';
import { cn } from '@/lib/utils';

export const TeamMember = ({
  id = '',
  userImage = '',
  firstName = '',
  lastName = '',
  mainSpecializationEnName = '',
  mainSpecializationArName = '',
  emailaddress = '',
  rating = 0,
  className = '',
}) => {
  const locale = useLocale();

  const path = useImagePath(userImage);

  const profession =
    locale === 'ar'
      ? mainSpecializationArName
      : mainSpecializationEnName;

  const name = `${firstName} ${lastName || ''}`;

  return (
    <Link
      href={`${ROUTES.ROOT.TEAM}/${id}`}
      className={cn('mt-14 mdl:mt-20 block', className)}
    >
      <TeamCard className={'h-full'}>
        <TeamCard.Avatar src={path} name={emailaddress} />
        <TeamCard.Name>{name}</TeamCard.Name>
        <TeamCard.Profession>{profession}</TeamCard.Profession>
        <TeamCard.Rating>{rating}</TeamCard.Rating>
      </TeamCard>
    </Link>
  );
};
