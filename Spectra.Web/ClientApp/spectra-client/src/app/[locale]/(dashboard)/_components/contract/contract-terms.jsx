'use client';

import { useDate } from '@/hooks/use-date';
import { useLocale } from 'next-intl';
import { useContractTermsStore } from '../../_hooks/use-contract-terms-store';

export const ContractTerms = () => {
  const locale = useLocale();

  const today = new Date();

  const { fullYearWithMonthName } = useDate(today.toISOString());

  const infoSection =
    useContractTermsStore((s) => s.infoSection) || {};
  const sections = useContractTermsStore((s) => s.sections) || [];
  // const doctorSignaturePath = terms.doctorSignaturePath || '';
  // const adminSignaturePath = terms.adminSignaturePath || '';
  // const headSignaturePath = terms.headSignaturePath || '';

  const nameKey = locale === 'en' ? 'arName' : 'arName';
  const dateKey = locale === 'en' ? 'arDate' : 'arDate';
  const titleKey = locale === 'en' ? 'arTitle' : 'arTitle';
  const pointsKey = locale === 'en' ? 'arPoints' : 'arPoints';
  // const descriptionKey =
  //   locale === 'en' ? 'enDescription' : 'arDescription';

  return (
    <div className='text-sm mdl:text-xl space-y-5'>
      <div>
        <p>
          {infoSection[dateKey]} {fullYearWithMonthName}
        </p>
        <p>{infoSection[nameKey]}</p>
      </div>

      {!!sections.length &&
        sections.map((section, i) => (
          <div className='space-y-2' key={section?.id || i}>
            {section[titleKey] && (
              <h3 className='font-bold'>{section[titleKey]}</h3>
            )}
            <ul className='list-disc ps-5 space-y-1'>
              {section[pointsKey]?.map(
                (point, i) => !!point && <li key={i}>{point}</li>
              )}
            </ul>
          </div>
        ))}
    </div>
  );
};
