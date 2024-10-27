import BriefIcon from "@/assets/icons/brief";
import DaqeqaIcon from "@/assets/icons/daqeqa";
import DateIcon from "@/assets/icons/date";
import EditIcon from "@/assets/icons/edit";
import HourglassIcon from "@/assets/icons/Hourglass";
import LicenseIcon from "@/assets/icons/License";
import QualificationsIcon from "@/assets/icons/qualifications";
import Button from "@/components/button";
import Card from "@/components/card";
import CardInfo from "@/components/card-info";
import React from "react";

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
  licenseNumber: "5215664",
  star: 4,
  date: "20/8/2022",
  rating: 281,
  bookingCode: "DR-AHMED-2024",
  allReviews: [
    {
      id: 1,
      name: "م *******",
      rate: 4.5,
      dec: "ممتاز الله يرفع قدره",
    },
    {
      id: 2,
      name: "م *******",
      rate: 3,
      dec: "ممتاز الله يرفع قدره",
    },
    {
      id: 3,
      name: "م *******",
      rate: 4.9,
      dec: "ممتاز الله يرفع قدره",
    },
    {
      id: 4,
      name: "م *******",
      rate: 5,
      dec: "ممتاز الله يرفع قدره",
    },
    {
      id: 5,
      name: "م *******",
      rate: 2,
      dec: "ممتاز الله يرفع قدره",
    },
    {
      id: 6,
      name: "م *******",
      rate: 2,
      dec: "ممتاز الله يرفع قدره",
    },
  ],
};

function PageInfo({ setEdit }) {
  return (
    <div className="w-full flex flex-col gap-6 flex-1">
      <div>
        <div className="flex items-center justify-between gap-5 mb-4 lgl:mb-6">
          <h2 className="text-sm lgl:text-xl ">البيانات الشخصية </h2>
        </div>
        <div className="grow grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-y-2.5 lg:!mb-10 !mb-5 lg:gap-x-5">
          <CardInfo title={"الاسم كامل"} values={["احمد محمد كمال"]} />
          <CardInfo title={"النوع"} values={["ذكر"]} />
          <CardInfo title={"البلد"} values={["السعودية"]} />
          <CardInfo title={"المدينة"} values={["دمام"]} />
          <CardInfo title={"رقم الهاتف"} values={["+98415514"]} />
          <CardInfo title={"البريد الالكترونى"} values={["لوريم ابسم"]} />
          <CardInfo title={"رقم الهوية"} values={["1225854"]} />
        </div>
      </div>

      <div>
        <h2 className="text-sm lgl:text-xl mb-4 lgl:mb-5">الوصف الوظيفى</h2>
        <Card>
          <div className="w-full flex flex-col gap-10">
            <div className="flex items-start gap-4 lg:gap-5">
              <DateIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  تاريخ الانضمام
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal ">
                  {data.date}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <BriefIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  نبدة
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal ">
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
                <p className=" text-[14px] lg:text-[20px] font-normal ">
                  {data.qualifications}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <LicenseIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  رقم الترخيص
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal ">
                  {data.licenseNumber}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <HourglassIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div>
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  سنوات الخبرة
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal ">
                  5 سنوات
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Card>
        <div className="flex items-start gap-4 lg:gap-5 mb-6">
          <DaqeqaIcon
            className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-1"}
          />
          <div>
            <h3 className=" text-sm lg:text-lg font-bold lg:mb-2">
              {" "}
              التخصصات الدقيقة
            </h3>
            <div className="max-w-[850px] mt-4 flex flex-wrap gap-x-2 gap-y-2">
              {data.daqeqa.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#E9F7FF] text-[#010036] px-2 md:px-4 py-1 rounded-md text-[14px] md:text-lg "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Button
        onClick={() => {
          setEdit(true);
        }}
        className={
          "  mdl:max-w-[260px] max-w-[80%] mb-4 mx-auto mdl:mx-0 bg-white/80 w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
        }
      >
        <EditIcon />
        تعديل
      </Button>
    </div>
  );
}

export default PageInfo;
