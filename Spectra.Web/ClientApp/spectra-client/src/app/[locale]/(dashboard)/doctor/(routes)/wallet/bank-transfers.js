import TransfersIcon from "@/assets/icons/transfers";
import React from "react";

function BankTransfers() {
  return (
    <div className="min-w-[350px]  flex-1 bg-white md:px-8 md:py-8  rounded-[10px] ">
      <h2 className="mb-4 mdl:mb-6 text-[14px] font-Bold mdl:text-[20px]">
        جميع التحويلات
      </h2>
      <h3 className="mb-6 text-[14px] mdl:text-[20px] font-Bold bg-greenMain py-1 px-7 rounded-[10px] text-white w-fit">
        اليوم
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-6 pb-5 border-b border-grayLight">
          <div className="flex gap-5 md:gap-7 items-start">
            <div className="bg-greenMain flex items-center justify-center px-2 py-3 rounded-[10px] size-[44px] md:size-[50px]">
              <TransfersIcon className={"h-auto"} />
            </div>
            <div>
              <h3 className="text-[12px] mdl:text-[16px] mb-2 text-grayDark font-Bold">
                تحويل 100.00 $
              </h3>
              <h4 className="text-[12px] mdl:text-[16px] ">
                لقد تم تحويل مبلغ 100.00$ من
                <br />
                <span className="font-Bold"> عبدالله الشيخ </span>
              </h4>
            </div>
          </div>
          <div className=" mt-2 ">
            <p className="text-[12px] mb-1 text-end">الان</p>
            <p className="text-[12px] text-grayDark">8:00م</p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-6 pb-5 border-b border-grayLight">
          <div className="flex gap-5 md:gap-7 items-start">
            <div className="bg-greenMain flex items-center justify-center px-2 py-3 rounded-[10px] size-[44px] md:size-[50px]">
              <TransfersIcon className={"h-auto"} />
            </div>
            <div>
              <h3 className="text-[12px] mdl:text-[16px] mb-2 text-grayDark font-Bold">
                تحويل 100.00 $
              </h3>
              <h4 className="text-[12px] mdl:text-[16px] ">
                لقد تم تحويل مبلغ 100.00$ من
                <br />
                <span className="font-Bold"> عبدالله الشيخ </span>
              </h4>
            </div>
          </div>
          <div className=" mt-2 ">
            <p className="text-[12px] mb-1 text-end">الان</p>
            <p className="text-[12px] text-grayDark">8:00م</p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-6 pb-5 border-b border-grayLight">
          <div className="flex gap-5 md:gap-7 items-start">
            <div className="bg-greenMain flex items-center justify-center px-2 py-3 rounded-[10px] size-[44px] md:size-[50px]">
              <TransfersIcon className={"h-auto"} />
            </div>
            <div>
              <h3 className="text-[12px] mdl:text-[16px] mb-2 text-grayDark font-Bold">
                تحويل 100.00 $
              </h3>
              <h4 className="text-[12px] mdl:text-[16px] ">
                لقد تم تحويل مبلغ 100.00$ من
                <br />
                <span className="font-Bold"> عبدالله الشيخ </span>
              </h4>
            </div>
          </div>
          <div className=" mt-2 ">
            <p className="text-[12px] mb-1 text-end">2 د</p>
            <p className="text-[12px] text-grayDark">20/2/2024</p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-6 pb-5 border-b border-grayLight">
          <div className="flex gap-5 md:gap-7 items-start">
            <div className="bg-greenMain flex items-center justify-center px-2 py-3 rounded-[10px] size-[44px] md:size-[50px]">
              <TransfersIcon className={"h-auto"} />
            </div>
            <div>
              <h3 className="text-[12px] mdl:text-[16px] mb-2 text-grayDark font-Bold">
                تحويل 100.00 $
              </h3>
              <h4 className="text-[12px] mdl:text-[16px] ">
                لقد تم تحويل مبلغ 100.00$ من
                <br />
                <span className="font-Bold"> عبدالله الشيخ </span>
              </h4>
            </div>
          </div>
          <div className=" mt-2 ">
            <p className="text-[12px] mb-1 text-end">2 د</p>
            <p className="text-[12px] text-grayDark">20/2/2024</p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-6 pb-5 border-b border-grayLight">
          <div className="flex gap-5 md:gap-7 items-start">
            <div className="bg-greenMain flex items-center justify-center px-2 py-3 rounded-[10px] size-[44px] md:size-[50px]">
              <TransfersIcon className={"h-auto"} />
            </div>
            <div>
              <h3 className="text-[12px] mdl:text-[16px] mb-2 text-grayDark font-Bold">
                تحويل 100.00 $
              </h3>
              <h4 className="text-[12px] mdl:text-[16px] ">
                لقد تم تحويل مبلغ 100.00$ من
                <br />
                <span className="font-Bold"> عبدالله الشيخ </span>
              </h4>
            </div>
          </div>
          <div className=" mt-2 ">
            <p className="text-[12px] mb-1 text-end">2 د</p>
            <p className="text-[12px] text-grayDark">20/2/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankTransfers;
