import { Section } from '@/app/[locale]/(dashboard)/client/_components/ui';
import { FilterTeam } from './filter-team';
import { SortTeam } from './sort-team';

export const TableActions = () => {
  return (
    <Section
      id='table-actions'
      className='space-y-5 mdl:space-y-0 lg:grid lg:grid-cols-4 lg:gap-10 items-center pt-0'
    >
      <FilterTeam />

      <SortTeam />
    </Section>
  );
};
