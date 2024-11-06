import SearchInputVideo from "@/components/searchInputVideo";
import { Checkbox, Tabs } from "@mantine/core";
import React, { useState } from "react";
import BoxSelected from "./boxSelected";
import BtnAddInVideo from "@/components/btnAddInVideo";
import InputVideo from "@/components/inputVideo";
import Button from "@/components/button";
const referralsData = [
    { label: "Neurology", value: "Neurology" },
    { label: "Genetics", value: "Genetics" },
    { label: "Psychiatry", value: "Psychiatry" },
    { label: "Ophthalmology", value: "Ophthalmology" },
    { label: "Dietician", value: "Dietician" },
    { label: "ENT", value: "ENT" },
    { label: "Sleep Medicine", value: "Sleep Medicine" }
  ];
function Referrals() {
  const [selectedReferrals, setSelectedReferrals] = useState([]);
  const handleCheckboxChange = (values) => {
    setSelectedReferrals(values);
  };

  const handleDeleteComplaint = (complaint) => {
    setSelectedReferrals((prevReferrals) =>
      prevReferrals.filter((item) => item !== complaint)
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
        الاحالات
        </Tabs.Tab>
        <Tabs.Tab
          classNames={{
            tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
          }}
          value="two"
        >
          الاحالات السابقة
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="one">
        <div className=" mt-4 mdl:mt-10">
          <SearchInputVideo placeholder="بحث فى الاحالات ..." />
          <BoxSelected
            data={selectedReferrals}
            handleDelete={handleDeleteComplaint}
          />
        </div>
        <div className="h-full max-h-screen flex flex-col  justify-between w-full">
          <Checkbox.Group
            value={selectedReferrals}
            onChange={handleCheckboxChange}
          >
            <div className="flex flex-col gap-4 lgl:gap-8 mt-4 mdl:mt-5 ps-4">
              {referralsData.map((item, i) => {
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
          <Button variant="secondary" className="max-w-[294px] w-full mx-auto mb-3 mt-10">حفظ</Button>
          <div className="flex items-center gap-4 mt-6 py-7 border-t border-t-grayLight mdl:mt-20">
            <BtnAddInVideo />
            <InputVideo placeholder=" اضافة نوع احالة " className="flex-1 mdl:me-6" />
          </div>
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="two">
        <div className=" flex flex-col gap-3 mdl:gap-4 my-10 p-2">
          {referralsData.map((item, i) => {
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

export default Referrals;
