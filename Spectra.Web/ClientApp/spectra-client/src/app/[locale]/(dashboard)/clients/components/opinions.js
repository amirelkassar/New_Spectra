import StarGoldIcon from "@/assets/icons/starGold";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Opinions() {
  return (
    <div className="opinions ">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
       
        breakpoints={{
            0: {
              slidesPerView: 1.3,
            },
            800: {
              spaceBetween: 20,
            }
          }}
        className="mySwiper max-w-[100%]"
      >
        <SwiperSlide className="flex justify-center">
          <div className=" flex flex-col gap-4 lg:gap-10 px-[14px] lg:px-[26px] pb-[14px] lg:pb-[26px] pt-[16px] lg:pt-[30px] bg-[#F1F1F1] rounded-[20px] w-[100%]">
            <div className="flex justify-between gap-4 flex-wrap  items-start max-w-[100%]">
              <h2 className="font-bold text-[16px] lg:text-[24px] text-[#010036]  ">
                م *******
              </h2>
              <div dir="ltr" className="flex gap-[2px] lg:gap-2 items-center">
                <p className="font-bold text-[14px] lg:text-[20px]">4.9</p>
                <StarGoldIcon className={"w-[16px] h-[16px ]"} />
              </div>
            </div>
            <div className=" bg-white pt-3 lg:pt-5 px-4 lg:px-6 pb-3 lg:pb-5 rounded-[16px] min-h-[50px] lg:min-h-[84px] h-auto w-[100%]">
              <p className="text-[14px] lg:text-[20px] text-[#010036]">
                {" "}
                ممتاز الله يرفع قدره
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className=" flex flex-col gap-4 lg:gap-10 px-[14px] lg:px-[26px] pb-[14px] lg:pb-[26px] pt-[16px] lg:pt-[30px] bg-[#F1F1F1] rounded-[20px] w-[100%]">
            <div className="flex justify-between gap-4 flex-wrap  items-start max-w-[100%]">
              <h2 className="font-bold text-[16px] lg:text-[24px] text-[#010036]  ">
                م *******
              </h2>
              <div dir="ltr" className="flex gap-[2px] lg:gap-2 items-center">
                <p className="font-bold text-[14px] lg:text-[20px]">4.9</p>
                <StarGoldIcon className={"w-[16px] h-[16px ]"} />
              </div>
            </div>
            <div className=" bg-white pt-3 lg:pt-5 px-4 lg:px-6 pb-3 lg:pb-5 rounded-[16px] min-h-[50px] lg:min-h-[84px] h-auto w-[100%]">
              <p className="text-[14px] lg:text-[20px] text-[#010036]">
                {" "}
                ممتاز الله يرفع قدره
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className=" flex flex-col gap-4 lg:gap-10 px-[14px] lg:px-[26px] pb-[14px] lg:pb-[26px] pt-[16px] lg:pt-[30px] bg-[#F1F1F1] rounded-[20px] w-[100%]">
            <div className="flex justify-between gap-4 flex-wrap  items-start max-w-[100%]">
              <h2 className="font-bold text-[16px] lg:text-[24px] text-[#010036]  ">
                م *******
              </h2>
              <div dir="ltr" className="flex gap-[2px] lg:gap-2 items-center">
                <p className="font-bold text-[14px] lg:text-[20px]">4.9</p>
                <StarGoldIcon className={"w-[16px] h-[16px ]"} />
              </div>
            </div>
            <div className=" bg-white pt-3 lg:pt-5 px-4 lg:px-6 pb-3 lg:pb-5 rounded-[16px] min-h-[50px] lg:min-h-[84px] h-auto w-[100%]">
              <p className="text-[14px] lg:text-[20px] text-[#010036]">
                {" "}
                ممتاز الله يرفع قدره
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className=" flex flex-col gap-4 lg:gap-10 px-[14px] lg:px-[26px] pb-[14px] lg:pb-[26px] pt-[16px] lg:pt-[30px] bg-[#F1F1F1] rounded-[20px] w-[100%]">
            <div className="flex justify-between gap-4 flex-wrap  items-start max-w-[100%]">
              <h2 className="font-bold text-[16px] lg:text-[24px] text-[#010036]  ">
                م *******
              </h2>
              <div dir="ltr" className="flex gap-[2px] lg:gap-2 items-center">
                <p className="font-bold text-[14px] lg:text-[20px]">4.9</p>
                <StarGoldIcon className={"w-[16px] h-[16px ]"} />
              </div>
            </div>
            <div className=" bg-white pt-3 lg:pt-5 px-4 lg:px-6 pb-3 lg:pb-5 rounded-[16px] min-h-[50px] lg:min-h-[84px] h-auto w-[100%]">
              <p className="text-[14px] lg:text-[20px] text-[#010036]">
                {" "}
                ممتاز الله يرفع قدره
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Opinions;
