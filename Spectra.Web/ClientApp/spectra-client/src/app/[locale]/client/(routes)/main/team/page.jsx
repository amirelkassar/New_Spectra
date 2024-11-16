import Card from '@/components/card';
import { TeamMember } from '../_components/team-member';
import {
  BackButton,
  H1,
  Container,
} from '@/client/_components/ui';

const TeamPage = () => {
  return (
    <Container>
      <section>
        <Card className='space-y-5'>
          {/* Section Heading */}
          <div className='flex items-center gap-5'>
            <BackButton />
            <H1>التخصصات الطبية</H1>
          </div>

          {/* Autism Specialists */}
          <div className='space-y-7'>
            <h2 className='text-sm lg:text-xl text-black font-bold'>
              اخصائيين التوحد
            </h2>

            <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-y-20 py-10 gap-x-5'>
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <TeamMember key={'team' + index} />
                ))}
            </div>
          </div>

          {/* Nutrition Specialists */}

          <div className='space-y-7'>
            <h2 className='text-sm lg:text-xl text-black font-bold'>
              اخصائيين التغذية
            </h2>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-y-20 py-10 gap-x-5'>
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <TeamMember key={'team' + index} />
                ))}
            </div>
          </div>
        </Card>
      </section>
    </Container>
  );
};

export default TeamPage;
