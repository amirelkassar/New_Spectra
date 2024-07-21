import StarWhiteIcon from '@/assets/icons/starWhite'
import Image from 'next/image'
import React from 'react'
import docrotImg from "@/assets/images/placeholder-person.png";
function DoctorInfo({data}) {
  return (
    <div className="lg:max-w-[260px] flex flex-row lg:flex-col gap-1 ">
    <div className="">
      <div className="w-[120px] lg:w-[180px] flex justify-center h-[88px] lg:h-[146px] rounded-[50%] relative">
        <Image
          src={docrotImg}
          width={"146px"}
          height={"100%"}
          className="h-[100%] w-[88px] lg:w-[146px]  object-cover rounded-[50%] object-top"
          alt="doctor"
          priority
        />
        <div
          dir="ltr"
          className=" w-fit flex gap-2 lg:gap-1 items-center justify-center py-1 px-2 lg:px-5 bg-greenMain text-white rounded-[15px] h-5 lg:h-[32px] absolute bottom-0 right-3 lg:right-[0px] "
        >
          <p className="font-bold text-[12px] lg:text-[20px] text-white">{data.star}</p>

          <StarWhiteIcon className={'w-[8px] h-[8px]'} />
        </div>
      </div>
      <p className="text-[12px] text-center lg:text-start "> {data.rating} تقييم</p>
    </div>
    <div>
      <h2 className="lg:text-center text-start text-[14px] md:text-[20px] font-bold">
        {data.name}
      </h2>
      <p className=" lg:text-center text-start text-[14px] md:text-[20px] mb-4 lg:mb-6 font-normal">
        {" "}
        {data.spec}{" "}
      </p>
      <h2 className="lg:text-center text-start text-[12px] md:text-[16px] mb-1 font-normal ">
        كود الحجز / الاحالة
      </h2>
      <p className=" lg:text-center text-start text-[14px] md:text-[16px]  font-bold">
        {" "}
        {data.bookingCode}{" "}
      </p>
    </div>
  </div>
  )
}

export default DoctorInfo