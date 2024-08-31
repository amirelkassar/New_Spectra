import { Checkbox, Tabs } from "@mantine/core";
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
    label: "الأشعة المقطعية بالكمبيوتر (CT SCAN).",
    value: "rumors3",
  },
  {
    label: "الأشعة بالرنين المغناطيسي (M.R.I)",
    value: "rumors4",
  },
  {
    label: "الطب النووي (Nuclear Medicine)",
    value: "rumors5",
  },
];
const dataAnalyses = [
  {
    label: "القسطرة الوريدية",
    value: "analyses1",
  },
  {
    label: "دم",
    value: "analyses2",
  },
  {
    label: "سكر",
    value: "analyses3",
  },
  {
    label: "ضغط",
    value: "analyses4",
  },
];

function Rumors() {
  return (
    <div>
      <Tabs color="#10B0C1" defaultValue="analyses">
        <Tabs.List justify="center" classNames={{ list: "mt-3" }}>
          <Tabs.Tab
            classNames={{
              tab: " text-xl font-Regular data-[active]:font-bold",
            }}
            value="analyses"
          >
            التحاليل
          </Tabs.Tab>
          <Tabs.Tab
            classNames={{
              tab: " text-xl font-Regular data-[active]:font-bold",
            }}
            value="rumors"
          >
            الاشعات
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="rumors">
          <Checkbox.Group>
            <div className="flex flex-col gap-8 mt-11 ps-4">
              {dataRumors.map((item, i) => {
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
        </Tabs.Panel>
        <Tabs.Panel value="analyses">
          <Checkbox.Group>
            <div className="flex flex-col gap-8 mt-11 ps-4">
              {dataAnalyses.map((item, i) => {
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
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Rumors;
