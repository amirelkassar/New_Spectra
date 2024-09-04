"use client";
import React, { useState } from "react";
import Card from "@/components/card";
import { Link, usePathname } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import { useSearchParams } from "next/navigation";
import TvIcon from "@/assets/icons/tv";
import InsideIcon from "@/assets/icons/inside";
import ServicesShow from "../components/ServicesShow";
import ServicesNotShow from "../components/ServicesNotShow";
function Page() {
  const [selectShow, setSelectShow] = useState(true);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.get("show"));

  return (
    <Card>
      {searchParams.get("show") ? (
        searchParams.get("show") === "true" ? (
          <ServicesShow />
        ) : (
          <ServicesNotShow />
        )
      ) : (
        <div>
          <div className="flex items-center gap-4 lg:gap-7 mb-12">
            <Link
              href={ROUTES.ADMIN.SETTINGS.CONTENT.SERVICES}
              className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
            >
              <BackIcon className={"w-full h-full"} />
            </Link>
            <h2 className="text-base lg:text-xl"> اضافة خدمة</h2>
          </div>

          <div className="mdl:mb-12 mb-7 mt-24 lg:mt-5">
            <div className="flex  justify-center gap-8 flex-wrap">
              <Link
                href={pathName + "?show=true"}
                className={`flex-1 justify-center min-w-[230px] bg-blueLight flex-col  h-auto cursor-pointer duration-200 hover:shadow-md md:max-w-[380px] px-4 mdl:px-7 py-4 mdl:py-14 rounded-xl flex  items-center lg:gap-5 mdl:gap-5 `}
              >
                <TvIcon className={"w-[56px] lg:w-[90px]"} />
                <h3 className={`text-[14px]  mdl:text-[20px] font-Bold `}>
                  خدمات تعرض
                </h3>
              </Link>
              <Link
                href={pathName + "?show=false"}
                className={`flex-1  justify-center min-w-[230px] bg-blueLight  h-auto cursor-pointer duration-200 hover:shadow-md md:max-w-[380px] px-4 mdl:px-7 py-4 mdl:py-14 rounded-xl flex flex-col items-center lg:gap-5 mdl:gap-5`}
                onClick={() => {
                  setSelectShow(false);
                }}
              >
                <InsideIcon className={"w-[56px] lg:w-[90px]"} />
                <h3
                  className={`text-[14px]  mdl:text-[20px] font-Bold 
          } `}
                >
                  خدمات داخلية
                </h3>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default Page;
