import BackIcon from '@/assets/icons/back-black';
import Card from '@/components/card';
import { Link } from '@/navigation';
import ROUTES from '@/routes';
import Container from '../../_components/container';
import { Heading } from '../../_components/heading';
import { TeamMember } from '../_components/team-member';

const TeamPage = () => {
  return (
    <Container>
      <section>
        <Card className='space-y-5'>
          {/* Section Heading */}
          <Heading
            label='التخصصات الطبية'
            icon={
              <Link href={ROUTES.CLIENT.MAIN.HOME}>
                <BackIcon className='ltr:rotate-180' />
              </Link>
            }
            className='flex-row-reverse justify-end gap-5'
          />

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
