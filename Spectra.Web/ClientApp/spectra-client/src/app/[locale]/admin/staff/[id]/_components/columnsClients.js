import MenuActions from "@/components/menu-actions";
import Image from "next/image";
export const columns = [
  {
    accessorKey: "name",
    header: "الاسم",
    id: "name",
    cell: ({ row }) => {
      const name = row.original.name;
      const image = row.original.image;
      return (
        <div className="flex items-center gap-4">
          <Image
            width={54}
            height={54}
            src={image}
            alt="client"
            className="w-8 lgl:w-14 h-8 lgl:h-14 rounded-full object-cover object-top"
          />
          <h3 className="text-[12px] lgl:text-base font-bold">{name}</h3>
        </div>
      );
    },
  },
  {
    accessorKey: "customerType",
    header: "نوع العميل",
    id: "customerType",
  },
  {
    accessorKey: "numberOfChildren",
    header: " عدد الاطفال ",
    id: "numberOfChildren",
  },

  {
    id: "Actions",
    cell: () => {
      return <MenuActions />;
    },
  },
];
