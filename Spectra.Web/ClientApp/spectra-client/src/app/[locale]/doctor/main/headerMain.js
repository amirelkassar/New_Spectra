"use client";

import ContractsIcon from "@/assets/icons/contracts";
import HelloIcon from "@/assets/icons/hello";
import React from "react";
import useModal from "@/store/modal-slice";

function HeaderMain({setActive}) {
    const {modal,editModal} = useModal();
  return (
    <div className="p-7">
      <div className="flex items-center gap-4">
        <h2>مرحبا بك , د. احمد كمال</h2>
        <div>
          <HelloIcon />
        </div>
      </div>
      <div className="mt-9 w-full flex items-center justify-center flex-col gap-4">
        <button onClick={()=>{editModal('type','join');editModal('open',true);setActive(true)}} className="mdl:min-h-[48px] min-h-[40px] rounded-[10px] bg-greenMain flex items-center justify-center gap-3 mdl:gap-5 px-10 w-[80%] md:w-fit">
          <ContractsIcon
            fill={"white"}
            className={"w-[17px] h-auto mdl:w-[22px]"}
          />
          <p className="text-white font-Bold text-[14px] mdl:text-[20px] mdl:block hidden">
            إرسال طلب الانضمام للفريق
          </p>
          <p className="text-white font-Bold text-[14px] mdl:text-[20px]  block mdl:hidden">
            إرسال طلب عقد
          </p>
        </button>
        <button disabled className="mdl:min-h-[48px] min-h-[40px] rounded-[10px] bg-grayDark flex items-center justify-center gap-3 mdl:gap-5 px-10 w-[80%] md:w-fit">
          <ContractsIcon
            fill={"white"}
            className={"w-[17px] h-auto mdl:w-[22px]"}
          />
          <p className="text-white font-Bold text-[14px] mdl:text-[20px] mdl:block hidden">
            إرسال طلب الانضمام للفريق
          </p>
          <p className="text-white font-Bold text-[14px] mdl:text-[20px]  block mdl:hidden">
            إرسال طلب عقد
          </p>
        </button>
        <h3 className=" font-Bold text-[14px] mdl:text-[20px] text-center max-w-[90%] mx-auto">
          لقد تم ارسال طلب الانضمام لفريق سبيكترا الطبى الى المشرف يمكنك متابعة
          الطلب من التنبيهات الخاصة بك او قسم العقود فى الشريط الجانبي{" "}
        </h3>
      </div>
    </div>
  );
}

export default HeaderMain;
