'use client';

import { Link } from '@/navigation';
import { UseMainDataAside } from '../_hooks/use-main-data-aside';
import { cn } from '@/lib/utils';

const MainDataAside = () => {
  const { items } = UseMainDataAside();

  return (
    <div className='w-[100%] lg:w-56 shrink-0 overflow-auto bg-white lg:rounded-xl py-3 lg:pt-8 lg:ps-6 px-2 pe-6'>
      <ul className='flex lg:flex-col  items-start  gap-5'>
        {items.map((i) => (
          <li key={i.name} className='lg:w-[100%] '>
            <Link
              href={i.route}
              className={cn(
                ' transition text-nowrap w-full py-2 flex items-center justify-start px-3 text-[12px] md:text-[16px] bg-transparent font-bold rounded-xl gap-3 hover:bg-greenLight',
                i.isActive &&
                  'bg-greenMain text-white hover:bg-greenMain'
              )}
            >
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainDataAside;
