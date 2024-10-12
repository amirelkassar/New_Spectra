import Image from "next/image";
import React from "react";
import imgDoctor from "@/assets/images/doctor.png";
import Button from "./button";
import VideoIcon from "@/assets/icons/video";
function SessionDate() {
  return (
    <div className="flex  justify-between gap-8 mdl:max-w-[90%] mx-auto rounded-2xl px-9 py-6 w-full bg-gradient-to-r from-[#EFFAFC] to-[#ACDDF9]">
      <div>
        <h2 className="text-lg font-Bold mb-5">موعد الجلسة النفسية </h2>
        <div className="flex items-center gap-10 mb-6">
          <p className="bg-white p-1 rounded-lg flex items-center justify-center font-Regular text-base w-fit min-w-[110px]">
            5/5/2024
          </p>
          <p className="bg-white p-1 rounded-lg flex items-center justify-center font-Regular text-base w-fit min-w-[110px]">
            6 :00 م
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            alt="person"
            src={imgDoctor}
            className=" size-11 rounded-full object-cover"
          />
          <h3 className="font-Bold text-base">عبدالله الشيخ</h3>
        </div>
      </div>
      <div className="me-3">
        <div className=" w-[96px] h-[96px] flex items-center justify-center mb-3 ms-auto">
          <div className="w-[56px] relative h-[56px] rounded-full flex items-center justify-center bg-greenMain">
            <div className="w-[96px] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 h-[96px] animate-pulse rounded-full flex items-center justify-center bg-[#01003608]"></div>
            <div className="w-[76px] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 h-[76px] rounded-full delay-100 animate-pulse flex items-center justify-center bg-[#0100360A]"></div>
            <VideoIcon />
          </div>
        </div>

        <Button
          variant="secondary"
          className="font-Bold text-lg w-[170px] h-11"
        >
          انضمام
        </Button>
      </div>
    </div>
  );
}

export default SessionDate;
