import CircleAlert from '@/assets/icons/circle-alert';
import { Alert as MantineAlert } from '@mantine/core';

export function Alert({ children, ...props }) {
  const icon = <CircleAlert className='text-greenMain' />;
  return (
    <MantineAlert
      {...props}
      variant={props.variant || 'filled'}
      color={props.color || '#F1FCFF'}
      icon={props?.icon || icon}
      radius={props?.radius || 'lg'}
      classNames={{
        message: 'text-black text-xs lg:text-base',
        ...props.classNames,
      }}
    >
      {children}
    </MantineAlert>
  );
}
