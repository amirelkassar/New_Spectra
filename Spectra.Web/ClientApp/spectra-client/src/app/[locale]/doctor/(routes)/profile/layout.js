import React from "react";
import ProfileAside from "./components/profile-aside";
import DoctorInfo from "./components/doctorInfo";
import doctorImg from "@/assets/images/placeholder-person.png";
import Card from "@/components/card";
const data = {
  name: "احمد محمد كمال",
  spec: " اخصائى نفسى",
  brief:
    "دكتوراه في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان والمشكلات ",
  qualifications: "مرخص معتمد من الهيئة السعودية للتخصصات الصحية",
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
  star: 4.9,
  rating: 281,
  bookingCode: "DR-AHMED-2024",
  image: doctorImg,
  service: {
    counseling: "100.00 $",
    early: "100.00 $",
    early2: "100.00 $",
  },
};
function layout({ children }) {
  return (
    <div className="flex mdl:gap-5 flex-wrap flex-col mdl:flex-row">
      <ProfileAside />
      <div className="flex-1 w-full flex flex-col gap-3 mdl:gap-7">
        <Card>
          <h2 className="headTitleDash">ملفى</h2>
          <DoctorInfo data={data} />
        </Card>

        {children}
      </div>
    </div>
  );
}

export default layout;
