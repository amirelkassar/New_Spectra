import { Package } from "@/app/[locale]/client/(routes)/packages/_components/package";
import CloseIcon from "@/assets/icons/close";
import React from "react";
const packagesDataSpectra = {
  id: "1",
  label: "الباقة المتميزة",
  price: 100,
  features: [
    "4 جلسات من تخصص التخاطب",
    "الوصول لافضل النتائج والتوصيات",
    "1 جلسة اضافية لقياس الذكاء",
  ],
  content: [
    "خدمة الكشف المبكر",
    "خدمة الاستشارات الفردية",
    "خدمة التشخيص المتعدد التخصصات",
    "متابعة",
    "تقرير مفصل",
    "خدمة التدريب",
    "خدمة دعم المراكز و الجهات",
    "خدمة التدريب",
  ],
  goalsOfPackage: [
    "تطور الجانب الاجتماعى",
    "التطور فى الانتباه",
    "الاعتماد على الذات ",
    "زيادة ذكاء الطفل",
  ],
  color: "#10B0C1",
};

function NominationsDetails({ id, setShowServiceID }) {
  return (
    <div className="mt-7">
      <button
      className=" size-7"
        onClick={() => {
          setShowServiceID(null);
        }}
      >
        <CloseIcon className={'w-full h-auto'}/>
      </button>
      <Package data={packagesDataSpectra} />
    </div>
  );
}

export default NominationsDetails;
