import Card from "@/components/card";
import { Checkbox } from "@mantine/core";
import React from "react";
const dataRumors = [
  {
    label: "الأشعة السينية x-ray",
    value: "rumors1",
  },
  {
    label: "الموجات فوق الصوتية (Ultrasonic)",
    value: "rumors2",
  },
  {
    label: "القسطرة الوريدية",
    value: "analyses1",
  },
];

function Rumors() {
  return (
    <Card>
      <h2 className="text-base mdl:text-lg mb-10">
      التحاليل و الاشعات الخارجية
      </h2>
      <div className="flex flex-col gap-4 lgl:gap-8 mt-7 lgl:mt-11 ps-4">
        {dataRumors.map((item, i) => {
          return (
            <Checkbox
              checked
              classNames={{
                label: "font-Bold text-[12px] lgl:text-base",
                input: "lgl:w-5 lgl:h-5 w-4 h-4",
                inner: "lgl:w-5 lgl:h-5 w-4 h-4",
                body: "items-center",
              }}
              color="#10B0C1"
              key={i}
              value={item.value}
              label={item.label}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default Rumors;
