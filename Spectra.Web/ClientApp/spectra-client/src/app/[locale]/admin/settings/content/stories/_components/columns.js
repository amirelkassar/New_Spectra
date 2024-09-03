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
    accessorKey: "name",
    header: "الاسم",
    id: "name",
    cell: ({ getValue, row }) => {
      const title = getValue();
      const img = row.original.image;
      const id = row.original.id;
      return (
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.STORIESID(id)}
          className="flex gap-5 items-center "
        >
          <Image
            src={img}
            alt=""
            width={46}
            height={46}
            className="rounded-full size-[46px] object-cover object-top"
          />
          <h3 className="text-base font-Bold">{title}</h3>
        </Link>
      );
    },
  },
  {
    accessorKey: "diagnosis",
    header: " التشخيص ",
    id: "diagnosis",
  },

  {
    accessorKey: "date",
    header: "تاريخ النشر ",
    id: "date",
  },

  {
    id: "actions",
    cell: ({ getValue, row }) => {
      const id = row.original.id;
      return (
        <MenuActions
          type={2}
          path={ROUTES.ADMIN.SETTINGS.CONTENT.STORIESID(id)}
          pathEdit={ROUTES.ADMIN.SETTINGS.CONTENT.STORIESID(id)}
        />
      );
    },
  },
];
