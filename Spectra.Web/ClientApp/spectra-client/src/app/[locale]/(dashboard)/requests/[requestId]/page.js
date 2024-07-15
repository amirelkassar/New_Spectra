import Button from "@/components/button";
import React from "react";

const RequestDetailsPage = () => {
  const data = {
    name: "احمد محمد كمال",
    spec: ["طبيب"],
    desc: "دكتوراه في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان ومشكلات العمل",
    title: "مرخص معتمد من الهيئة السعودية للتخصصات الصحية",
    daqeqa: [
      "القلق",
      "الضغوط",
      "مشكلات في العلاقات",
      "مشكلات بالتواصل",
      "اضطرابات الشخصية",
      "التعامل مع الغضب",
      "ثنائي القطب",
      "القلق الاجتماعي ، الفوبيا",
      "فرط الحركة",
    ],
  };

  const sala7eya = ["طبيب", "متخصص", "محاسب", "سكرتير"];

  return (
    <div className="default-page text-xl space-y-2 ">
      <div>
        <h2 className="mb-1.5">{data.name}</h2>
        <h2>{data.spec.map((item) => item)}</h2>
      </div>
      <p className="max-w-[800px]">{data.desc}</p>
      <p className="max-w-[800px]">{data.title}</p>
      <h2>التخصصات الدقيقة</h2>
      <div className="max-w-[850px] flex flex-wrap gap-x-5 gap-y-2">
        {data.daqeqa.map((item, index) => (
          <div key={index} className="bg-grayLight px-3 py-1 rounded-md">
            {item}
          </div>
        ))}
      </div>
      <h2>إضافة صلاحية</h2>
      <div className="flex gap-5">
        {sala7eya.map((item, index) => (
          <Button
            className={"!rounded-2xl !py-1"}
            variant={data.spec.includes(item) ? "secondary" : "ternary"}
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 max-w-[850px]">
        <Button variant="secondary">قبول</Button>
        <Button>تعديل</Button>
        <Button>رفض</Button>
      </div>
    </div>
  );
};

export default RequestDetailsPage;
