"use client";
import SearchInputVideo from "@/components/searchInputVideo";
import { Checkbox, Tabs } from "@mantine/core";
import React, { useState } from "react";
import BoxSelected from "./boxSelected";
import BtnAddInVideo from "@/components/btnAddInVideo";
import InputVideo from "@/components/inputVideo";
const DiagnosticsData = [
  { value: "طيف التوحد", label: "طيف التوحد" },
  { value: "فرط حركة", label: "فرط حركة" },
  { value: "اضطرابات نفسية", label: "اضطرابات نفسية" },
  { value: "اضطراب سلوك", label: "اضطراب سلوك" },
  { value: "ضعف السمع", label: "ضعف السمع" },
  { value: "تأخر النمو", label: "تأخر النمو" },
  { value: "تأخر الكلام", label: "تأخر الكلام" },
  { value: "مشاكل تعلمية", label: "مشاكل تعلمية" },
  { value: "اعاقة ذهنية", label: "اعاقة ذهنية" },
];
function DiagnosesVideo() {
  const [selectedDiagnostics, setSelectedDiagnostics] = useState([]);
  const handleCheckboxChange = (values) => {
    setSelectedDiagnostics(values);
  };

  const handleDeleteComplaint = (complaint) => {
    setSelectedDiagnostics((prevDiagnostics) =>
      prevDiagnostics.filter((item) => item !== complaint)
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
            التشخيصات
          </Tabs.Tab>
          <Tabs.Tab
           classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="two"
          >
            التشخيصات السابقة
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="one">
          <div className=" mt-4 mdl:mt-10">
            <SearchInputVideo placeholder="بحث فى التشخيصات ..." />
            <BoxSelected
              data={selectedDiagnostics}
              handleDelete={handleDeleteComplaint}
            />
          </div>
          <div className="h-full max-h-screen flex flex-col  justify-between w-full">
            <Checkbox.Group
              value={selectedDiagnostics}
              onChange={handleCheckboxChange}
            >
              <div className="flex flex-col gap-4 lgl:gap-8 mt-4 mdl:mt-5 ps-4">
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
            <div className="flex items-center gap-4 mt-6 py-7 border-t border-t-grayLight mdl:mt-20">
              <BtnAddInVideo />
              <InputVideo
                placeholder="اضافة تشخيص"
                className="flex-1 mdl:me-6"
              />
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="two">
          <div className=" flex flex-col gap-3 mdl:gap-4 my-10 p-2">
            {DiagnosticsData.map((item, i) => {
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

export default DiagnosesVideo;
