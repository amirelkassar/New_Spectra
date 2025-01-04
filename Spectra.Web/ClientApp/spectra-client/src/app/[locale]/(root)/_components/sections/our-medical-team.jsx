'use client';

import { useTranslations } from 'next-intl';

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
import { useMediaQuery } from '@mantine/hooks';

export const OurMedicalTeam = () => {
  const tg = useTranslations('general_obj');

  const query = usePublicMedicalProviders();

  return (
    <Container
      aria-label='Our Medical Team'
      aria-labelledby='our-medical-team'
      id='our-medical-team'
    >
      <div className='flex justify-between gap-5 items-center mb-10'>
        <SectionHeading className='capitalize' id='our-medical-team'>
          {tg('our_medical_team')}
        </SectionHeading>

        <ShowMoreButton
          className='capitalize'
          href={ROUTES.ROOT.TEAM}
        >
          {tg('all_specialties')}
        </ShowMoreButton>
      </div>

      <QueryWrapper query={query}>
        {({ data }) => <RenderTeam data={data} />}
      </QueryWrapper>
    </Container>
  );
};

const RenderTeam = ({ data }) => {
  const match = useMediaQuery('(min-width: 768px)');

  return (
    <div className='space-y-5'>
      <div>
        {/* <h3 className='text-center font-bold text-base mdl:text-xl'>
          اخصائيين التوحد
        </h3> */}
        <Carousel
          withIndicators={false}
          slideSize={{ base: '50%', md: '33.3333%' }}
          withControls={match}
        >
          {data?.map((member) => (
            <Carousel.Slide
              className='mt-14 mdl:mt-20 pb-2'
              key={member.id}
            >
              <TeamMember className='h-full !m-0' {...member} />
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
