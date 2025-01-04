import React from "react";
import Validity from "../../../validity";
import HeaderPage from '../../../header-page';
import ROUTES from "@/routes";

function Page() {
  const dataSwitch = ["ادارة", "انشاء جديد", "تعديل", "مسح"];
  const data = {
    id: 0,
    name: "عبدالله الشيخ",
    active: true,
    email: "ahmad@gmail.com",
    date: "20/4/2024",
    job: "سكرتير",
  };
  return (
    <div className="default-page">
      <HeaderPage
        title={"الاعدادات - الأذونات - مستويات الصلاحية "}
        linkBack={ROUTES.ADMIN.SETTINGS.PERMISSIONS.USERS}
      />
      <div className="mt-3 mdl:mt-10 mb-6 mdl:mb-16">
        <ul className="flex justify-between gap-4 items-center ">
          <li className="flex-1 text-[12px] mdl:text-[20px] font-Bold">{data.name}</li>
          <li className="flex-1 text-[12px] mdl:text-[16px]">{data.job}</li>
          <li className="flex-1 text-[12px] mdl:text-[16px]">{data.date}</li>
          <li className="flex-1">
            {data.active ? (
              <div className="bg-[#F1FCFF] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px] w-fit">
                <span className=" size-3 rounded-[50%]  bg-greenMain animate-pulse z-[1] md:block hidden"></span>
                <p className="font-Bold text-[12px] md:text-[16px] text-greenMain">
                  نشط
                </p>
              </div>
            ) : (
              <div className="bg-[#FFF2F2] py-1 px-3 rounded-[10px] flex items-center justify-center gap-[10px] w-fit">
                <span className=" size-3 rounded-[50%]  bg-red  z-[1] md:block hidden"></span>
                <p className="font-Bold text-[12px] md:text-[16px] text-red">
                  منتهى
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
      <Validity dataSwitch={dataSwitch} />
    </div>
  );
}

export default Page;
