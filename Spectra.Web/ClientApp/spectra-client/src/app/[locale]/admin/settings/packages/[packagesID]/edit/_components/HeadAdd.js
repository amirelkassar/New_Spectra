import BackIcon from "@/assets/icons/back";
import LogoOnlyIcon from "@/assets/icons/logo-only-icon";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function HeadAdd({ switchPackages, setSwitchPackages }) {
  return (
    <Card>
      <div className="flex items-center gap-2 mdl:gap-5 mb-7 mdl:mb-9">
        <Link href={ROUTES.ADMIN.SETTINGS.PACKAGES.DASHBOARD}>
          <BackIcon className={"w-8 h-auto mdl:w-11"} />
        </Link>
        <h2 className="text-base mdl:text-2xl font-Bold">اضافة باقة</h2>
      </div>
      <h3 className=" text-base mdl:text-2xl font-Regular mb-3 mdl:mb-9 mdl:ps-12 ">
        اختر نوع الباقة
      </h3>
      <div className="flex items-center gap-6 mdl:ps-8 mdl:mb-6">
        <button
          onClick={() => {
            setSwitchPackages("spectra");
          }}
          className={`flex py-2 mdl:py-4 items-center justify-center gap-4 w-[176px] mdl:w-[250px] rounded-2xl border-2  ${
            switchPackages === "spectra"
              ? "border-greenMain"
              : "border-blueLight"
          } duration-200 hover:shadow-md`}
        >
          <LogoOnlyIcon className="w-[22px] md:w-8 h-auto" />
          <p className="font-Bold text-sm mdl:text-xl">باقات سبيكترا</p>
        </button>
        <button
          onClick={() => {
            setSwitchPackages("flexible");
          }}
          className={`flex py-2 mdl:py-4 items-center justify-center gap-4 w-[176px] mdl:w-[250px] rounded-2xl border-2   ${
            switchPackages === "flexible"
              ? "border-greenMain"
              : "border-blueLight"
          } duration-200 hover:shadow-md`}
        >
          <LogoOnlyIcon className="w-[22px] md:w-8 h-auto" />
          <p className="font-Bold text-sm mdl:text-xl">باقات مرنة </p>
        </button>
      </div>
    </Card>
  );
}

export default HeadAdd;
