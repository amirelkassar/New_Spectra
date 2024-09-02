"use client";
import React, { useState } from "react";
import Card from "@/components/card";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import Button from "@/components/button";
function Page() {
  const [selectShow, setSelectShow] = useState(true);
  return (
    <Card>
      <div className="flex items-center gap-4 lg:gap-7 mb-12">
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.SERVICES}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%] flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="text-[36px]"> الخدمات</h2>
      </div>
      <div>
        <div className="mdl:mb-12 mb-7">
          <h2 className="text-[14px] mb-4 mdl:text-[20px]">اختر نوع الخدمة </h2>
          <div className="flex items-center justify-center gap-8">
            <div
              className={`flex-1 justify-center  h-[122px] cursor-pointer duration-200 hover:shadow-md md:max-w-[380px] px-4 mdl:px-7 py-4 mdl:py-6 rounded-[10px] flex flex-col mdl:flex-row items-center gap-5 mdl:gap-8 ${
                selectShow ? "bg-greenMain" : "bg-blueLight"
              }`}
              onClick={() => {
                setSelectShow(true);
              }}
            >
              <h3
                className={`text-[14px]  mdl:text-[20px] font-Bold ${
                  selectShow ? "text-white" : ""
                } `}
              >
                تعرض
              </h3>
            </div>
            <div
              className={`flex-1  justify-center  h-[122px] cursor-pointer duration-200 hover:shadow-md md:max-w-[380px] px-4 mdl:px-7 py-4 mdl:py-6 rounded-[10px] flex flex-col mdl:flex-row items-center gap-5 mdl:gap-8 ${
                !selectShow ? "bg-greenMain" : "bg-blueLight"
              } `}
              onClick={() => {
                setSelectShow(false);
              }}
            >
              <h3
                className={`text-[14px]  mdl:text-[20px] font-Bold ${
                  !selectShow ? "text-white" : ""
                } `}
              >
                داخلية
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center gap-3">
        {selectShow ? (
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
            className="w-full duration-300 hover:shadow-md text-white bg-greenMain flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
          >
            التالى
          </Link>
        ) : (
          <Button
            className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
            variant="secondary"
          >
            تأكيد
          </Button>
        )}
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </Card>
  );
}

export default Page;
