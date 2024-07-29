import CopyIcon from "@/assets/icons/copy";
import CopyGreenIcon from "@/assets/icons/copyGreen";
import TrueIcon from "@/assets/icons/true";
import { CopyButton } from "@mantine/core";
import React from "react";

function CopyCode() {
  return (
    <div className=" flex flex-col mdl:gap-4 flex-1  w-full border-y border-y-grayDark mdl:border-none py-5 mdl:p-0">
      <div className="flex bg-white  items-center justify-between gap-4 mdl:gap-7   py-4 px-1 mdl:px-7 mdl:rounded-[10px] ">
        <div>
          <h3 className="text-[12px]  mb-1 mdl:mb-4 mdl:text-[16px]">
            كود الحجز
          </h3>
          <p className="text-[14px] font-Bold  mdl:text-[20px]">
            DR-AHMED-2024
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 max-w-[260px] ">
          <button className="flex h-[38px] mdl:h-[48px] items-center justify-center gap-3 px-4 py-2 mdl:py-3 rounded-[10px] bg-blueLight flex-1">
            <CopyGreenIcon className={" size-[13px] mdl:size-[23px]"} />

            <p className="text-greenMain font-Bold text-[14px] mdl:text-[20px]">
              نسخ
            </p>
          </button>
        </div>
      </div>
      <div className="flex bg-white  items-center justify-between gap-4 mdl:gap-7   py-4 px-1 mdl:px-7 mdl:rounded-[10px] ">
        <div>
          <h3 className="text-[12px]  mb-1 mdl:mb-4 mdl:text-[16px]">
            رابط الحجز
          </h3>
          <a
            target="_blank"
            href="https://spectra-sa.com/Home/about"
            className="text-[14px] font-Bold  mdl:text-[20px] underline"
          >
            مركز سبيكترا الطبي • About • (spectra-sa.com)
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 max-w-[260px] ">
          <button className="flex h-[38px] mdl:h-[48px] items-center justify-center gap-3 px-4 py-2 mdl:py-3 rounded-[10px] bg-blueLight flex-1">
            <CopyGreenIcon className={" size-[13px] mdl:size-[23px]"} />

            <p className="text-greenMain font-Bold text-[14px] mdl:text-[20px]">
              نسخ
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CopyCode;
