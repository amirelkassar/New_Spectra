import BackIcon from "@/assets/icons/back";
import Package1Icon from "@/assets/icons/package1";
import Package2Icon from "@/assets/icons/package2";
import Package3Icon from "@/assets/icons/package3";
import Package4Icon from "@/assets/icons/package4";
import Card from "@/components/card";
import Input from "@/components/input";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React, { useState } from "react";
const logoPackages = [
  {
    id: 1,
    logo: <Package1Icon className={'max-h-full w-auto'} />,
  },
  {
    id: 2,
    logo: <Package2Icon className={'max-h-full w-auto'} />,
  },
  {
    id: 3,
    logo: <Package3Icon className={'max-h-full w-auto'} />,
  },
  {
    id: 4,
    logo: <Package4Icon className={'max-h-full w-auto'} />,
  },
];
function InfoPackage() {
  const [logo, setLogo] = useState(logoPackages[0].id);
  return (
    <Card>
      <div className="flex items-center gap-2 mdl:gap-5 mb-7 mdl:mb-9">
        <Link href={ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD}>
          <BackIcon className={"w-8 h-auto mdl:w-11"} />
        </Link>
        <h2 className="text-base mdl:text-2xl font-Bold">اضافة باقة</h2>
      </div>
      <div className="flex flex-col mdl:flex-row gap-5 mdl:gap-6 w-full md:mb-6 md:py-4 md:px-5">
        <Input
          label={"اسم الباقة "}
          labelClassName={"text-[12px] md:text-[16px]"}
          containerClassName={"flex-1"}
        />
        <Input
          label={"سعر الباقة"}
          labelClassName={"text-[12px] md:text-[16px]"}
          containerClassName={"flex-1"}
        />
      </div>
      <div className="mb-5 mdl:mb-11 mt-4 mdl:mt-8">
        <h3 className="text-xs mdl:text-base font-Regular mb-3">
          يمكنك اختيار رمز للباقة
        </h3>
        <div className="flex gap-5 flex-wrap">
          {logoPackages.map((item, index) => (
            <div
              key={index}
              onClick={() => setLogo(item.id)}
              className={`${
                logo === item.id ? " border-greenMain" : "border-blueLight"
              } size-12 mdl:size-[60px] bg-blueLight rounded-xl border-2 cursor-pointer hover:shadow-sm duration-300 min-w-12 mdl:min-w-[60px] flex items-center justify-center p-2`}
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default InfoPackage;
