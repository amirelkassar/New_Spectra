import BackIcon from "@/assets/icons/back";
import ImagePlaceholderIcon from "@/assets/icons/image-placeholder";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function HeaderInfoClient() {
  return (
    <div className="col-span-1 lg:col-span-2 bg-white  px-6 lg:pb-12 pt-4 lg:rounded-xl relative">
      <div className="flex items-center justify-between gap-4 mb-6 ">
        <div className="flex   items-center gap-4 ">
          <Link
            href={ROUTES.DOCTOR.CLIENTS.DASHBOARD}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h1 className="headTitleDash "> التفاصيل </h1>
        </div>
        <MenuActions />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className=" w-[100%] lg:w-auto lg:size-24 rounded-full overflow-hidden flex items-center justify-center">
            <label htmlFor="file" className="cursor-pointer">
              <ImagePlaceholderIcon />
            </label>
            <input id="file" type="file" className="hidden" />
          </div>
          <div className="flex flex-row lg:flex-col items-center lg:items-start lg:justify-around py-4 lg:py-0">
            <p className="text-nowrap w-[110px] md:w-auto text-[13px] md:text-[16px] flex items-center gap-1">
              الاسم<span className="lg:hidden inline-block">/</span>
            </p>
            <h2 className="text-[13px] md:text-[16px] font-bold">
              {" "}
              عبدالله الشيخ
            </h2>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center lg:items-start lg:justify-around">
          <p className="text-nowrap w-[110px] md:w-auto text-[13px] md:text-[16px] flex items-center gap-1">
            اخر دخول <span className="lg:hidden inline-block">/</span>
          </p>
          <h2 className="text-[13px] md:text-[16px] font-bold">25/4/2024</h2>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfoClient;
