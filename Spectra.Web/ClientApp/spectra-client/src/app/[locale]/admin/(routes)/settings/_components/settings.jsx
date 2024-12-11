'use client';

import { Link } from '@/i18n/routing';
import { SectionTitle } from '@/admin/_components/ui';
import { useSettingsData } from '../_hooks/use-settings-data';

export const Settings = () => {
  const { DATA } = useSettingsData();

  return (
    <div className='flex-1 grid grid-cols-1 mdl:grid-cols-3 mdl:place-content-center place-content-start gap-5'>
      {DATA.map((setting) => {
        return (
          <SettingCard
            key={setting.id}
            icon={setting.icon}
            title={setting.title}
            link={setting.link}
          />
        );
      })}
    </div>
  );
};

function SettingCard({ icon, title, link }) {
  return (
    <Link
      href={link}
      className='rounded-xl bg-blueLighter flex mdl:flex-col gap-5 *:shrink-0 items-center justify-center text-center p-5 mdl:p-10 border-2 border-transparent transition hover:border-greenMain'
    >
      {icon}
      <SectionTitle>{title}</SectionTitle>
    </Link>
  );
}
