import StarWhiteIcon from "@/assets/icons/starWhite";
import Image from "next/image";
import React from "react";
import signature from "@/assets/images/signature.png";
import SessionIcon from "@/assets/icons/session";
import EditIcon from "@/assets/icons/edit";
function DoctorInfo({ data }) {
  return (
    <div className=" mdl:divide-x-[2px] divide-solid mdl:divide-x-reverse flex min-h-[244px] gap-y-3 divide-grayLight flex-wrap flex-col mdl:flex-row">
      <div className="lg:max-w-[260px] flex justify-center items-center flex-col mdl:flex-row gap-3 mdl:gap-5 mdl:pe-5 mdl:self-center pb-2  ">
        <div className="w-[80px] lg:w-[104px] flex justify-center h-[80px] lg:h-[104px] rounded-[50%] relative mt-2">
          <Image
            src={data.image}
            width={"146px"}
            height={"100%"}
            className="h-full w-full  object-cover rounded-[50%] object-top"
            alt="doctor"
            priority
          />
        </div>

        <div>
          <div className="flex mdl:block justify-center gap-5 items-center">
            <h2 className=" text-[14px] md:text-[20px] font-bold">
              {data.name}
            </h2>
            <p className="  text-[14px] md:text-[20px] mb-0 lg:mb-4 font-normal">
              {" "}
              {data.spec}{" "}
            </p>
          </div>

          <div className="flex mdl:block justify-center gap-5 items-center mt-2">
            <div
              dir="ltr"
              className=" flex-1 mdl:mx-auto w-fit mdl:w-[114px] flex gap-2 lg:gap-1 items-center justify-center py-1 px-2 lg:px-5 bg-greenMain text-white rounded-[10px] h-6 lg:h-[42px]  "
            >
              <p className="font-bold text-[12px] lg:text-[20px] text-white">
                {data.star}
              </p>

              <StarWhiteIcon className={" size-[12px] mdl:size-[17px]"} />
            </div>
            <p className="text-[12px] text-center lg:text-start mdl:mt-3 flex-1">
              {" "}
              {data.rating} تقييم
            </p>
          </div>
        </div>
      </div>
      <div className="mdl:px-8 w-full mt-4 mdl:mt-0  md:min-w-[300px] flex-1  mdl:divide-y-[2px] divide-solid  divide-grayLight ">
        <div className=" flex-col flex gap-4 w-full  justify-center pb-6 max-w-[300px] mdl:max-w-full mx-auto">
          <div className="flex items-center justify-center gap-5 lg:gap-12">
            <h3 className=" flex-1 text-[12px] mdl:text-[16px]">
              خدمة الاستشارة
            </h3>
            <p className=" text-greenMain font-Bold text-[12px] mdl:text-[16px]">
              {data.service.counseling}
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 lg:gap-12">
            <h3 className=" flex-1 text-[12px] mdl:text-[16px]">
              خدمة الكشف المبكر{" "}
            </h3>
            <p className=" text-greenMain font-Bold text-[12px] mdl:text-[16px]">
              {data.service.early}
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 lg:gap-12">
            <h3 className=" flex-1 text-[12px] mdl:text-[16px]">
              خدمة الكشف المبكر{" "}
            </h3>
            <p className=" text-greenMain font-Bold text-[12px] mdl:text-[16px]">
              {data.service.early2}
            </p>
          </div>
        </div>
        <div className="pt-2 mdl:pt-5 flex flex-row-reverse mdl:flex-col justify-between gap-2  border-t-2 mdl:border-t-0 border-grayLight">
          <div className="flex items-center justify-between gap-3 flex-wrap ">
            <h3 className="text-[12px] mdl:text-[16px] mdl:block hidden">التوقيع</h3>
            <div className=" size-[38px] rounded-[10px] bg-blueLight flex items-center justify-center">
             
            </div>
          </div>
          <Image
            alt="signatureF"
            src={signature}
            width={132}
            height={61}
            className="w-[132px] h-[61px] object-contain max-w-full mdl:mt-4"
          />
        </div>
      </div>

      <div className="mdl:ps-5 pt-3 mdl:pt-0  flex border-t-2 mdl:border-t-0 border-grayLight  justify-between mdl:justify-end flex-row mdl:flex-col flex-1 divide-x-[2px] mdl:divide-x-[0px]  divide-x-reverse mdl:divide-y-[2px] divide-solid  divide-grayLight w-full mdl:max-w-[200px]">
        <div className="flex flex-col justify-center items-center gap-1 mdl:mb-2 pt-4 mdl:pt-0 flex-1 ">
          <div className=" size-[34px] mdl:size-[42px] rounded-[50%] bg-blueLight p-2 flex items-center justify-center">
            <SessionIcon />
          </div>
          <p className="text-[16px] mdl:text-[24px] font-Bold">1,250</p>
          <h3 className=" text-[12px] mdl:text-[16px]">جلسة </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mdl:pt-4 flex-1">
          <h3 className=" text-[12px] mdl:text-[16px]">رقم الاعتماد</h3>
          <p className="text-[16px] mdl:text-[24px] font-Bold">285A</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
