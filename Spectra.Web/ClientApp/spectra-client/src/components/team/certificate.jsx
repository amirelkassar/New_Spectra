'use client';

import Image from 'next/image';

import Card from '@/components/card';
import { useDate } from '@/hooks/use-date';
import ActionsMenu from '@/components/actions-menu';
import { useImagePath } from '@/hooks/use-image-path';

export const Certificate = ({
  name = '',
  image = '',
  date = '',
  id = '',
  isEdit = false,
  actions = {
    onDelete: () => {},
    onDownload: () => {},
    onPrint: () => {},
  },
}) => {
  const path = useImagePath(image);

  const { fullYear } = useDate(date);

  return (
    <Card
      data-id={id}
      className='flex-none !p-4 space-y-3 relative w-fit'
      size='sm'
    >
      <div className='relative rounded-lg overflow-hidden w-36 h-28 mdl:w-56 mdl:h-44'>
        <RenderPreview path={path} name={name} />
      </div>

      <div className='max-w-36 mdl:max-w-56'>
        <h5 className='text-xs mdl:text-base font-bold inline-block me-2'>
          {name}
        </h5>
        <p className='text-xs mdl:text-base text-grayDark text-end'>
          {fullYear}
        </p>
      </div>
      {isEdit && (
        <div className='absolute top-0 end-1'>
          <ActionsMenu>
            <ActionsMenu.Delete onClick={() => actions.onDelete(id)}>
              مسح
            </ActionsMenu.Delete>
            <ActionsMenu.Download
              onClick={() => actions.onDownload(path, name)}
            >
              تنزيل
            </ActionsMenu.Download>
            <ActionsMenu.Print onClick={() => actions.onPrint(path)}>
              طباعة
            </ActionsMenu.Print>
            {/* <ActionsMenu.Edit onClick={() => {}}>
              تعديل
            </ActionsMenu.Edit> */}
          </ActionsMenu>
        </div>
      )}
    </Card>
  );
};

const RenderPreview = ({ path, name }) => {
  if (!path) return null;

  if (path.includes('pdf')) {
    return <iframe src={path} width='100%' height='100%' />;
  }

  return (
    <Image
      src={path}
      alt={name}
      priority={false}
      fill
      sizes='width: 230px; height: 180px;'
      className='w-full h-full object-center object-cover'
    />
  );
};
