import { Container } from '@/app/[locale]/(dashboard)/client/_components/ui';
import { FileUpload } from './_components/file-upload';
import { Payment } from './_components/payment';
import { AppointmentInfo } from './_components/appointment-info';
import { MedicalTeamData } from '@/lib/demoData';
import { PickDateAndAvailableTime } from './_components/pick-date-and-available-time';
import { Notes } from './_components/notes';
import { ConfirmAppointment } from './_components/confirm-appointment';

const BookAppointmentPage = ({ params: { doctorId } }) => {
  const doctor = MedicalTeamData.find(
    (doctor) => doctor.id === doctorId
  );

  return (
    <Container>
      <AppointmentInfo data={doctor} />
      <PickDateAndAvailableTime />
      <Notes />
      <FileUpload />
      <Payment />
      <ConfirmAppointment />
    </Container>
  );
};

export default BookAppointmentPage;
