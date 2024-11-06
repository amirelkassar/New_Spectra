import SearchInputVideo from "@/components/searchInputVideo";
import { Checkbox, Tabs } from "@mantine/core";
import React, { useState } from "react";
import BoxSelected from "./boxSelected";
import BtnAddInVideo from "@/components/btnAddInVideo";
import InputVideo from "@/components/inputVideo";
import Button from "@/components/button";
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
  const [selectedRumors, setSelectedRumors] = useState([]);
  const [selectedAnalyses, setSelectedAnalyses] = useState([]);
  const handleCheckboxChange = (values) => {
    setSelectedRumors(values);
  };
  const handleCheckboxChangeAnalyses = (values) => {
    setSelectedAnalyses(values);
  };

  const handleDeleteRumors = (Rumors) => {
    setSelectedRumors((prevRumors) =>
      prevRumors.filter((item) => item !== Rumors)
    );
  };
  const handleDeleteAnalyses = (Analyses) => {
    setSelectedAnalyses((prevAnalyses) =>
      prevAnalyses.filter((item) => item !== Analyses)
    );
  };
  return (
    <div>
      <Tabs color="#10B0C1" defaultValue="one">
        <Tabs.List justify="center" classNames={{ list: "mt-3" }}>
          <Tabs.Tab
            classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="one"
          >
            الاشعات
          </Tabs.Tab>
          <Tabs.Tab
            classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="two"
          >
            التحاليل
          </Tabs.Tab>
          <Tabs.Tab
            classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="three"
          >
            الاشعات و التحاليل السابقة
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="one">
          <div className=" mt-4 mdl:mt-10">
            <SearchInputVideo placeholder="بحث فى الاشعات ..." />
            <BoxSelected
              data={selectedRumors}
              handleDelete={handleDeleteRumors}
            />
          </div>
          <div className="h-full max-h-screen flex flex-col  justify-between w-full">
            <Checkbox.Group
              value={selectedRumors}
              onChange={handleCheckboxChange}
            >
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
                      value={item.value}
                      label={item.label}
                    />
                  );
                })}
              </div>
            </Checkbox.Group>
            <Button
              variant="secondary"
              className="max-w-[294px] w-full mx-auto mb-3 mt-10"
            >
              حفظ
            </Button>
            <div className="flex items-center gap-4 mt-6 py-7 border-t border-t-grayLight mdl:mt-20">
              <BtnAddInVideo />
              <InputVideo
                placeholder="اضافة أشعة"
                className="flex-1 mdl:me-6"
              />
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="two">
          <div className=" mt-4 mdl:mt-10">
            <SearchInputVideo placeholder="بحث فى التحاليل ..." />
            <BoxSelected
              data={selectedAnalyses}
              handleDelete={handleDeleteAnalyses}
            />
          </div>
          <div className="h-full max-h-screen flex flex-col  justify-between w-full">
            <Checkbox.Group
              value={selectedAnalyses}
              onChange={handleCheckboxChangeAnalyses}
            >
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
                    />
                  );
                })}
              </div>
            </Checkbox.Group>
            <Button
              variant="secondary"
              className="max-w-[294px] w-full mx-auto mb-3 mt-10"
            >
              حفظ
            </Button>
            <div className="flex items-center gap-4 mt-6 py-7 border-t border-t-grayLight mdl:mt-20">
              <BtnAddInVideo />
              <InputVideo
                placeholder="اضافة تحليل"
                className="flex-1 mdl:me-6"
              />
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="three">
          <div className=" flex flex-col gap-3 mdl:gap-4 my-10 p-2">
            {dataRumors.concat(dataAnalyses).map((item, i) => {
              return (
                <p key={i} className=" text-xs mdl:text-base font-Bold ">
                  {item.label}
                </p>
              );
            })}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Rumors;
