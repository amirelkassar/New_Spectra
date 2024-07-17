import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import OneOpinion from "./oneOpinion";

function Opinions({data}) {
 
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
          },
        }}
        className="mySwiper max-w-[100%]"
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={item.id} className="flex justify-center">
              <OneOpinion data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Opinions;
