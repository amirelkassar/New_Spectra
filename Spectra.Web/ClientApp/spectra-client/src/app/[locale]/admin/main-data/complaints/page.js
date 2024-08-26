import React from "react";
import AddMainData from "../_components/add-drugs";
import ROUTES from "@/routes";
const textArray = [
  "غثيان مع الألم بالرأس",
  "طعم جلدي",
  "تلقي نتائج اختبار غير صحيحة.",
  "الأم بالبطن",
  "غثيان مع الألم بالرأس",
  "طعم جلدي",
  "تلقي نتائج اختبار غير صحيحة.",
  "الأم بالبطن",
  "غثيان مع الألم بالرأس",
  "طعم جلدي",
  "تلقي نتائج اختبار غير صحيحة.",
  "الأم بالبطن",
  "غثيان مع الألم بالرأس",
  "طعم جلدي",
  "تلقي نتائج اختبار غير صحيحة.",
  "الأم بالبطن",
];

function page() {
  return (
    <div>
      <div className="flex mb-10 flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash"> الشكاوى العامة</h2>
        <AddMainData
          title={" أضافة شكوى"}
          path={ROUTES.ADMIN.DATAMAIN.DRUGSADD}
        />
      </div>
      <div className="flex gap-x-6 flex-wrap gap-y-5">
        {textArray.map((item, index) => {
          return (
            <p
              key={index}
              className="bg-blueLight rounded-xl duration-300 hover:shadow-md px-8 py-7 text-center font-Bold"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default page;
