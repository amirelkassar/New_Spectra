import MenuActions from "@/components/menu-actions";
import Image from "next/image";
import React from "react";
import man from "../../../../assets/images/placeholder-person.png";

function report() {
  return (
    <div className="px-3 py-2 rounded-[10px] bg-grayDark">
      <div className="flex items-start gap-2 ">
        <div className="flex-1 mb-4">
          <span className="text-[12px] font-Bold text-greenMain mb-2">جديدة</span>
          <h2 className="text-[12px] font-Bold text-black mb-1">تقرير :2325</h2>
          <h3 className="text-[12px] font-Regular text-black mb-1">20/2/2024</h3>
          <div className="flex gap-2 items-center ">
            <Image width={22} height={22} src={man} alt="man" className=" rounded-[50%]" />
            <h2>
              <span> الاخصائى :</span>
              احمد محمد كمال
            </h2>
          </div>
        </div>
        <MenuActions />
      </div>
    </div>
  );
}

export default report;
