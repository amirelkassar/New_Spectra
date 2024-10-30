import { FilterTeam } from './filter-team';
import { SortTeam } from './sort-team';

export const TableActions = () => {
  return (
    <div className='space-y-5 mdl:space-y-0 lg:grid lg:grid-cols-4 lg:gap-10 items-center'>
      <FilterTeam />

      <SortTeam />
    </div>
  );
};
