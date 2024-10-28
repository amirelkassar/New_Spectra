import Image from "next/image";
import React from "react";
import docImg from "@/assets/images/doctor.png";
import StarGoldIcon from "@/assets/icons/starGold";
const doctor = {
  name: "أحمد عبد كامل",
  jobTitle: "طبيب نفسي",
  experience: "5 سنوات خبرة",
  rating: 9.5,
  image: docImg,
};

function CardDocManger({ data, active = false, hover = false }) {
  return (
    <div
      className={`border-2  items-center ${
        active ? "border-greenMain bg-blueLight" : "border-blueLight"
      } 
      ${
        hover ? " cursor-pointer hover:shadow-md hover:border-greenMain/60" : ""
      }
      rounded-xl duration-300 p-2 md:p-3 h-[88px] md:h-[114px] flex-1 w-full flex gap-2`}
    >
      <Image
        src={doctor.image}
        alt="doctor"
        width={800}
        height={800}
        className=" w-[56px] md:w-[80px] h-[56px] md:h-[80px] object-cover object-top rounded-lg"
      />
      <div className="flex-1 h-full max-w-[calc(100%-56px)] justify-between flex flex-col gap-1 ">
        <h4 className="font-Bold text-xs mdl:text-base truncate max-w-full ">
          احمد محمد كمال
        </h4>
        <h5 className=" text-xs mdl:text-base truncate max-w-full">
          طبيب نفسى
        </h5>

        <div className="flex items-center   gap-1 border px-1 border-grayDark rounded-3xl w-fit">
          <p className="text-grayDark text-xs font-Bold">9.5</p>
          <StarGoldIcon className="w-3 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default CardDocManger;
