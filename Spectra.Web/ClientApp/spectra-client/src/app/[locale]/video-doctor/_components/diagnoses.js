import { Checkbox } from "@mantine/core";
import React from "react";
const DiagnosticsData = [
  {
    value: "diag1",
    label: "طيف التوحد",
  },
  {
    value: "diag2",
    label: "فرط حركة",
  },
  {
    value: "diag3",
    label: "اضطرابات نفسية",
  },
  {
    value: "diag4",
    label: "اضطراب سلوك",
  },
  {
    value: "diag5",
    label: "ضعف السمع",
  },
  {
    value: "diag6",
    label: "تأخر النمو",
  },
  {
    value: "diag7",
    label: "تأخر الكلام",
  },
  {
    value: "diag8",
    label: "مشاكل تعلمية",
  },
  {
    value: "diag9",
    label: "اعاقة ذهنية",
  },
];
function DiagnosesVideo() {
  return (
    <div>
      <Checkbox.Group>
        <div className="flex flex-col gap-4 lgl:gap-8 mt-7 lgl:mt-11 ps-4">
          {DiagnosticsData.map((item, i) => {
            return (
              <Checkbox
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
      </Checkbox.Group>
    </div>
  );
}

export default DiagnosesVideo;
