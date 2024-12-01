import MenuActions from "@/components/menu-actions";
import ROUTES from "@/routes";
import ActionMenu from "./ActionMenu";
export const columns = [
  {
    accessorKey: "name",
    header: "الاسم ",
    id: "name",
  },
  {
    accessorKey: "email",
    header: "الايميل",
    id: "email",
  },
  {
    accessorKey: "job",
    header: "الوظيفة",
    id: "job",
  },
  {
    accessorKey: "date",
    header: " تاريخ الاذن",
    id: "date",
  },

  {
    accessorKey: "active",
    header: "حالة العقد",
    id: "active",
    cell: ({ getValue, row }) => {
      const id = row.original.id;
      return (
        <div className="mx-1 flex items-center justify-end gap-4">
          {getValue() ? (
            <div className="bg-[#F1FCFF] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
              <span className=" size-3 rounded-[50%]  bg-greenMain animate-pulse z-[1] md:block hidden"></span>
              <p className="font-Bold text-[12px] md:text-[16px] text-greenMain">
                نشط
              </p>
            </div>
          ) : (
            <div className="bg-[#FFF2F2] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px]">
              <span className=" size-3 rounded-[50%]  bg-red  z-[1] md:block hidden"></span>
              <p className="font-Bold text-[12px] md:text-[16px] text-red">
                منتهى
              </p>
            </div>
          )}

          <ActionMenu id={id} />
        </div>
      );
    },
  },
];
