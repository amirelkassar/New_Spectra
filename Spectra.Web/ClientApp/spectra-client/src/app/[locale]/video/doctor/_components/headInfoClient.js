import React from "react";

function HeadInfoClient() {
  return (
    <div className="max-w-full hidden lgl:block overflow-x-auto mb-4">
      <div className="  grid grid-cols-3 min-w-[860px] gap-2 xl:gap-4 divide-x border-x-grayLight divide-x-reverse  items-center min-h-[100px]  justify-center px-6 xl:px-14 py-4 bg-white flex-1 w-full max-w-full rounded-xl">
        <div className="">
          <h2 className="text-xs xl:text-xl mb-3 font-Bold">
            عبدالله الشيخ{" "}
            <span className="font-Regular text-xs mdl:text-sm ms-2">
              (عائلة طفل)
            </span>
          </h2>
          <p className="text-xs xl:text-base font-Regular">
            التشخيص : <span className="ms-2">طيف توحد - فرط حركة</span>
          </p>
        </div>
        <div className="  xl:ps-10  flex  border-x-grayLight  flex-col gap-4  ">
          <div className="flex items-center gap-4 xl:gap-11">
            <h2 className="text-xs xl:text-base font-Regular min-w-[68px]">
              اسم الطفل
            </h2>
            <p className="text-xs xl:text-base font-Bold">احمد عبدالله </p>
          </div>
          <div className="flex items-center gap-4 xl:gap-11">
            <h2 className="text-xs xl:text-base font-Regular min-w-[68px]">
              السن
            </h2>
            <p className="text-xs xl:text-base font-Bold">8 سنين - 3 اشهر </p>
          </div>
        </div>
        <div className="  xl:ps-10 flex border-x-grayLight flex-col gap-4 ">
          <div className="flex items-center gap-4 xl:gap-11">
            <h2 className="text-xs xl:text-base font-Regular min-w-[44px]">
              الطول
            </h2>
            <p className="text-xs xl:text-base font-Bold">90 سنتيمتر </p>
          </div>
          <div className="flex items-center gap-4 xl:gap-11">
            <h2 className="text-xs xl:text-base font-Regular min-w-[44px]">
              الطول
            </h2>
            <p className="text-xs xl:text-base font-Bold">90 سنتيمتر </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadInfoClient;
