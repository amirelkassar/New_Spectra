import PillsIcon from "@/assets/icons/pills";
import TherapyIcon from "@/assets/icons/therapy";
import MenuActions from "@/components/menu-actions";

export const columns = [
  {
    accessorKey: "recipeNumber",
    header: "رقم الوصفة ",
    id: "recipeNumber",
  },
  {
    accessorKey: "childName",
    header: "اسم المريض",
    id: "childName",
  },
  {
    accessorKey: "date",
    header: "التاريخ",
    id: "date",
  },
  {
    accessorKey: "recipe",
    header: "الوصفة",
    id: "recipe",
    cell: ({ getValue }) => {
      const recipe = getValue();
      return (
        <div className="flex items-center gap-3">
          {recipe === "ستيرال" ? (
            <div className="bg-blueLight w-11 h-11 rounded-full flex items-center justify-center p-2">
           
              <PillsIcon
                className={"w-[10px] lg:w-[20px] h-[12px] lg:h-[20px]"}
              />
            </div>
          ) : (
            <div className="bg-blueLight w-11 h-11 rounded-full flex items-center justify-center p-2">
         
              <TherapyIcon
                className={"w-[10px] lg:w-[20px] h-[12px] lg:h-[20px]"}
              />
            </div>
          )}
          <p>{recipe}</p>
        </div>
      );
    },
  },

  {
    id: "type",
    cell: () => {
      return <MenuActions />;
    },
  },
];
