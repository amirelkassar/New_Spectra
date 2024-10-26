import MenuActions from "@/components/menu-actions";
import React from "react";

function ReportsView({ dataCard }) {
  return (
    <div className="flex justify-between gap-4 pb-5 border-b-2 border-grayLight">
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-4">
          <h3 className="min-w-12 font-Regular text-xs ">الاسم</h3>
          <p className="font-Bold text-xs ">{dataCard.name}</p>
        </li>
        <li className="flex items-center gap-4">
          <h3 className="min-w-12 font-Regular text-xs ">التاريخ</h3>
          <p className="font-Bold text-xs ">{dataCard.date}</p>
        </li>
        <li className="flex items-center gap-4">
          <h3 className="min-w-12 font-Regular text-xs ">المريض</h3>
          <p className="font-Bold text-xs ">{dataCard.patient} </p>
        </li>
      </ul>
      <MenuActions/>
    </div>
  );
}

export default ReportsView;
