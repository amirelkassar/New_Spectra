import MenuActions from "@/components/menu-actions";
import ROUTES from "@/routes";
import Image from "next/image";
import React from "react";

function CardStory({ data }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={data.image}
          alt={data.id}
          width={54}
          height={54}
          className=" size-[54px] rounded-full object-cover object-top"
        />
        <div>
          <h3 className="text-[12px]  mb-1 font-bold">{data.name}</h3>
          <h4 className="text-[12px] font-Regular mb-2">{data.diagnosis}</h4>
          <p className="text-[12px] text-grayDark font-Regular">{data.date}</p>
        </div>
      </div>
      <div>
        <MenuActions
          type={2}
          path={ROUTES.ADMIN.SETTINGS.CONTENT.STORIESID(data.id)}
          pathEdit={ROUTES.ADMIN.SETTINGS.CONTENT.STORIESID(data.id)}
        />
      </div>
    </div>
  );
}

export default CardStory;
