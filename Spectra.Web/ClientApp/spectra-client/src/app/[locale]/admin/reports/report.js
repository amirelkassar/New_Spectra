import MenuActions from "@/components/menu-actions";
import Image from "next/image";
import React from "react";
import man from "../../../../assets/images/placeholder-person.png";
import { Link } from "@/navigation";
import ROUTES from "@/routes";

function Report({ data }) {
  console.log(data.id);
  
  return (
    <Link href={ROUTES.ADMIN.REPORT.REPORTID(data.id)} className={` rounded-[10px] ${data.state==='new'?'bg-[#F1FCFF]':"bg-grayLight"} min-w-[100%] md:min-w-[300px] md:max-w-[330px] w-[100%]`}>
      <div className="flex items-start gap-2 px-3 py-2">
        <div className="flex-1 mb-1">
          {data.state === "new" && (
            <span className="text-[14px] sml:text-[16px] font-Bold text-greenMain mb-2">
              جديدة
            </span>
          )}

          <h2 className="text-[14px] sml:text-[16px] font-Bold text-black mb-1">تقرير :2325</h2>
          <h3 className="text-[14px] sml:text-[16px] font-Regular text-black mb-1">
            20/2/2024
          </h3>
          <div className="flex gap-2 items-center ">
            <Image
              width={38}
              height={38}
              src={man}
              alt="man"
              className=" rounded-[50%] min-w-[38px] w-[38px] h-[38px] object-cover object-top"
            />
            <h2 className="text-[14px] sml:text-[16px] font-Bold">
              <span className="!font-ExtraLight"> الاخصائى :</span>
              احمد محمد كمال
            </h2>
          </div>
        </div>
        <MenuActions />
      </div>
      <h4 className="px-5 sml:px-9 py-3 sml:py-4 border-y text-[16px] sml:text-[20px] font-Bold mb-1">
        تقرير تحليل صحي شامل
      </h4>
      <div className="flex gap-4 px-5 sml:px-9 py-3 justify-around flex-wrap">
        <div className="min-w-[100px]">
          <h2 className="text-[14px] sml:text-[16px] font-ExtraLight mb-2">اسم المريض</h2>
          <Image
            width={58}
            height={58}
            src={man}
            alt="man"
            className=" rounded-[50%] min-w-[58px] w-[58px] h-[58px] object-cover object-top mb-2"
          />
          <h3 className="text-[14px] sml:text-[16px] font-Bold ">عبدالله الشيخ</h3>
          <p className="text-[14px] sml:text-[16px] font-Regular ">الطفل / احمد</p>
        </div>
        <div className="min-w-[100px]">
          <h2 className="text-[14px] sml:text-[16px] font-ExtraLight mb-2">اسم المريض</h2>
          <Image
            width={58}
            height={58}
            src={man}
            alt="man"
            className=" rounded-[50%] min-w-[58px] w-[58px] h-[58px] object-cover object-top mb-2"
          />
          <h3 className="text-[14px] sml:text-[16px] font-Bold ">عبدالله الشيخ</h3>
          <p className="text-[14px] sml:text-[16px] font-Regular ">الطفل / احمد</p>
        </div>
      </div>
    </Link>
  );
}

export default Report;
