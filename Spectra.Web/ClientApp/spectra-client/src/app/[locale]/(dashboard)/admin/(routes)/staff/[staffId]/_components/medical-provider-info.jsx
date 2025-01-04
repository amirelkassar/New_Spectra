'use client';

import { useRouter } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';

import { EditButton } from '@/components/buttons/edit-button';
import { EmployeeCellActions } from '../../_components/employee-cell-actions';
import { UpdateMedicalProviderInfo } from './update-medical-provider-info';

import { DoctorCareerInfo } from '@/dashboard/_components/staff/doctor-career-info';
import { DoctorPersonalInfo } from '@/dashboard/_components/staff/doctor-personal-info';
import { DoctorCertificationsInfo } from '@/dashboard/_components/staff/doctor-certifications-info';
import { DoctorSpecializationsInfo } from '@/dashboard/_components/staff/doctor-specializations-info';

export const MedicalProviderInfo = ({ data }) => {
  const isEdit = useSearchParams().get('edit') === 'true';

  const router = useRouter();

  if (isEdit)
    return <UpdateMedicalProviderInfo initialValues={data} />;

  return (
    <div className='flex-1 space-y-5'>
      <DoctorPersonalInfo data={data}>
        <EmployeeCellActions />
      </DoctorPersonalInfo>
      <DoctorCareerInfo data={data} />
      <DoctorSpecializationsInfo {...data} />
      {/* <DoctorServicesInfo data={data?.services} /> */}
      <DoctorCertificationsInfo data={data?.attachments} />
      <EditButton
        onClick={() => router.push('?edit=true')}
        className='bg-white border-2 border-black text-black w-full mdl:max-w-xs font-bold transition hover:border-greenMain'
      >
        تعديل
      </EditButton>
    </div>
  );
};
