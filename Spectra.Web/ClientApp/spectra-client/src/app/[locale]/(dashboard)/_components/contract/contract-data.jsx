'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Alert } from '@/components/alert';
import { Badge } from '@/dashboard/_components/contract/ui';
import { SectionTitle } from '@/dashboard/_components/ui/section-title';
import { ServiceInfo } from '@/dashboard/_components/contract/service-info';
import { DurationInput } from '@/dashboard/_components/contract/ui/duration-input';
import Card from '@/components/card';

export const ContractData = ({
  freelancingServices = [],
  spectraTeamServices = [],
  hoursOfWork = '',
  daysOfWork = '',
  children,
}) => {
  return (
    <div className='space-y-5'>
      <Freelancer services={freelancingServices} />

      <SpectraTeam services={spectraTeamServices} />

      <Card className='space-y-20'>
        <WorkDays hoursOfWork={hoursOfWork} daysOfWork={daysOfWork} />
        {children}
      </Card>
    </div>
  );
};

const Freelancer = ({ services = [] }) => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  const employeePercentage = services?.[0]?.employeePercentage;
  const duration = services?.[0]?.duration;

  return (
    <Card className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <SectionTitle>
          {t('price_of_service_as_freelancer')}
        </SectionTitle>
        <div className='flex justify-end grow gap-3 *:flex-1'>
          <Badge>
            {t('duration')}: {duration} {tg('min')}
          </Badge>
          <Badge>
            {t('your_share')}: {employeePercentage} %
          </Badge>
        </div>
      </div>

      <FreelanceServices freelancer={services} />
    </Card>
  );
};

export const FreelanceServices = ({ freelancer = [] }) => {
  const tg = useTranslations('general_obj');

  const locale = useLocale();

  const nameKey = locale === 'en' ? 'enName' : 'arName';

  const termsKey = locale === 'en' ? 'enTerms' : 'arTerms';

  if (!freelancer?.length)
    return <Alert>{tg('no_data_selected')}</Alert>;

  return (
    <div>
      {freelancer.map((s) => (
        <ServiceInfo
          key={s?.serviceId}
          id={s?.serviceId}
          name={s[nameKey]}
          terms={s[termsKey]}
          price={s?.serviceFees}
          employeePercentage={s?.employeePercentage}
        />
      ))}
    </div>
  );
};

const SpectraTeam = ({ services = [] }) => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  const employeePercentage = services?.[0]?.employeePercentage;
  const duration = services?.[0]?.duration;

  return (
    <Card className='space-y-5'>
      <div className='flex flex-wrap gap-3 items-center'>
        <SectionTitle>
          {t('price_of_service_as_spectra')}
        </SectionTitle>
        <div className='flex justify-end grow gap-3'>
          <Badge>
            {t('duration')}: {duration} {tg('min')}
          </Badge>
          <Badge>
            {t('your_share')}: {employeePercentage} %
          </Badge>
        </div>
      </div>

      <SpectraTeamServices spectraTeam={services} />
    </Card>
  );
};

const SpectraTeamServices = ({ spectraTeam = [] }) => {
  const locale = useLocale();

  const tg = useTranslations('general_obj');

  if (!spectraTeam?.length)
    return <Alert>{tg('no_data_selected')}</Alert>;

  const nameKey = locale === 'en' ? 'enName' : 'arName';
  const termsKey = locale === 'en' ? 'enTerms' : 'arTerms';

  return (
    <div>
      {spectraTeam.map((s) => (
        <ServiceInfo
          key={s?.serviceId}
          id={s?.serviceId}
          name={s[nameKey]}
          terms={s[termsKey]}
          price={s?.serviceFees}
          employeePercentage={s?.employeePercentage}
        />
      ))}
    </div>
  );
};

const WorkDays = ({ hoursOfWork = '', daysOfWork = '' }) => {
  const t = useTranslations('contract_obj');
  const tg = useTranslations('general_obj');

  return (
    <div className='space-y-5'>
      <DurationInput
        title={t('hours_per_day')}
        indicator='H'
        label={tg('daily')}
        value={hoursOfWork}
        readOnly
      />

      <DurationInput
        title={t('days_per_week')}
        indicator='D'
        label={tg('weekly')}
        value={daysOfWork}
        readOnly
      />
    </div>
  );
};
