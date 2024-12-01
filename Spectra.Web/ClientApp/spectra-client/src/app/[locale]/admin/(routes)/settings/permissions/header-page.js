import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import React from "react";
import ActionMenu from "./_components/ActionMenuPage";

function HeaderPage({ linkBack, title }) {
  return (
    <div className="flex items-start justify-between gap-6 mb-3 mdl:mb-8">
      <div className="flex mb-1   items-center gap-4 ">
        <Link
          href={linkBack}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">{title}</h2>
      </div>
      <ActionMenu  />
    </div>
  );
}

export default HeaderPage;
