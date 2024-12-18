'use client';

import { memo } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { CONTRACT_RATES } from '@/data';
import { useUserServices } from '@/hooks/queries/user/services';
import { useContractStore } from '@/dashboard/_hooks/use-contract-store';
import { Alert } from '@/components/alert';
import { Badge, Input } from '@/dashboard/_components/contract/ui';
import { ServicesSelect } from '@/dashboard/_components/contract/ui';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { ServiceInfo } from '@/dashboard/_components/contract/service-info';
import { DurationInput } from '@/dashboard/_components/contract/ui/duration-input';
import Card from '@/components/card';

export const ContractForm = ({ children }) => {
  return (
    <div className='space-y-5'>
      <Card className='space-y-7'>
        <ChooseFreelanceServices />

        <Freelancer />
      </Card>

      <Card className='space-y-7'>
        <ChooseSpectraServices />
        <SpectraTeam />
      </Card>

      <Card className='space-y-20'>
        <WorkDays />
        {children}
      </Card>
    </div>
  );
};

const ChooseFreelanceServices = () => {
  const t = useTranslations('contract_obj');

  const { data, isPending, isError } = useUserServices({
    pageNum: 'all',
    serviceType: 1,
    freeLancerOnly: 'true',
  });

  const selectedFreelanceIds = useContractStore(
    (s) => s.selectedFreelanceIds
  );

  const setSelectedFreelance = useContractStore(
    (s) => s.setSelectedFreelance
  );

  const removeService = useContractStore((s) => s.removeService);

  return (
    <ServicesSelect
      data={data?.data?.items}
      isLoading={isPending}
      isError={isError}
      isDataEmpty={!data?.data?.totalCount}
      selectedIds={selectedFreelanceIds}
      onSelect={setSelectedFreelance}
      onRemove={(id) => removeService(id, 'freelancer')}
      placeholder={t('select_freelance_services')}
    />
  );
};

const Freelancer = () => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  return (
    <div className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <SectionTitle>
          {t('price_of_service_as_freelancer')}
        </SectionTitle>
        <div className='flex justify-end grow gap-3 *:flex-1'>
          <Badge>
            {t('duration')}: {CONTRACT_RATES.freelancer.duration}{' '}
            {tg('min')}
          </Badge>
          <FreelancePercentageInput />
        </div>
      </div>

      <FreelanceServices />
    </div>
  );
};

const FreelancePercentageInput = () => {
  const t = useTranslations('contract_obj');

  const value = useContractStore(
    (state) => state.freelancePercentage
  );

  const onChange = useContractStore(
    (state) => state.setFreelancePercentage
  );

  return (
    <Input
      indicator='%'
      className='h-full w-full'
      placeholder={t('your_percentage')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type='number'
    />
  );
};

const MemoizedServiceInfo = memo(ServiceInfo);

export const FreelanceServices = () => {
  const tg = useTranslations('general_obj');

  const locale = useLocale();

  const freelancer = useContractStore((s) => s.freelancingServices);

  const remove = useContractStore((s) => s.removeService);

  const nameKey = locale === 'en' ? 'enName' : 'arName';
  const termsKey = locale === 'en' ? 'enTerms' : 'arTerms';

  if (!freelancer?.length)
    return <Alert>{tg('no_data_selected')}</Alert>;

  return (
    <div>
      {freelancer.map((s) => (
        <MemoizedServiceInfo
          key={s?.serviceId}
          id={s?.serviceId}
          name={s[nameKey]}
          terms={s[termsKey]}
          price={s?.serviceFees}
          employeePercentage={s?.employeePercentage}
          deletable
          onDelete={() => remove(s?.serviceId, 'freelancer')}
        />
      ))}
    </div>
  );
};

const ChooseSpectraServices = () => {
  const t = useTranslations('contract_obj');

  const { data, isPending, isError } = useUserServices({
    pageNum: 'all',
    serviceType: 1,
    spectraTeamOnly: 'true',
  });

  const selectedSpectraTeamIds = useContractStore(
    (s) => s.selectedSpectraTeamIds
  );

  const setSelectedSpectraTeam = useContractStore(
    (s) => s.setSelectedSpectraTeam
  );

  const removeService = useContractStore((s) => s.removeService);

  return (
    <ServicesSelect
      data={data?.data?.items}
      isLoading={isPending}
      isError={isError}
      isDataEmpty={!data?.data?.totalCount}
      selectedIds={selectedSpectraTeamIds}
      onSelect={setSelectedSpectraTeam}
      onRemove={(id) => removeService(id, 'spectraTeam')}
      placeholder={t('select_spectra_services')}
    />
  );
};

const SpectraTeam = () => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  return (
    <div className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <SectionTitle>
          {t('price_of_service_as_spectra')}
        </SectionTitle>
        <div className='flex justify-end grow gap-3'>
          <Badge>
            {t('duration')}: {CONTRACT_RATES.spectraTeam.duration}{' '}
            {tg('min')}
          </Badge>

          <SpectraPercentageInput />
        </div>
      </div>

      <SpectraTeamServices />
    </div>
  );
};

const SpectraPercentageInput = () => {
  const t = useTranslations('contract_obj');

  const value = useContractStore(
    (state) => state.spectraTeamPercentage
  );

  const onChange = useContractStore(
    (state) => state.setSpectraTeamPercentage
  );

  return (
    <Input
      indicator='%'
      className='h-full w-full'
      placeholder={t('your_percentage')}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type='number'
    />
  );
};

const SpectraTeamServices = () => {
  const locale = useLocale();

  const tg = useTranslations('general_obj');

  const spectraTeam = useContractStore((s) => s.spectraTeamServices);

  const remove = useContractStore((s) => s.removeService);

  if (!spectraTeam?.length)
    return <Alert>{tg('no_data_selected')}</Alert>;

  const nameKey = locale === 'en' ? 'enName' : 'arName';
  const termsKey = locale === 'en' ? 'enTerms' : 'arTerms';

  return (
    <div>
      {spectraTeam.map((s) => (
        <MemoizedServiceInfo
          key={s?.serviceId}
          id={s?.serviceId}
          name={s[nameKey]}
          terms={s[termsKey]}
          price={s?.serviceFees}
          employeePercentage={s?.employeePercentage}
          deletable
          onDelete={() => remove(s?.serviceId, 'spectraTeam')}
        />
      ))}
    </div>
  );
};

const WorkDays = () => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  const hoursOfWork = useContractStore((s) => s.hoursOfWork);

  const daysOfWork = useContractStore((s) => s.daysOfWork);

  const setHoursOfWork = useContractStore((s) => s.setHoursOfWork);

  const setDaysOfWork = useContractStore((s) => s.setDaysOfWork);

  return (
    <div className='space-y-5'>
      <DurationInput
        title={t('hours_per_day')}
        indicator='H'
        label={tg('daily')}
        value={hoursOfWork}
        onChange={setHoursOfWork}
      />

      <DurationInput
        title={t('days_per_week')}
        indicator='D'
        label={tg('weekly')}
        value={daysOfWork}
        onChange={setDaysOfWork}
      />
    </div>
  );
};
