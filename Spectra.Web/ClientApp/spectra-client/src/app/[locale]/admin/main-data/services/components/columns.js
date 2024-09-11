import ROUTES from "@/routes";
import ActionMenu from "./ActionMenu";

export const columns = [
  {
    accessorKey: "title",
    header: "الاسم",
    id: "title",
    cell: ({ getValue, row }) => {
      const title = getValue();
      const icon = row.original.icon;
      const id = row.original.id;
      return (
        <div className="flex items-center gap-5">
          <div className=" size-[40px] rounded-[50%] items-center flex justify-center bg-greenMain/20 p-2  relative">
            {icon}
          </div>
          <h3 className="text-base font-Bold">{title}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "  تاريخ الاضافة ",
    id: "date",
  },
  {
    accessorKey: "show",
    header: " الحالة ",
    id: "show",
    cell: ({ getValue }) => {
      const show = getValue();
      return show ? (
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
    id: "actions",
    cell: ({ getValue, row }) => {
      const id = row.original.id;
      return (
        <ActionMenu
          type={2}
          id={id}
          path={ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id)}
          pathEdit={ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(id)}
        />
      );
    },
  },
];
