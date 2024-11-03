"use client";
import { Tabs } from "@mantine/core";
import Button from "@/components/button";
import React, { useState } from "react";
import HandshakeIcon from "@/assets/icons/handshake";
import True2Icon from "@/assets/icons/true2";
import NominationsDetails from "./nominationsDetails";

const pricingPlans = [
  {
    id: 1,
    title: "الباقة المتميزة",
    price: "$100.00",
    features: [
      "4 جلسات من التخاطب",
      "1 جلسة نفسية",
      "1 جلسة إضافية لقياس الذكاء",
    ],
  },
  {
    id: 2,
    title: "الباقة المتميزة",
    price: "$100.00",
    features: [],
  },
];

const servicesData = [
  {
    id: 11,
    title: "تقديم خدمات التأهيل العلاجي في مختلف التخصصات",
  },
  {
    id: 22,
    title: "خدمات التأهيل العلاجي في مختلف التخصصات",
  },
  {
    id: 33,
    title: "تقديم خدمات التأهيل العلاجي في مختلف التخصصات",
  },
];

function Nominations() {
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [selectedServicesData, setSelectedServicesData] = useState([]);
  const [showServiceID, setShowServiceID] = useState(null);
  const toggleSelection = (id, setSelected, selectedList) => {
    if (selectedList.includes(id)) {
      setSelected(selectedList.filter((el) => el !== id));
    } else {
      setSelected([...selectedList, id]);
    }
  };
  console.log(showServiceID);

  return (
    <div>
      {showServiceID ? (
        <NominationsDetails id={showServiceID} setShowServiceID={setShowServiceID} />
      ) : (
        <Tabs color="#10B0C1" defaultValue="one">
          <Tabs.List justify="center" classNames={{ list: "mt-3" }}>
            <Tabs.Tab
              classNames={{
                tab: "text-sm lgl:text-xl font-Regular data-[active]:font-bold",
              }}
              value="one"
            >
              الباقات
            </Tabs.Tab>
            <Tabs.Tab
              classNames={{
                tab: "text-sm lgl:text-xl font-Regular data-[active]:font-bold",
              }}
              value="two"
            >
              الخدمات
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="one">
            <div className="flex lgl:items-center w-full lgl:max-w-[300px] mx-auto mt-10 px-5 lgl-px-0 lgl:justify-center hideScroll overflow-x-auto lgl:flex-col gap-10">
              {pricingPlans.map((plan) => (
                <div
                  className="flex flex-col gap-2 min-w-[232px] mx-auto w-[232px] lgl:w-full p-5 border-t-[6px] overflow-hidden border-t-greenMain border-2 border-grayLight rounded-[10px]"
                  key={plan.id}
                >
                  <div
                    className="flex flex-col gap-2"
                    onClick={() => {
                      setShowServiceID(plan.id);
                    }}
                  >
                    <h2 className="lgl:text-xl text-sm mb-3 font-Bold text-greenMain">
                      {plan.title}
                    </h2>
                    <div className="lgl:mb-3 mb-1 font-Bold text-greenMain text-2xl lgl:text-[36px]">
                      {plan.price}
                    </div>
                    <ul className="flex flex-col gap-2">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex gap-2 lgl:gap-4 items-center"
                        >
                          <True2Icon />
                          <p className="text-[12px] lgl:text-base">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={() =>
                      toggleSelection(plan.id, setSelectedPlan, selectedPlan)
                    }
                    variant="secondary"
                    className={`${
                      selectedPlan.includes(plan.id)
                        ? "bg-blueLight text-black hover:bg-blueLight shadow-md"
                        : ""
                    } font-Bold text-sm lgl:text-xl lgl:max-w-[226px] mx-auto w-full mt-4`}
                  >
                    {selectedPlan.includes(plan.id) ? "الغاء الترشيح" : "ترشيح"}
                  </Button>
                </div>
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="two">
            <div className="flex items-center mb-7 mt-10 justify-center flex-wrap lgl:flex-col gap-6 lgl:gap-10">
              {servicesData.map((item) => (
                <div
                  className="flex flex-col gap-2 max-w-[226px] min-w-[calc(50%-20px)] mx-auto w-[calc(50%-10px)] flex-1 lgl:w-full"
                  key={item.id}
                >
                  <div className="size-11 lgl:size-[56px] rounded-full p-3 flex items-center justify-center bg-greenLight mx-auto">
                    <HandshakeIcon />
                  </div>
                  <h2 className="lgl:text-xl text-sm font-Regular font-normal text-center">
                    {item.title}
                  </h2>
                  <Button
                    onClick={() =>
                      toggleSelection(
                        item.id,
                        setSelectedServicesData,
                        selectedServicesData
                      )
                    }
                    variant="secondary"
                    className={`${
                      selectedServicesData.includes(item.id)
                        ? "bg-blueLight text-black hover:bg-blueLight shadow-md"
                        : ""
                    } font-Bold text-sm lgl:text-xl lgl:max-w-[226px] mx-auto w-full mt-4`}
                  >
                    {selectedServicesData.includes(item.id)
                      ? "الغاء الترشيح"
                      : "ترشيح"}
                  </Button>
                </div>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      )}
    </div>
  );
}

export default Nominations;
