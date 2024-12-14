'use client';

import CloseIcon from '@/assets/icons/close';
import SearchIcon from '@/assets/icons/search';
import StarGoldIcon from '@/assets/icons/starGold';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import { AddButton } from '@/components/buttons/add-button';
import TextInput from '@/components/inputs/text-input';
import { QueryWrapper } from '@/components/query-wrapper';
import { DataTable } from '@/components/table/data-table';
import { Pagination } from '@/components/table/pagination';
import { Table } from '@/components/table/table';
import { Toast } from '@/components/toast';
import { useStaff } from '@/hooks/queries/admin/staff/staff';
import { useAddGroupMember } from '@/hooks/queries/admin/staff/team';
import { useImagePath } from '@/hooks/use-image-path';
import { Checkbox, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const AddTeamModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <AddButton onClick={open}>أضافة اخصائي</AddButton>

      <Modal
        withCloseButton={false}
        centered
        opened={opened}
        onClose={close}
        size='xl'
        classNames={{
          content: 'rounded-xl py-4 mdl:py-8',
          body: 'p-0',
        }}
      >
        {/* HEAD */}
        <button
          onClick={close}
          className='absolute top-3 mdl:top-5 start-5'
        >
          <CloseIcon className='size-5 mdl:size-11' />
        </button>
        <h3 className='text-sm mdl:text-base font-bold text-center'>
          أضافة اخصائي
        </h3>

        {/* BODY */}
        <MedicalSpecialistTable close={close} />
      </Modal>
    </>
  );
};

const columns = [
  {
    id: 'select',
    cell: ({ row }) => <CellSelect id={row.original?.id} />,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'doctor',
    header: 'الاسم',
    cell: ({ row }) => <CellDoctor row={row} />,
  },
  {
    accessorKey: 'profession',
    header: 'تخصص الطبيب',
    cell: ({ row }) => <CellProfession row={row} />,
  },
  {
    accessorKey: 'rate',
    header: 'التقييم',
    cell: ({ getValue }) => <CellRate rate={getValue()} />,
  },
];

const SelectedContext = createContext([]);

const MedicalSpecialistTable = memo(({ close = () => {} }) => {
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);
  const [currentTeam, setCurrentTeam] = useState([]);

  const query = useStaff({
    search,
    pageNum,
    jobType: 2,
  });

  useEffect(() => {
    const teamElement = document.querySelectorAll('#team-member');
    if (!teamElement) return;
    const team = [];
    teamElement.forEach((el) => {
      const id = el.getAttribute('data-id');
      team.push(id);
    });
    setCurrentTeam(team);
  }, []);

  return (
    <div className='mt-10 space-y-5 px-3 mdl:px-5'>
      <TextInput
        size='lg'
        rightSection={<SearchIcon className='size-5 text-grayDark' />}
        placeholder='البحث بالاسم او التخصص'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <QueryWrapper query={query} isSearching={!!search}>
        {({ data, isPlaceholderData, pageSize, totalCount }) => (
          <>
            <SelectedContext.Provider
              value={{ selected, setSelected, currentTeam }}
            >
              <DataTable data={data} columns={columns}>
                <TableItem />
              </DataTable>
            </SelectedContext.Provider>

            <Pagination
              totalCount={totalCount}
              pageSize={pageSize}
              pageNumber={pageNum}
              setPageNumber={setPageNum}
              disabled={isPlaceholderData}
            />
          </>
        )}
      </QueryWrapper>

      <ConfirmButton close={close} selectedSpecialist={selected} />
    </div>
  );
});

MedicalSpecialistTable.displayName = 'MedicalSpecialistTable';

const TableItem = memo(() => {
  return (
    <Table className='mb-10' borderColor='#F5F5F5'>
      <Table.Head
        classNames={{
          th: 'bg-blueLighter font-normal text-base p-3',
          tr: 'border-0',
        }}
      />
      <Table.Body
        classNames={{
          tr: 'group',
          td: 'transition group-hover:bg-blueLight text-sm lg:text-base first:font-bold py-3 px-4',
        }}
      >
        <Table.Fallback>لا يوجد بيانات</Table.Fallback>
      </Table.Body>
    </Table>
  );
});

TableItem.displayName = 'TableItem';

const CellDoctor = ({ row }) => {
  const image = row.original?.userImage;

  const path = useImagePath(image);

  if (!row || !row?.original) return null;
  const doctor = `${row.original?.firstName} ${row.original?.lastName}`;
  const email = row.original?.emailaddress;
  return (
    <div className='flex items-center gap-5 w-full min-w-max'>
      <Avatar
        name={email}
        src={path}
        className='lg:size-14 size-10'
      />
      <span className='font-bold capitalize'>{doctor}</span>
    </div>
  );
};

const CellRate = ({ rate = '' }) => {
  if (!rate) return '--';
  return (
    <span className='flex items-center gap-1 text-grayDark rounded-xl px-10 py-1 bg-blueLighter mdl:px-0 mdl:py-0 mdl:bg-transparent'>
      <span className='mt-0.5'>{rate}</span>
      <StarGoldIcon />
    </span>
  );
};

const CellProfession = ({ row }) => {
  const locale = useLocale();

  const data = row?.original;

  if (!data) return '--';
  const key =
    locale === 'ar'
      ? 'mainSpecializationArName'
      : 'mainSpecializationEnName';

  return data[key];
};

const CellSelect = ({ id }) => {
  const { selected, setSelected, currentTeam } =
    useContext(SelectedContext);

  const isDisabled = useMemo(
    () => currentTeam.includes(id),
    [id, currentTeam]
  );

  const handleSelect = useCallback(() => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  }, [id, setSelected]);

  const isSelected = useMemo(
    () => selected.includes(id),
    [id, selected]
  );

  return (
    <Checkbox
      checked={isSelected}
      onChange={handleSelect}
      color='#10B0C1'
      radius='xs'
      size='md'
      disabled={isDisabled}
    />
  );
};

const ConfirmButton = memo(
  ({ close = () => {}, selectedSpecialist = [] }) => {
    const ownerId = useParams().staffId;
    const { mutateAsync: addGroupMember, isPending } =
      useAddGroupMember();

    // handle confirm to add members to team
    const handleConfirm = async () => {
      if (!selectedSpecialist.length || !ownerId) return;

      const data = {
        ownerId,
        memeberIds: selectedSpecialist,
      };

      Toast.Promise(addGroupMember(data), {
        success: 'تم اضافة الفريق بنجاح',
        onSuccess: close,
      });
    };

    return (
      <Button
        disabled={!selectedSpecialist.length || isPending}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleConfirm();
        }}
        className='w-full !mt-10'
        variant='secondary'
      >
        تأكيد
      </Button>
    );
  }
);

ConfirmButton.displayName = 'ConfirmButton';
