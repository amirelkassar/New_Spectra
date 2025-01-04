import Card from "@/components/card";
import React from "react";
import AddTimes from "../_components/addTimes";
import CardAppointmentWork from "../_components/cardAppointmentWork";
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
    <div className="flex flex-col mdl:gap-8">
      <Card>
        <AddTimes/>
      </Card>
      <Card>
        <div className="flex flex-col gap-5 max-w-[630px] mdl:mx-3 border-t-2 mdl:border-none pt-6 mdl:pt-0 border-blueLight">
          {dataTime.map((item, i) => {
            return (
              <CardAppointmentWork key={i} data={item}/>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default page;
