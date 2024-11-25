import { BackButton } from '@/components/buttons/back-button';
import { UpdateSpecialty } from '../_components/update-specialty';

function Page({ params }) {
  const doctorsSpecialtiesID = params?.doctorsSpecialtiesID;

  return (
    <div className='space-y-10'>
      <div className='flex items-center gap-4 md:gap-0'>
        <BackButton />
        <h2 className='headTitleDash'>تعديل تخصص</h2>
      </div>

      <UpdateSpecialty id={doctorsSpecialtiesID} />
    </div>
  );
}

export default Page;
