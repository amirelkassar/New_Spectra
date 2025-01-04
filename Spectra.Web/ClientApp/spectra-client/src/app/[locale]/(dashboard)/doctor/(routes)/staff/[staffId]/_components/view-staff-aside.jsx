'use client';

import { AsideCard } from '@/components/aside-card';
import { useViewStaffAside } from '../../_hooks/use-view-staff-aside';

export const ViewStaffAside = () => {
  const { items } = useViewStaffAside();

  if (items?.length > 1)
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
