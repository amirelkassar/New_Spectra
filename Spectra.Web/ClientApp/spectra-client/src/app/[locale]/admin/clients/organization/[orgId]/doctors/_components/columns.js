import MenuActions from "@/components/menu-actions";
import StarGoldIcon from "@/assets/icons/starGold";
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
    cell: () => {
      return (
        <div
          className={
            "flex gap-[10px] md:gap-[40px] justify-end items-start me-5 "
          }
        >
          <MenuActions />
        </div>
      );
    },
  },
];

