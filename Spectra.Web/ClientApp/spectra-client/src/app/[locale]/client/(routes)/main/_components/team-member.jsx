import { Link } from '@/navigation';

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
      href={ROUTES.CLIENT.TEAM.VIEW_DOCTOR.replace(
        ':id',
        id
      )}
      className='block'
    >
      <TeamCard>
        <TeamCard.Avatar src={avatar} name={name} />
        <TeamCard.Name>{name}</TeamCard.Name>
        <TeamCard.Profession>
          {profession}
        </TeamCard.Profession>
        <TeamCard.Rating>{rating}</TeamCard.Rating>
      </TeamCard>
    </Link>
  );
};
