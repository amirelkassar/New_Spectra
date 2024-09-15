import Image from 'next/image';
import { Section } from '../../_components/section';
import CheckHeartIcon from '@/assets/icons/check-heart';

export const Licenses = () => {
  return (
    <Section
      aria-label='Licenses'
      aria-labelledby='licenses'
      id='licenses'
    >
      <div className='flex flex-col items-center justify-center gap-5 *:flex-1 mdl:flex-row'>
        <h2 className='text-base mdl:text-2xl font-bold'>
          كوادرنا الصحية مرخصة لدى الهيئة السعودية للتخصصات
          الطبية
        </h2>
        <div className='relative'>
          <Image
            src='https://s3-alpha-sig.figma.com/img/b52c/08fb/57de2a092a4b129f4f43a7eaf827e3d5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MVNp11viaFpgHllwbD2-mUxclSbLghiyMnMoANcA9dQMBXwRYo0p7zScJO4DY8wY~cUmTUqXeMdk1JWjIAVXgebuvWB4iWWF4ke~OkVsVps65wfxZYemiuNkP3x-lsPeKHbjP24TQvftMq-jMJ5KYwamVF6gBphS3x4SCFDzxJfsOdmfi5f-ZN6J9bzKIo0T1Z2hNjqhlP4rtjqW0UFcQ6m27W19RyHn9UvTcEpJ13kYIl5SsGzX6TiCp32UnKn1D2yAT1iSzrZ1soEui0kZHeaZGaMAJEmO4vGVdl7V9NoxPSD1GPHw3kdJRbqbExQsFSKT~VZ4m1BcN~A33istyg__'
            width={530}
            height={274}
            className='w-full h-full object-cover object-center'
            alt='Saudi Commission for Health Specialties'
          />
          <span className='absolute block top-1/2 start-0 -translate-y-1/2'>
            <CheckHeartIcon className='mdl:size-11 size-8' />
          </span>
        </div>
      </div>
    </Section>
  );
};
