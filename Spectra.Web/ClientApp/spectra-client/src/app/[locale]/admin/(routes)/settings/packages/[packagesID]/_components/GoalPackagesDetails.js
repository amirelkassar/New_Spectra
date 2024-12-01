import Card from "@/components/card";
import React from "react";
const list = [
  "تطور الجانب الاجتماعى",
  "تطور الجانب الاجتماعى",
  "تطور الجانب الاجتماعى",
  "تطور الجانب الاجتماعى",
];
function GoalPackagesDetails() {
  return (
    <Card className={"mdl:px-8 mdl:!pt-8 mdl:!pb-12"}>
      <h3 className=" mb-3 mdl:mb-7 text-xs mdl:text-base">الهدف من الباقة</h3>
      <ul className="mt-5 flex flex-col gap-5 mdl:max-w-[80%]">
        {list.map((item, index) => (
          <li key={index} className="flex items-center  relative  mb-2 gap-4">
            <span className=" block size-2 rounded-full bg-black "></span>
            <p className="font-Bold text-sm mdl:text-xl">{item}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default GoalPackagesDetails;
