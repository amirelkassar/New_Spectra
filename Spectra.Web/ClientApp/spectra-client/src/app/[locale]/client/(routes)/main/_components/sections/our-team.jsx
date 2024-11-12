import { TeamMember } from '../team-member';
import {
  Section,
  SectionTitle,
} from '@/client/_components/ui';
import { ShowMoreButton } from '@/components/buttons/show-more-button';

export const OurTeam = ({ data = [] }) => {
  if (!data.length) return null;
  return (
    <Section id='our-team'>
      <div className='flex items-center justify-between mb-5'>
        <SectionTitle id='our-team'>
          تعرف علي فريقنا
        </SectionTitle>
        <ShowMoreButton>جميع التخصصات</ShowMoreButton>
      </div>

      <div className='grid grid-cols-2 sml:grid-cols-fill-200 gap-y-20 gap-x-5 pt-10 mdl:pt-14'>
        {data?.map((t) => (
          <TeamMember key={t.id} {...t} />
        ))}
      </div>
    </Section>
  );
};
