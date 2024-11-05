'use client';

import { useRouter } from '@/navigation';

import ROUTES from '@/routes';
import { ServiceCard } from './service-card';

export const Service = ({
  label = '',
  icon = '',
  color = '',
  description = '',
  id = '',
  subscribed = false,
}) => {
  const router = useRouter();

  return (
    <ServiceCard
      data={{
        id,
        icon,
        color,
        label,
        description,
        subscribed,
      }}
      onClick={() =>
        router.push(
          ROUTES.CLIENT.SERVICE_REQUEST.VIEW_SERVICE.replace(
            ':id',
            id
          )
        )
      }
      role='button'
    >
      <ServiceCard.Icon />

      <ServiceCard.Body>
        <ServiceCard.Label />
        <ServiceCard.Description />
      </ServiceCard.Body>

      <ServiceCard.Button>
        {subscribed ? 'تم الحجز' : 'احجز الان'}
      </ServiceCard.Button>
    </ServiceCard>
  );
};
