'use client';

import ThreeDotsIcon from '@/assets/icons/three-dots';
import { cn } from '@/lib/utils';
import { Menu, Button } from '@mantine/core';

export const ActionButton = ({ className = '' }) => {
  return (
    <div className={cn(className)}>
      <Menu position='bottom-end' shadow='md' width={120}>
        <Menu.Target>
          <Button variant='transparent'>
            <ThreeDotsIcon />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>طباعة</Menu.Item>
          <Menu.Item>تنزيل</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
