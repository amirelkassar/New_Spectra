import CopyIcon from "@/assets/icons/copy";
import ShareCodeIcon from "@/assets/icons/shareCode";
import TrueIcon from "@/assets/icons/true";
import {  CopyButton } from "@mantine/core";
import React from "react";

function BookingCode() {
  return (
    <div className="bg-blueLight rounded-[10px] py-8 mdl:px-16 px-10 mdl:py-28">
      <h2 className="text-[24px] font-Bold mdl:mt-6 text-center mb-5 mdl:mb-10 mdl:text-[36px] leading-[36px] mdl:leading-[54px]">
        امنح مرضاك كود الإحالة، واستمتع بزيادة في نسبتك !
      </h2>
      <h3 className="text-[12px]  text-center mb-1  mdl:text-[16px] max-w-[640px] mx-auto">
        استخدم الرابط أدناه لإحالة مرضاك لحجز الاستشارات! بمجرد القيام بذلك ،
        سنكافئك بزيادة 10٪ على نسبتك.
      </h3>
      <h3 className="text-[12px]  text-center mb-3 mdl:mb-7 mdl:text-[16px] max-w-[640px] mx-auto">
        سيحصل الاخر أيضا على خصم 10٪ على حجز الاستشارة.
      </h3>
      <p className="text-[14px]  text-center mb-3 mdl:mb-7 mdl:text-[20px] max-w-[640px] mx-auto">
        قم بنسخ او مشاركة الكود الخاص بك
      </p>
      <div className="flex flex-col mdl:flex-row items-center justify-center mdl:justify-between gap-4 mdl:gap-7 flex-wrap border border-black py-3 px-7 rounded-[10px] mb-6 mdl:mb-0">
        <div>
          <h3 className="text-[12px] text-center mdl:text-start mb-1 mdl:mb-4 mdl:text-[16px]">
            كود الحجز
          </h3>
          <p className="text-[14px] font-Bold  mdl:text-[20px]">
            DR-AHMED-2024
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 max-w-[260px] ">
          <button className="flex h-[38px] mdl:h-[48px] items-center justify-center gap-3 px-4 py-2 mdl:py-3 rounded-[10px] bg-greenMain flex-1">
            <ShareCodeIcon className={'h-auto w-[19px] mdl:w-[24px]'}/>
            <p className="text-white font-Bold text-[14px] mdl:text-[20px]">
              مشاركة
            </p>
          </button>
          <CopyButton value="https://mantine.dev">
            {({ copied, copy }) => (
              <button
                className="flex h-[38px] mdl:h-[48px] items-center justify-center gap-3 px-4 py-2 mdl:py-3 rounded-[10px] bg-greenMain flex-1"
                onClick={copy}
              >
                 {copied ? <TrueIcon /> : <CopyIcon />}
                
                <p className="text-white font-Bold text-[14px] mdl:text-[20px]">
                نسخ
                </p>
              </button>
            )}
          </CopyButton>
        </div>
      </div>
    </div>
  );
}

export default BookingCode;
