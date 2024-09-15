"use client";
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
    label: "الطب النووي (Nuclear Medicine)",
    value: "rumors5",
  },
];
const dataAnalyses = [
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
              tab: "text-sm lgl:text-xl font-Regular data-[active]:font-bold",
            }}
            value="analyses"
          >
            التحاليل
          </Tabs.Tab>
          <Tabs.Tab
            classNames={{
              tab: "text-sm lgl:text-xl font-Regular data-[active]:font-bold",
            }}
            value="rumors"
          >
            الاشعات
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="rumors">
          <div className="flex flex-col gap-4 lgl:gap-8 mt-7 lgl:mt-11 ps-4">
            {dataRumors.map((item, i) => {
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
                  onChange={() => {}}
                  label={item.label}
                  checked={true}
                  readOnly
                />
              );
            })}
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="analyses">
          <div className="flex flex-col gap-4 lgl:gap-8 mt-7 lgl:mt-11 ps-4">
            {dataAnalyses.map((item, i) => {
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
                  checked={true}
                  readOnly
                />
              );
            })}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Rumors;
