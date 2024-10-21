import Card from "@/components/card";
import React from "react";
const listSpectra = [
  {
    id: "1",
    text: "خدمة الكشف المبكر",
  },
  {
    id: "2",
    text: "خدمة الاستشارات الفردية",
  },
  {
    id: "3",
    text: "خدمة الكشف المبكر",
  },
  {
    id: "4",
    text: "خدمة الاستشارات الفردية",
  },
  {
    id: "5",
    text: "خدمة الاستشارات الفردية",
  },
];
function ContentSpectraView() {
  const countOccurrences = () => {
    return listSpectra.reduce((acc, item) => {
      acc[item.text] = (acc[item.text] || 0) + 1;
      return acc;
    }, {});
  };
  const occurrences = countOccurrences();

  return (
    <Card className={"mdl:!ps-14 mdl:!py-8"}>
      <h3 className=" mb-5 text-xs mdl:text-base font-Bold">محتوى الباقة</h3>
      <div className="flex items-center gap-4 bg-white">
        <ul className="flex items-center gap-4 flex-wrap mb-6">
          {Object.entries(occurrences).map(([text, count], i) => (
            <li
              key={i}
              className="bg-blueLight text-black/50 font-Regular rounded-xl px-2 h-9 mdl:h-[50px] flex items-center justify-center max-w-[170px] mdl:max-w-[222px] truncate min-w-[106px] mdl:min-w-[150px]"
            >
              <p className="max-w-full truncate text-xs mdl:text-base">
                {count} {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {listSpectra.map(({ id, text }, index) => (
            <li
              key={id}
              className="flex items-center relative  mb-2 gap-4 pb-8 border-s border-dashed last-of-type:border-none"
            >
              <span className=" flex items-center justify-center size-5 mdl:size-6 text-xs mdl:text-base  aspect-square bg-black text-white font-bold  rounded-full z-10 px-1  ">
                {index + 1}
              </span>
              <p className="font-Bold  text-sm mdl:text-xl">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default ContentSpectraView;
