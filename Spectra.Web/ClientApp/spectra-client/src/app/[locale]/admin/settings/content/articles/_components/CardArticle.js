import StarGoldIcon from "@/assets/icons/starGold";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import React from "react";
const getStar = (num) => {
  const stars = [];
  for (let i = 1; i <= num; i++) {
    stars.push(
      <StarGoldIcon key={i} className={"w-[14px] lg:w-[18px] h-auto"} />
    );
  }
  return stars;
};
function CardArticle({ data }) {
  return (
    <div className="flex justify-between gap-3 pb-8 border-b border-grayLight">
      <Link href={ROUTES.ADMIN.SETTINGS.CONTENT.EDITARTICLES(data.id)} className="flex gap-4 flex-1">
        <Image
          src={data.image}
          alt={data.id}
          width={50}
          height={50}
          className="w-[50px] rounded-full object-cover object-top"
        />
        <div>
          <h3 className="text-sm">{data.title}</h3>
          <p className="text-[12px] font-Regular text-grayDark">{data.date}</p>
          <div className="flex gap-[6px] items-center justify-start w-[116px]">
            {" "}
            {getStar(data.star)}
          </div>
        </div>
      </Link>
      <div>
      <MenuActions type={2} path={ROUTES.ADMIN.SETTINGS.CONTENT.EDITARTICLES(data.id)} pathEdit={ROUTES.ADMIN.SETTINGS.CONTENT.EDITARTICLES(data.id)} />
      </div>
    </div>
  );
}

export default CardArticle;
