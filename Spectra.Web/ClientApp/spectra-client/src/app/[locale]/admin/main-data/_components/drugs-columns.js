import MenuActions from "@/components/menu-actions";
import ROUTES from "@/routes";
import Image from "next/image";

export const DrugsColumns = [
  {
    accessorKey: "name",
    header: "اسم العقار",
    id: "name",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const imageUrl = row.original.imageUrl;
      return (
        <div className={" items-center gap-2 lg:gap-5   flex"}>
          <div className=" size-7 lg:size-12  flex items-start justify-center ">
            <Image
              src={imageUrl}
              alt={name}
              width={49}
              height={51}
              className="w-full h-auto object-contain"
            />
          </div>
          <h3 className="font-bold text-[12px] md:text-[16px]">{name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "manufacturer",
    header: "المادة الفعالة",
    id: "manufacturer",
  },
  {
    accessorKey: "type",
    header: "النوع",
    id: "type",
  },
  {
    accessorKey: "code",
    header: "الكود",
    id: "code",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <MenuActions type={2} path={ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(id)} />
      );
    },
  },
];
