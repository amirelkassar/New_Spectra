'use client';

import { AsideCard } from '@/components/aside-card';
import { UseProfileAside } from '../_hooks/use-profile-aside';
import { useProfile } from '@/hooks/queries/user/profile';

export const ProfileAside = () => {
  const jobType = useProfile().data?.data?.jobType;

  const { items } = UseProfileAside({ jobType });

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
