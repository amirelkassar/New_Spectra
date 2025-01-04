'use client';

import { Menu } from '@mantine/core';

import DeleteIcon from '@/assets/icons/delete';
import ThreeDotsIcon from '@/assets/icons/three-dots';
import ShowIcon from '@/assets/icons/show';
import EditIcon from '@/assets/icons/edit';
import ExportIcon from '@/assets/icons/export';
import PrintIcon from '@/assets/icons/print';
import Download from '@/assets/icons/download';
import CloseCircle from '@/assets/icons/close-circle';

export default function ActionsMenu({ children }) {
  return (
    <Menu
      classNames={{
        item: 'px-4',
      }}
      position='bottom-end'
      shadow='md'
      width={200}
    >
      <Menu.Target>
        <div role='button' className='p-2 bg-white w-fit rounded-md'>
          <ThreeDotsIcon />
        </div>
      </Menu.Target>
      <Menu.Dropdown
        classNames={{
          dropdown: 'font-bold rounded-xl border-2 border-black/10',
        }}
      >
        {children}
      </Menu.Dropdown>
    </Menu>
  );
}

const DeleteButton = ({ children, ...props }) => {
  return (
    <Menu.Item
      color='red'
      leftSection={<DeleteIcon className='size-4' />}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

ActionsMenu.Delete = DeleteButton;

const ViewButton = ({ children, ...props }) => {
  return (
    <Menu.Item
      leftSection={<ShowIcon className='size-4' />}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

ActionsMenu.View = ViewButton;

const EditButton = ({ children, ...props }) => {
  return (
    <Menu.Item
      leftSection={<EditIcon className='size-4' />}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

ActionsMenu.Edit = EditButton;

const ExportButton = ({ children, ...props }) => {
  return (
    <Menu.Item
      leftSection={<ExportIcon className='size-4' />}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

ActionsMenu.Export = ExportButton;

const PrintButton = ({ children, ...props }) => {
  return (
    <Menu.Item
      leftSection={<PrintIcon className='size-4' />}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

ActionsMenu.Print = PrintButton;

const DownloadButton = ({ children, ...props }) => {
  return (
    <Menu.Item
      leftSection={<Download className='size-4' />}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

ActionsMenu.Download = DownloadButton;

const CancelButton = ({ children, ...props }) => {
  return (
    <Menu.Item
      leftSection={<CloseCircle className='size-4' />}
      {...props}
    >
      {children}
    </Menu.Item>
  );
};

ActionsMenu.Cancel = CancelButton;
