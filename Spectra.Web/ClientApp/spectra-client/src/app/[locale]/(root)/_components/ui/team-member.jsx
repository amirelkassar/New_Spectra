import { TeamCard } from '@/components/team';

export const TeamMember = ({
  avatar = '',
  name = 'احمد محمد كمال',
  profession = 'اخصائى نفسي',
  rating = 4.9,
}) => {
  return (
    <TeamCard>
      <TeamCard.Avatar src={avatar} name={name} />
      <TeamCard.Name>{name}</TeamCard.Name>
      <TeamCard.Profession>
        {profession}
      </TeamCard.Profession>
      <TeamCard.Rating>{rating}</TeamCard.Rating>
    </TeamCard>
  );
};
