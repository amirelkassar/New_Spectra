import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function AddDrugs() {
  return (
    <Link
      href={ROUTES.ADMIN.DRUGSADD}
      className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold"
    >
      <PlusInsideCircleIcon />
      <p className=" text-[14px] md:text-[16px] font-bold">أضافة عقار</p>
    </Link>
  );
}

export default AddDrugs;
