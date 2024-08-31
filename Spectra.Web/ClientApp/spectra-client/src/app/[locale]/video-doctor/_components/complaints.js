import { Checkbox } from "@mantine/core";
import React from "react";
const ComplaintsData = [
  { label: "الم العظام", value: "com1" },
  { label: "تلف نتائج اختبار غير صحيحة.", value: "com2" },
  { label: "طفح جلدي", value: "com3" },
  { label: "غثيان مع الم بالراس", value: "com4" },
  { label: "فرط حركة", value: "com5" },
];
function ComplaintsVideo() {
  return (
    <div>
      <Checkbox.Group>
        <div className="flex flex-col gap-8 mt-11 ps-4">
          {ComplaintsData.map((item, i) => {
            return (
              <Checkbox
                classNames={{ label: "font-Bold text-base" }}
                color="#10B0C1"
                key={i}
                value={item.value}
                label={item.label}
              />
            );
          })}
        </div>
      </Checkbox.Group>
    </div>
  );
}

export default ComplaintsVideo;
