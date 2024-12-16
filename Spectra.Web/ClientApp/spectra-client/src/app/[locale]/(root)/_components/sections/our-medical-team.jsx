'use client';

import {
  Container,
  Carousel,
  SectionHeading,
} from '@/guest/_components/ui';
import { TeamMember } from '../ui/team-member';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import ROUTES from '@/routes';
import { usePublicMedicalProviders } from '@/hooks/queries/public/medical-provider';
import { QueryWrapper } from '@/components/query-wrapper';

export const OurMedicalTeam = () => {
  const query = usePublicMedicalProviders();

  return (
    <Container
      aria-label='Our Medical Team'
      aria-labelledby='our-medical-team'
      id='our-medical-team'
    >
      <div className='flex justify-between gap-5 items-center mb-10'>
        <SectionHeading id='our-medical-team'>
          فريقنا الطبي
        </SectionHeading>

        <ShowMoreButton href={ROUTES.ROOT.TEAM}>
          جميع التخصصات
        </ShowMoreButton>
      </div>

      <QueryWrapper query={query}>
        {({ data }) => <RenderTeam data={data} />}
      </QueryWrapper>
    </Container>
  );
};

const RenderTeam = ({ data }) => {
  return (
    <div className='space-y-5'>
      <div>
        {/* <h3 className='text-center font-bold text-base mdl:text-xl'>
          اخصائيين التوحد
        </h3> */}
        <Carousel>
          {data?.map((member) => (
            <Carousel.Slide key={member.id}>
              <TeamMember {...member} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      {/* <h3 className='text-center font-bold text-base mdl:text-xl'>
      اخصائيين التغذية
    </h3>

    <Carousel>
      <Carousel.Slide>
        <TeamMember />
      </Carousel.Slide>
    </Carousel> */}
    </div>
  );
};
