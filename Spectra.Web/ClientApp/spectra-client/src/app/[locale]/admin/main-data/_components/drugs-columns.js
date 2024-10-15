
import Image from "next/image";
import ActionMenu from "./ActionMenu";
import imgDrugs from "@/assets/images/drugs.png";

export const DrugsColumns = [
  {
    accessorKey: "name",
    header: "اسم العقار",
    id: "name",
    cell: ({ getValue, row }) => {
      const name = getValue();

      return (
        <div className={" items-center gap-2 lg:gap-5   flex"}>
          <div className=" size-7 lg:size-12  flex items-start justify-center ">
            <Image
              src={imgDrugs}
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
    accessorKey: "activeIngredient",
    header: "المادة الفعالة",
    id: "activeIngredient",
  },
  {
    accessorKey: "contraindications",
    header: "النوع",
    id: "contraindications",
  },
  {
    accessorKey: "interactionsWithOtherdrugs",
    header: "الكود",
    id: "interactionsWithOtherdrugs",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return <ActionMenu id={id} />;
    },
  },
];
