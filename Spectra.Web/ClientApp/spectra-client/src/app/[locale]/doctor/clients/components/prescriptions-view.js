import PillsIcon from "@/assets/icons/pills";
import React from "react";

function PrescriptionsView({ dataCard }) {
  return (
    <div className="flex gap-4 pb-5 border-b-2 border-grayLight">
      <div className="flex bg-blueLight p-2 size-[38px] rounded-full items-center mt-1 justify-center ">
        <PillsIcon />
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-4">
          <h3 className="min-w-12 font-Regular text-xs ">الاسم</h3>
          <p className="font-Bold text-xs ">{dataCard.therapy}</p>
        </li>
        <li className="flex items-center gap-4">
          <h3 className="min-w-12 font-Regular text-xs ">التاريخ</h3>
          <p className="font-Bold text-xs ">{dataCard.date}</p>
        </li>
        <li className="flex items-center gap-4">
          <h3 className="min-w-12 font-Regular text-xs ">المريض</h3>
          <p className="font-Bold text-xs ">{dataCard.nameFamily} </p>
        </li>
      </ul>
    </div>
  );
}

export default PrescriptionsView;
