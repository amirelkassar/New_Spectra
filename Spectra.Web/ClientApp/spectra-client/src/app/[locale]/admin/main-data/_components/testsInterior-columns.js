import ActionMenu from './ActionMenuTestsInterior';

export const TestsInteriorColumns = [
  {
    accessorKey: 'name',
    header: 'الاسم',
  },
  {
    accessorKey: 'code',
    header: 'الكود ',
  },
  {
    accessorKey: 'examinationTypes',
    header: 'التخصص ',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];

// cell: ({ getValue, row }) => {
//   const Specialization = getValue();
//   console.log(Specialization);

//   return (
//     <p className="max-w-[150px] truncate text-base font-Regular">
//       {Specialization.map(
//         (item, index) =>
//           item + (index + 1 < Specialization.length ? " - " : "")
//       )}
//     </p>
//   );
// }
