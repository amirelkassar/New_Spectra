'use client';

import { UseMedicalProviderAside } from '../../_hooks/use-medical-provider-aside';
import { AsideCard } from '@/components/aside-card';

export const MedicalProviderAside = () => {
  const { items } = UseMedicalProviderAside();

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
