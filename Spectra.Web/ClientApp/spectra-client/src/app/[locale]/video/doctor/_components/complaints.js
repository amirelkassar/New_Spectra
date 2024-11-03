import CloseIcon from "@/assets/icons/close";
import BtnAddInVideo from "@/components/btnAddInVideo";
import InputVideo from "@/components/inputVideo";
import { Checkbox, Tabs } from "@mantine/core";
import React, { useState } from "react";
import BoxSelected from "./boxSelected";
import SearchInputVideo from "@/components/searchInputVideo";
const ComplaintsData = [
  { label: "الم العظام", value: "الم العظام" },
  {
    label: "تلف نتائج اختبار غير صحيحة.",
    value: "تلف نتائج اختبار غير صحيحة.",
  },
  { label: "طفح جلدي", value: "طفح جلدي" },
  { label: "غثيان مع الم بالراس", value: "غثيان مع الم بالراس" },
  { label: "فرط حركة", value: "فرط حركة" },
];
function ComplaintsVideo() {
  const [selectedComplaints, setSelectedComplaints] = useState([]);
  const handleCheckboxChange = (values) => {
    setSelectedComplaints(values);
  };

  const handleDeleteComplaint = (complaint) => {
    setSelectedComplaints((prevComplaints) =>
      prevComplaints.filter((item) => item !== complaint)
    );
  };
  return (
    <Tabs color="#10B0C1" defaultValue="one">
      <Tabs.List justify="center" classNames={{ list: "mt-3" }}>
        <Tabs.Tab
          classNames={{
            tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
          }}
          value="one"
        >
          الشكاوى العامة
        </Tabs.Tab>
        <Tabs.Tab
          classNames={{
            tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
          }}
          value="two"
        >
       الشكاوى العامة السابقة
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="one">
        <div className=" mt-4 mdl:mt-10">
          <SearchInputVideo placeholder="بحث فى الشكاوى العامة ..." />
       <BoxSelected data={selectedComplaints} handleDelete={handleDeleteComplaint}/>
        </div>
        <div className="h-full max-h-screen flex flex-col  justify-between w-full">
          <Checkbox.Group
            value={selectedComplaints}
            onChange={handleCheckboxChange}
          >
            <div className="flex flex-col gap-4 lgl:gap-8 mt-4 mdl:mt-5 ps-4">
              {ComplaintsData.map((item, i) => {
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
            <InputVideo placeholder="اضافة شكوى" className="flex-1 mdl:me-6" />
          </div>
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="two">
        <div className=" flex flex-col gap-3 mdl:gap-4 my-10 p-2">
          {ComplaintsData.map((item, i) => {
            return (
              <p key={i} className=" text-xs mdl:text-base font-Bold ">
                {item.label}
              </p>
            );
          })}
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}

export default ComplaintsVideo;
