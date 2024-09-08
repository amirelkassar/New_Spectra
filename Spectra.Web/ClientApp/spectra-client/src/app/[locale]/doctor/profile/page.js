import MenuActions from "@/components/menu-actions";
import React from "react";
import CopyCode from "./components/copyCode";
import BriefIcon from "@/assets/icons/brief";
import QualificationsIcon from "@/assets/icons/qualifications";
import DaqeqaIcon from "@/assets/icons/daqeqa";
import doctorImg from "@/assets/images/placeholder-person.png";
import DoctorInfo from "./components/doctorInfo";
import SessionIcon from "@/assets/icons/session";
function MainProfile() {
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
  return (
    <div className="flex-1 w-full flex flex-col gap-3 mdl:gap-7">
      <div className="default-page flex-1  w-full">
        <div className="flex items-center justify-between">
          <h2 className="headTitleDash">ملفى</h2>
          <MenuActions />
        </div>
        <DoctorInfo data={data} />
      </div>
      <div className=" flex flex-col gap-4 flex-1  w-full">
        <CopyCode />
      </div>
      <div className="default-page flex-1  w-full">
        <div>
          <h2 className="headTitleDash">الوصف الوظيفى</h2>
          <div className="lg:min-w-[400px] flex-1 mt-6 mdl:mt-14">
            <div className="flex items-start gap-4 lg:gap-5">
              <BriefIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  نبدة
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal min-h-[110px]">
                  {data.brief}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <QualificationsIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  المؤهلات والتراخيص
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal min-h-12 lg:min-h-[110px]">
                  {data.qualifications}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <DaqeqaIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  {" "}
                  التخصصات الدقيقة
                </h3>
                <div className="max-w-[850px] mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {data.daqeqa.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#E9F7FF] text-[#010036] px-2 md:px-3 py-1 rounded-md text-[14px] md:text-[20px] "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
