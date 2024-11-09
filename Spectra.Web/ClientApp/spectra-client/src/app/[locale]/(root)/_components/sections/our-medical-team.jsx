import {
  Container,
  Carousel,
  SectionHeading,
} from '@/guest/_components/ui';
import { TeamMember } from '../ui/team-member';
import { ShowMoreButton } from '@/components/buttons/show-more-button';
import ROUTES from '@/routes';

export const OurMedicalTeam = () => {
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
      <div className='space-y-5'>
        <div>
          <h3 className='text-center font-bold text-base mdl:text-xl'>
            اخصائيين التوحد
          </h3>
          <Carousel>
            <Carousel.Slide>
              <TeamMember />
            </Carousel.Slide>
            <Carousel.Slide>
              <TeamMember />
            </Carousel.Slide>
            <Carousel.Slide>
              <TeamMember />
            </Carousel.Slide>
            <Carousel.Slide>
              <TeamMember />
            </Carousel.Slide>
            <Carousel.Slide>
              <TeamMember />
            </Carousel.Slide>
            <Carousel.Slide>
              <TeamMember />
            </Carousel.Slide>
          </Carousel>
        </div>
        <h3 className='text-center font-bold text-base mdl:text-xl'>
          اخصائيين التغذية
        </h3>

        <Carousel>
          <Carousel.Slide>
            <TeamMember />
          </Carousel.Slide>
          <Carousel.Slide>
            <TeamMember />
          </Carousel.Slide>
          <Carousel.Slide>
            <TeamMember />
          </Carousel.Slide>
          <Carousel.Slide>
            <TeamMember />
          </Carousel.Slide>
          <Carousel.Slide>
            <TeamMember />
          </Carousel.Slide>
          <Carousel.Slide>
            <TeamMember />
          </Carousel.Slide>
        </Carousel>
      </div>
    </Container>
  );
};
