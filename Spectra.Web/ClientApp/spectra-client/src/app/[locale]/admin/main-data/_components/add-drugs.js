import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { Link } from "@/navigation";
import React from "react";

function AddMainData({title,path}) {
  return (
    <Link
      href={path}
      className="flex px-5 items-center justify-center w-fit h-10 rounded-xl bg-blueLight gap-4 font-bold"
    >
      <PlusInsideCircleIcon />
      <p className=" text-[14px] md:text-[16px] font-bold">{title} </p>
    </Link>
  );
}

export default AddMainData;
