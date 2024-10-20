import React from "react";
import doctorImg from "@/assets/images/doctor.png";
import childImg from "@/assets/images/child.png";
import Statue from "@/components/status";
import Image from "next/image";
import Card from "@/components/card";

const DetectData = {
  images: [doctorImg, childImg, doctorImg],
  child: "محمد عبدالله",
  doctor: "احمد محمد",
  spec: "احمد محمد",
  state: "تمت",
  date: "20/4/2024",
  time: "10:00 مساءً",
};
console.log(DetectData.images);

function DetectDetails() {
  return (
    <Card>
      <div className="flex items-center mb-7 justify-between gap-6">
        <h3 className="text-base mdl:text-lg font-Bold">كشف 1 </h3>
        <Statue statue={DetectData.state} />
      </div>
      <div className="flex items-center gap-10 mdl:gap-14 lg:px-7">
        <div className="flex">
          {DetectData.images.map((item, i) => {
            return (
              <Image
                key={i}
                alt=""
                src={item}
                className=" size-10 mdl:size-[70px] rounded-full -me-4 object-cover "
              />
            );
          })}
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-6">
              <h4 className="text-sm mdl:text-lg font-Regular min-w-[100px] mdl:min-w-[130px]">الطفل/</h4>
              <p className="text-sm mdl:text-lg font-Bold">{DetectData.child}</p>
            </li>
            <li className="flex items-center gap-6">
              <h4 className="text-sm mdl:text-lg font-Regular min-w-[100px] mdl:min-w-[130px]">الطبيب/</h4>
              <p className="text-sm mdl:text-lg font-Bold">{DetectData.doctor}</p>
            </li>
            <li className="flex items-center gap-6">
              <h4 className="text-sm mdl:text-lg font-Regular min-w-[100px] mdl:min-w-[130px]">الاخصائى/</h4>
              <p className="text-sm mdl:text-lg font-Bold">{DetectData.spec}</p>
            </li>
            <li className="flex items-center gap-6">
              <h4 className="text-sm mdl:text-lg font-Regular min-w-[100px] mdl:min-w-[130px]">
                {DetectData.date}
              </h4>
              <p className="text-sm mdl:text-lg font-Regular">{DetectData.time}</p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default DetectDetails;
