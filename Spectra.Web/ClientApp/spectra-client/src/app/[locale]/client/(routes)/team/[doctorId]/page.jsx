import { Container } from '@/client/_components/ui';
import { MedicalTeamData } from '@/lib/demoData';
import { Intro } from './_components/intro';
import { CareerDescription } from './_components/career-description';
import { Certifications } from './_components/certifications';
import { Reviews } from './_components/reviews';
import { Specializations } from './_components/specializations';

const ViewDoctorPage = ({ params: { doctorId } }) => {
  const doctor = MedicalTeamData.find(
    (doctor) => doctor.id === doctorId
  );

  return (
    <Container className='space-y-5'>
      <Intro data={doctor} />
      <CareerDescription data={doctor.career} />
      <Specializations data={doctor.specializations} />
      <Certifications data={doctor.certificates} />
      <Reviews data={doctor.reviews} />
    </Container>
  );
};

export default ViewDoctorPage;
