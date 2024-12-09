import BackIcon from "@/assets/icons/back";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";
import CardAppointmentWork from "./_components/cardAppointmentWork";
const dataTime = [
  {
    id: 0,
    day: "السبت",
    from: "00 :8 ص",
    to: "00 :4 م",
  },
  {
    id: 1,
    day: "الاحد",
    from: "00 :8 ص",
    to: "00 :4 م",
  },
  {
    id: 2,
    day: "الاثنين",
    from: "00 :8 ص",
    to: "00 :4 م",
  },
  {
    id: 3,
    day: "الثلاثاء",
    from: "00 :8 ص",
    to: "00 :4 م",
  },
];
function page() {
  return (
    <Card className={"h-full"}>
      <div className="flex items-center gap-3 mdl:gap-8 flex-wrap mb-11">
        <div className="flex items-center gap-3">
       <Link href={ROUTES.DOCTOR.APPOINTMENTS}>
       <BackIcon className={"w-[30px] h-[30px] mdl:w-11 mdl:h-11"} />
       </Link>
          <h2 className=" text-base mdl:text-xl">مواعيد العمل الخاصة بك</h2>
        </div>
        <Link
          href={ROUTES.DOCTOR.APPOINTMENTSWORKADD}
          className="flex font-bold items-center justify-center gap-[8px] py-1 md:py-2 px-[18px] rounded-[12px] bg-[#E9F7FF] lg:h-[48px] h-[40px]"
        >
          <PlusInsideCircleIcon />
          <p className="text-[12px] md:text-[16px] font-bold"> أضافة ميعاد </p>
        </Link>
      </div>
      <div className="flex flex-col gap-5 max-w-[630px] mdl:mx-3">
        {dataTime.map((item,i) => {
          return (
            <CardAppointmentWork key={i} data={item}/>
          );
        })}
      </div>
    </Card>
  );
}

export default page;
