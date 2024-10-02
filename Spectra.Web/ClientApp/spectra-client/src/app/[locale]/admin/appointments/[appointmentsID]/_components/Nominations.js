import HandshakeIcon from "@/assets/icons/handshake";
import True2Icon from "@/assets/icons/true2";
import Button from "@/components/button";
import Card from "@/components/card";
import React from "react";
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

];
function Nominations() {
  return (
    <Card>
      <h2 className="text-base mdl:text-lg  mb-10">الترشيحات</h2>
      <div>
        <h3 className="text-base mdl:text-lg font-Regular mb-7">الباقات</h3>
        <div className="flex  w-full  flex-wrap  mt-10 px-5 lgl-px-0   gap-10">
          {pricingPlans.map((plan, i) => (
            <div
              className="flex  flex-col gap-2 min-w-[232px]   w-[232px]  p-5 border-t-[6px] overflow-hidden border-t-greenMain border-2 border-grayLight rounded-[10px] "
              key={i}
            >
              <h2 className="lgl:text-lg text-sm mb-3 font-Bold text-greenMain">
                {plan.title}
              </h2>
              <div className="lgl:mb-3 mb-1 font-Bold text-greenMain text-2xl lgl:text-[36px]">
                {plan.price}
              </div>
              
              <Button
                variant="secondary"
                className="font-Bold text-sm lgl:text-lg  lgl:max-w-[226px] mx-auto w-full mt-4"
              >
                احجز الان
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-11">
        <h3 className="text-base mdl:text-lg font-Regular mb-7">الخدمات</h3>
        <div className="flex  mt-10 flex-wrap gap-6 lgl:gap-10">
          {servicesData.map((item, i) => (
            <div
              className="flex flex-col gap-2 max-w-[280px]  w-[280px] flex-1 lgl:w-full"
              key={i}
            >
              <div className=" size-11 lgl:size-[56px] rounded-full p-3 flex items-center justify-center bg-greenLight mx-auto">
                <HandshakeIcon />
              </div>
              <h2 className="lgl:text-lg text-sm  font-Bold text-center">
                {item.title}
              </h2>
              <Button
                variant="secondary"
                className="font-Bold text-sm lgl:text-lg max-w-[226px] mx-auto w-full mt-2 lgl:mt-4"
              >
                احجز الان
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default Nominations;
