import StarGoldIcon from "@/assets/icons/starGold";
import ActionMenu from "./ActionMenu";
import Image from "next/image";

const getStar = (num) => {
  const stars = [];
  for (let i = 1; i <= num; i++) {
    stars.push(
      <StarGoldIcon key={i} className={"w-[14px] lg:w-[18px] h-auto"} />
    );
  }
  return stars;
};

export const columns = [
  {
    accessorKey: "doctor",
    header: " الاسم",
    id: "doctor",
    cell: ({ getValue, row }) => {
      const name = getValue();
      const image = row.original.image
      return (
        <div className="flex gap-[6px] items-center justify-start w-[116px]">
          <Image src={image} alt="doctor" width={54} height={54} className=" size-[52px] hidden object-cover object-top mdl:block rounded-full"/>
          <h3 className="text-[12px] mdl:text-base font-bold mdl:min-w-[96px]">{name}</h3>
        </div>
      )
    }
  },
  {
    accessorKey: "specialisationDoctor",
    header: " تخصص الطبيب",
    id: "specialisationDoctor",
  },
  {
    accessorKey: "date",
    header: "تاريخ الانضمام",
    id: "date",
  },
  {
    accessorKey: "star",
    header: "التقييم ",
    id: "star",
    cell: ({ getValue, row }) => {
      const numStar = getValue();
      return (
        <div className="flex gap-[6px] items-center justify-start w-[116px]">
          {" "}
          {getStar(numStar)}
        </div>
      );
    },
  },
  {
    accessorKey: "",
    header: "",
    id: "type",
    cell: ({ getValue, row }) => {
      const id = row.original.id
      
      
      return (
        <div
          className={
            "flex gap-[10px] md:gap-[40px] justify-end items-start me-5 "
          }
        >
          <ActionMenu id={id}/>
        </div>
      );
    },
  },
];

