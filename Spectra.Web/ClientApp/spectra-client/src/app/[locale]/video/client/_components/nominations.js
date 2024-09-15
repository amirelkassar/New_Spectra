"use client";
import { Tabs } from "@mantine/core";
import Button from "@/components/button";
import React from "react";
import HandshakeIcon from "@/assets/icons/handshake";
import True2Icon from "@/assets/icons/true2";

const pricingPlans = [
  {
    title: "الباقة المتميزة",
    price: "$100.00",
    features: [
      "4 جلسات من التخاطب",
      "1 جلسة نفسية",
      "1 جلسة إضافية لقياس الذكاء",
    ],
  },
  {
    title: "الباقة المتميزة",
    price: "$100.00",
    features: [],
  },
];

const servicesData = [
  {
    title: "تقديم خدمات التأهيل العلاجي في مختلف التخصصات ",
  },
  {
    title: "خدمات التأهيل العلاجي  في مختلف التخصصات ",
  },
  {
    title: "تقديم خدمات التأهيل العلاجي في مختلف التخصصات ",
  },
];

function Nominations() {
  return (
    <Tabs color="#10B0C1" defaultValue="bundles">
      <Tabs.List justify="center" classNames={{ list: "mt-3" }}>
        <Tabs.Tab
          classNames={{ tab: " text-sm lgl:text-xl font-Regular data-[active]:font-bold" }}
          value="bundles"
        >
          الباقات
        </Tabs.Tab>
        <Tabs.Tab
          classNames={{ tab: " text-sm lgl:text-xl font-Regular data-[active]:font-bold" }}
          value="services"
        >
          الخدمات
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="bundles">
        <div className="flex lgl:items-center w-full lgl:max-w-[300px]  mx-auto mt-10 px-5 lgl-px-0 lgl:justify-center hideScroll  overflow-x-auto lgl:flex-col gap-10">
          {pricingPlans.map((plan, i) => (
            <div
              className="flex  flex-col gap-2 min-w-[232px]  mx-auto w-[232px] lgl:w-full p-5 border-t-[6px] overflow-hidden border-t-greenMain border-2 border-grayLight rounded-[10px] "
              key={i}
            >
              <h2 className="lgl:text-xl text-sm mb-3 font-Bold text-greenMain">
                {plan.title}
              </h2>
              <div className="lgl:mb-3 mb-1 font-Bold text-greenMain text-2xl lgl:text-[36px]">
                {plan.price}
              </div>
              <ul className=" flex flex-col gap-2">
                {plan.features.length > 0
                  ? plan.features.map((feature, index) => (
                      <li key={index} className="flex gap-2 lgl:gap-4 items-center">
                        <True2Icon />
                        <p className={'text-[12px] lgl:text-base'}>{feature}</p>

                      </li>
                    ))
                  : null}
              </ul>
              <Button
                variant="secondary"
                className="font-Bold text-sm lgl:text-xl  lgl:max-w-[226px] mx-auto w-full mt-4"
              >
                احجز الان
              </Button>
            </div>
          ))}
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="services">
        <div className="flex items-center mt-10 justify-center flex-wrap lgl:flex-col gap-6 lgl:gap-10">
          {servicesData.map((item, i) => (
            <div
              className="flex flex-col gap-2 max-w-[226px] min-w-[calc(50%-20px)] mx-auto w-[calc(50%-10px)] flex-1 lgl:w-full"
              key={i}
            >
              <div className=" size-11 lgl:size-[56px] rounded-full p-3 flex items-center justify-center bg-greenLight mx-auto">
                <HandshakeIcon />
              </div>
              <h2 className="lgl:text-xl text-sm font-Regular font-normal text-center">
                {item.title}
              </h2>
              <Button
                variant="secondary"
                className="font-Bold text-sm lgl:text-xl max-w-[226px] mx-auto w-full mt-2 lgl:mt-4"
              >
                احجز الان
              </Button>
            </div>
          ))}
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Nominations;
