import ActionMenu from "./ActionMenu";
import SessionIcon from "@/assets/icons/session";

export const columns = [
  {
    accessorKey: "name",
    header: "الاسم",
    id: "name",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const icon = row.original.icon;
      const id = row.original.id;
      return (
        <div className="flex items-center gap-5">
          <div className=" size-[40px] rounded-[50%] items-center flex justify-center bg-greenMain/20 p-2  relative">
            {icon || <SessionIcon className={"w-full h-auto"} />}
          </div>
          <h3 className="text-base font-Bold">{name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "created",
    header: "  تاريخ الاضافة ",
    id: "created",
    cell: ({ getValue }) => {
      const created = getValue();
      const date = new Date(created);
      return <p>{date.toLocaleDateString("en-GB")}</p>;
    },
  },
  {
    accessorKey: "availableSrvices",
    header: " الحالة ",
    id: "availableSrvices",
    cell: ({ getValue }) => {
      const availableSrvices = getValue();
      return availableSrvices === 1 ? (
        <span className="bg-blueLight font-Bold text-greenMain flex items-center justify-center px-4 w-fit rounded-lg text-center h-8 text-base">
          تعرض
        </span>
      ) : (
        <span className="bg-[#F5E4F9] font-Bold text-[#8A22A0] flex items-center justify-center px-4 w-fit rounded-lg text-center h-8 text-base">
          داخلية{" "}
        </span>
      );
    },
  },
  {
    accessorKey: "price",
    header: "  رسوم الخدمة ",
    id: "price",
  },
  {
    id: "actions",
    cell: ({  row }) => {
      const id = row.original.id;
      const availableSrvices = row.original.availableSrvices;
      return <ActionMenu id={id} show={availableSrvices === 1} />;
    },
  },
];
