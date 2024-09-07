import MenuActions from "@/components/menu-actions";
import Image from "next/image";
import React from "react";
import man from "@/assets/images/placeholder-person.png";
import { Link } from "@/navigation";
import ROUTES from "@/routes";

function Report({ data }) {
  console.log(data.id);

  return (
    <Link
      href={ROUTES.ADMIN.REPORT.REPORTID(data.id)}
      className={` rounded-[10px] ${
        data.state === "new" ? "bg-[#F1FCFF]" : "bg-grayLight"
      } min-w-[100%]  md:min-w-[calc(50%-20px)] w-full max-w-[350px] p-3 ps-6 border-s-4 flex-1  border-greenMain`}
    >
      <div className="flex items-start gap-4 md:gap-6 mb-7 ">
        <div className="flex-1 flex items-center gap-3 justify-between ">
          <div className=" flex items-center gap-3 ">
            <h2 className="text-[14px] sml:text-[16px] font-Bold text-black ">
              تقرير :2325
            </h2>
            <h3 className="text-[14px] sml:text-[16px] font-Regular text-black ">
              20/2/2024
            </h3>
          </div>
          {data.state === "new" && (
            <span className="text-[12px] font-Bold bg-greenMain px-2 rounded-lg text-white ">
              جديدة
            </span>
          )}
        </div>
        <MenuActions />
      </div>
      <h4 className="  text-[16px] border-b border-grayDark/50 pb-4 md:text-[20px] font-Bold mb-6">
        تقرير تحليل صحي شامل
      </h4>
      <div className="flex gap-2 items-center pb-2">
        <Image
          width={38}
          height={38}
          src={man}
          alt="man"
          className=" rounded-[50%] min-w-[38px] w-[38px] h-[38px] object-cover object-top"
        />
        <h2 className="text-[14px] sml:text-[16px] font-bold">
          <span className="!font-ExtraLight"> الاخصائى :</span>
          احمد محمد كمال
        </h2>
      </div>
    </Link>
  );
}

export default Report;
