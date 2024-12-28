'use client';

import { AsideCard } from '@/components/aside-card';
import { useViewTeamAside } from '../../_hooks/use-view-team-aside';

export const ViewTeamAside = () => {
  const { items } = useViewTeamAside();

  return (
    <AsideCard>
      <AsideCard.Ul>
        {items.map(
          (i) =>
            i.show && (
              <AsideCard.List
                key={i.name}
                href={i.route}
                aria-pressed={i.isActive}
              >
                {i.name}
              </AsideCard.List>
            )
        )}
      </AsideCard.Ul>
    </AsideCard>
  );
};
