'use client';

import { ContractA4 } from '@/dashboard/_components/contract/contract-a4';
import Card from '@/components/card';
import { Divider } from '@mantine/core';
import { useAdminStaffContract } from '@/hooks/queries/admin/staff/contract';
import { QueryWrapper } from '@/components/query-wrapper';
import { useStaffById } from '@/hooks/queries/admin/staff/staff';
import { CONTRACT_STATE, VERSION_STATE } from '@/data';

export const Contract = ({ id }) => {
  const ContractQuery = useAdminStaffContract(id);
  const { data: employeeData } = useStaffById(id);

  return (
    <Card className='overflow-auto'>
      <QueryWrapper query={ContractQuery}>
        {({ data }) => (
          <ContractContent
            contractData={data}
            employeeData={employeeData?.data}
          />
        )}
      </QueryWrapper>
    </Card>
  );
};

const ContractContent = ({
  contractData = {},
  employeeData = {},
}) => {
  const state = contractData?.contractState || 0;

  if (state !== CONTRACT_STATE.accepted) return null;

  const activeVersion = contractData?.versions?.find(
    (version) => version.state === VERSION_STATE.active
  );

  if (!activeVersion) return null;

  const name = `${employeeData?.firstName} ${
    employeeData?.lastName || ''
  }`;
  const phone = employeeData?.phoneNumber || '';
  const license = employeeData?.licenseNumber || '';
  const email = employeeData?.emailaddress || '';
  const nationalId = employeeData?.nationalId || '';
  const specialization = employeeData?.mainSpecializationArName || '';

  const freelancingPercentage =
    activeVersion?.freelancingPercentage || 0;
  const freelancingDuration = activeVersion?.freelancingDuration || 0;
  const spectraTeamPercentage =
    activeVersion?.spectraTeamPercentage || 0;
  const spectraTeamDuration = activeVersion?.spectraTeamDuration || 0;
  const freelancingServices =
    activeVersion?.freelancingServices || [];
  const spectraTeamServices =
    activeVersion?.spectraTeamServices || [];

  const infoSection = contractData?.infoSection || {};
  const contractTerms = contractData?.sections || [];

  return (
    <div className='space-y-5'>
      <ContractA4>
        <Info
          name={name}
          phone={phone}
          license={license}
          nationalId={nationalId}
          email={email}
          specialization={specialization}
        />

        <Divider my='lg' className='border-grayDark' />

        {!!freelancingServices?.length && (
          <>
            <div className='space-y-10'>
              <ServiceType
                type='freelance'
                percentage={freelancingPercentage}
                duration={freelancingDuration}
              />

              <ul className='list-decimal list-inside space-y-5'>
                {freelancingServices?.map((s, i) => (
                  <Service
                    key={s?.serviceId || i}
                    name={s?.arName}
                    price={s?.serviceFees}
                    net={s?.employeeFees}
                    terms={s?.arTerms}
                  />
                ))}
              </ul>
            </div>

            <Divider my='lg' className='border-grayDark' />
          </>
        )}

        {!!spectraTeamServices?.length && (
          <div className='space-y-10'>
            <ServiceType
              type='spectra'
              percentage={spectraTeamPercentage}
              duration={spectraTeamDuration}
            />

            <ul className='list-decimal list-inside space-y-5'>
              {spectraTeamServices?.map((s, i) => (
                <Service
                  key={s?.serviceId || i}
                  name={s?.arName}
                  price={s?.serviceFees}
                  net={s?.employeeFees}
                  terms={s?.arTerms}
                />
              ))}
            </ul>
          </div>
        )}
      </ContractA4>

      <ContractA4>
        {!!contractTerms.length && (
          <div className='space-y-5 page-break print:pt-[164px]'>
            <div>
              <p>{infoSection?.arDate}</p>
              <p>{infoSection?.arName}</p>
            </div>

            {contractTerms.map((section, i) => (
              <div className='space-y-2' key={section?.id || i}>
                {section?.arTitle && (
                  <h3 className='font-bold'>{section?.arTitle}</h3>
                )}
                <ul className='list-disc ps-5 space-y-1'>
                  {section?.arPoints?.map(
                    (point, i) => !!point && <li key={i}>{point}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
      </ContractA4>
    </div>
  );
};

const Info = ({
  name = '',
  phone = '',
  license = '',
  nationalId = '',
  email = '',
  specialization = '',
}) => {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <div className='space-y-2'>
        <p>الطبيب: {name}</p>
        <p>
          رقم الهاتف: <span dir='ltr'>+{phone}</span>
        </p>
        <p>رقم الرخصة: {license}</p>
      </div>
      <div className='space-y-2'>
        <p>رقم الهوية: {nationalId}</p>
        <p>البريد الالكترونى: {email}</p>
        <p>التخصص: {specialization}</p>
      </div>
    </div>
  );
};

const ServiceType = ({
  type = '',
  percentage = '',
  duration = '',
}) => {
  return (
    <div className='flex items-center justify-evenly'>
      <p className='font-bold underline'>
        {type === 'freelance'
          ? 'طبيب مستقل:'
          : 'طبيب فرد من فريق سبيكترا:'}
      </p>
      <p className='underline'>
        نسبة الطبيب:{' '}
        <span className='font-bold' dir='ltr'>
          {percentage}%
        </span>
      </p>
      <p className='underline'>
        المدة: <span className='font-bold'>{duration} دقيقة</span>
      </p>
    </div>
  );
};

const Service = ({ name = '', price = '', net = '', terms = '' }) => {
  return (
    <li className='space-y-2'>
      <div className='inline-block *:inline-block'>
        <span className='w-[300px] text-wrap'>{name}</span>
        <span className='font-bold ms-10'>{price} SAR</span>
        <span className='ms-20'>
          صافي الدخل: <span className='font-bold'>{net} SAR</span>
        </span>
      </div>
      <div>
        <span className='text-grayDark'>الشروط والاحكام: </span>
        {terms}
      </div>
    </li>
  );
};
