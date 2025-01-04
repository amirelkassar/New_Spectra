import Card from "@/components/card";
import React from "react";
import { Info } from "../../components/info";
import { PrescriptionCard } from "../../components/prescrtiption-card";
import Image from "next/image";
import imgDrugs from "@/assets/images/drugs.png";
const data = {
  id: 1,
  isNew: true,
  date: "20/04/2024",
  doctor: "احمد محمد كمال",
  proffession: "اخصائى نفسي",
  drugName: "سيترالين",
  dose: "100mg",
  description: "اخذه طوال الشهر يوميا مع الاكل",
  takingNo: "مرتين",
  takingPeriod: "اسبوعين",
  doctorNotes: "يتم اخذ الجرعة بشكل منتظم الا اذا ظهر اعراض جانبية",
  ingredient: "الريتنول",
  scientificName: "setraline",
  drugClass: "مسكن",
  images: [imgDrugs, imgDrugs],
  recommendedDose: [
    "الجرعة الأولية: 50 ملغ مرة واحدة يوميًا من الأقراص. لا تستخدم الكبسولات لبدء العلاج.",
    "جرعة الاستمرارية: يمكن زيادة الجرعة بمقدار 25 ملغ أسبوعيًا.",
    "الجرعة القصوى: 200 ملغ/اليوم.",
  ],
  drugConcentration: "50 %",
  drugInteractions: "لوريم ابسيم - لوريم ابسم",
  warnings: [
    "فرط الحساسية تجاه العلاج أو لأي مكون آخر من مكوناته.",
    "الاستخدام المتزامن مع مثبطات أكسيداز أحادي الأمين (بالإنجليزية: Monoamine Oxidase Inhibitor or MAOI) وحتى 14 يوم بعد التوقف عن استخدامها.",
  ],
  drugNotes:
    "يحفظ العلاج في درجة حرارة الغرفة (15-25 درجة مئوية)، بعيدًا عن الرطوبة والحرارة، وبعيدًا عن متناول الأطفال.",
};

function page() {
  return (
    <Card>
      <PrescriptionCard data={data} isDetailed />
      <div className="flex items-center gap-2 mt-6 flex-wrap border-b-2 p-5 border-grayLight">
        {data.images.map((img, i) => {
          return (
            <Image
              key={i}
              alt="drugs"
              src={img}
              className=" h-[60px] lg:h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-1 sml:grid-cols-3">
        <Info
          containerClassName="sml:col-span-3"
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="الاسم"
          value={data?.drugName}
        />
        <Info
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="الجرعة"
          value={data?.dose}
        />
        <Info
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="عدد المرات"
          value={data?.takingNo}
        />
        <Info
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="الفترة الزمنية"
          value={data?.takingPeriod}
        />
        <Info
          containerClassName="sml:col-span-3"
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="ملاحظات الطبيب"
          value={data?.doctorNotes}
        />

        <Info
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="المادة الفعالة"
          value={data?.ingredient}
        />
        <Info
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="الاسم العلمي"
          value={data?.scientificName}
        />
        <Info
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="النوع"
          value={data?.drugClass}
        />
        <Info
          containerClassName="sml:col-span-3"
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="الجرعة الموصي بها"
          value={data?.recommendedDose}
        />
        <Info
          containerClassName="sml:col-span-3"
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="تركيز الدواء"
          value={data?.drugConcentration}
        />
        <Info
          containerClassName="sml:col-span-3"
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="تفاعلات الدواء مع ادوية اخري"
          value={data?.drugInteractions}
        />
        <Info
          containerClassName="sml:col-span-3"
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="موانع الاستخدام"
          value={data?.warnings}
        />
        <Info
          containerClassName="sml:col-span-3"
          withBorder
          valueClassName="font-normal"
          titleClassName="font-bold"
          title="ملاحظات"
          value={data?.drugNotes}
        />
      </div>
    </Card>
  );
}

export default page;
