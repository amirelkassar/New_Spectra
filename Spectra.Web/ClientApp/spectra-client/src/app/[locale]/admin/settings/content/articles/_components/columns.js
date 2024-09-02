import MenuActions from "@/components/menu-actions";
import StarGoldIcon from "@/assets/icons/starGold";
import Image from "next/image";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
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
    accessorKey: "title",
    header: "الاسم",
    id: "title",
    cell: ({ getValue, row }) => {
      const title = getValue();
      const img = row.original.image;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.EDITARTICLES(id)}
          className="flex gap-5 items-center "
        >
          <Image
            src={img}
            alt=""
            width={50}
            height={50}
            className="rounded-full size-[50px] object-cover object-top"
          />
          <h3 className="text-base font-Bold">{title}</h3>
        </Link>
      );
    },
  },
  {
    accessorKey: "date",
    header: " تاريخ المقال ",
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
    id: "actions",
    cell: ({ getValue, row }) => {
      return <MenuActions />;
    },
  },
];
