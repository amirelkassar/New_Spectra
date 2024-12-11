import ArrowLeftMainGreen from '@/assets/icons/arrow-left-mainGreen';

import Card from '@/components/card';
import { Link } from '@/i18n/routing';
import { Section } from '@/client/_components/ui';
import { SETTINGS_LIST } from '@/data';

export const SettingsList = () => {
  return (
    <Section id='settings' className='space-y-5'>
      <ul className='space-y-5'>
        {SETTINGS_LIST.map((item) => (
          <List key={item.id} {...item} />
        ))}
      </ul>
    </Section>
  );
};

const List = ({ icon = null, label = '', href = '' }) => {
  return (
    <li>
      <Link href={href}>
        <Card className='flex items-center gap-5 border border-transparent transition hover:border-greenMain'>
          <div className='flex items-center gap-3 flex-1'>
            <span className='size-9 mdl:size-10 rounded-full flex items-center justify-center bg-blueLight shrink-0 text-greenMain'>
              {icon}
            </span>

            <span className='font-bold text-base mdl:text-xl'>
              {label}
            </span>
          </div>

          <ArrowLeftMainGreen className='ltr:rotate-180 size-3 mdl:size-4' />
        </Card>
      </Link>
    </li>
  );
};
