import { Link } from "@/navigation";
import React from "react";

function CardSetting({ icon, title, link }) {
  return (
    <Link href={link} className="py-4 md:py-12 px-4 md:px-9 bg-blueLight rounded-[10px] w-full max-w-full  md:max-w-[248px] h-[55px] md:h-[272px] flex flex-row md:flex-col justify-center mdl:justify-between items-center gap-8">
      {icon}
      <h2 className="text-center text-[14px] md:text-[20px] font-Bold">
        {title}
      </h2>
    </Link>
  );
}

export default CardSetting;
