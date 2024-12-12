import { Link } from '@/i18n/routing';

import { TeamCard } from '@/components/team';
import ROUTES from '@/routes';

export const TeamMember = ({
  id = '',
  avatar = '',
  name = 'احمد محمد كمال',
  profession = 'اخصائى نفسي',
  rating = 4.9,
}) => {
  return (
    <Link
      href={`${ROUTES.ROOT.TEAM}/${id}`}
      className='mt-14 mdl:mt-20 block'
    >
      <TeamCard>
        <TeamCard.Avatar src={avatar} name={name} />
        <TeamCard.Name>{name}</TeamCard.Name>
        <TeamCard.Profession>{profession}</TeamCard.Profession>
        <TeamCard.Rating>{rating}</TeamCard.Rating>
      </TeamCard>
    </Link>
  );
};
