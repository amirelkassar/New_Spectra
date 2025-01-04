'use client';

import { UseMainDataAside } from '../_hooks/use-main-data-aside';
import { AsideCard } from '@/components/aside-card';

const MainDataAside = () => {
  const { items } = UseMainDataAside();

  return (
    <AsideCard>
      <AsideCard.Ul>
        {items.map((i) => (
          <AsideCard.List
            key={i.name}
            href={i.route}
            aria-pressed={i.isActive}
          >
            {i.name}
          </AsideCard.List>
        ))}
      </AsideCard.Ul>
    </AsideCard>
  );
};

export default MainDataAside;
