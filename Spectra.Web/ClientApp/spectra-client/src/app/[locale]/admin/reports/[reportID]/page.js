import React from "react";
import ReportsTable from "../report-table";
import MenuActions from "@/components/menu-actions";
import ReportAside from "../report-aside";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";
import Image from "next/image";
import man from "@/assets/images/placeholder-person.png";
import ReportDecIcon from "@/assets/icons/reportDec";
import { AreaChart, LineChart } from "@mantine/charts";

function page() {
  const data = [
    {
      id: 0,
      name: "احمد محمد",
      job: "اخصائى",
      image: man,
    },
    {
      id: 1,
      name: "احمد محمد",
      job: "طبيب",
      image: man,
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      job: "الطفل :احمد عبدالله",
      image: man,
    },
  ];
  const charts = [
    { date: "يناير", temperature: 55 },
    { date: "فبراير", temperature: 45 },
    { date: "مارس ", temperature: 50 },
    { date: "ابريل", temperature: 60 },
    { date: "مايو", temperature: 40 },
    { date: "يونيو", temperature: 15 },
    { date: "يوليو", temperature: 30 },
    { date: "اغسطس", temperature: 33 },
    { date: "سبتمبر", temperature: 20 },
    { date: "اكتوبر", temperature: 17 },
    { date: "نوفمر", temperature: 25 },
    { date: "ديسمبر", temperature: 10 },
  ];
  return (
    <div className=" flex-1">
      <div className=" md:mb-5 bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-6 md:rounded-xl">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="flex mb-1   items-center gap-4 ">
            <Link
              href={ROUTES.ADMIN.REPORT.DASHBOARD}
              className="p-2 w-[30px] lg:w-[56px] h-[30px] lg:h-[56px] rounded-[50%] bg-[#E9F7FF] flex items-center justify-center"
            >
              <BackIcon
                className={"lg:w-[28px] w-[15px] h-[12px] lg:h-[23px] mb-1"}
              />
            </Link>
            <h2 className="headTitleDash">التقارير</h2>
          </div>
          <MenuActions type={2} />
        </div>
        <div className="flex flex-col gap-8 mb-5 ">
          {data.map((item, i) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center gap-7 flex-1"
              >
                <div className="flex items-center gap-x-3 md:gap-x-12 gap-y-4 flex-wrap">
                  <div className="flex items-center gap-3 md:gap-7">
                    <Image
                      src={item.image}
                      width={52}
                      height={52}
                      className=" size-[30px] md:size-[52px] rounded-[50%] object-cover object-top"
                      alt="man"
                    />
                    <h2 className="text-[12px] md:text-[16px] font-extrabold min-w-[76px] md:min-w-[96px]">
                      {item.name}
                    </h2>
                  </div>
                  <p className="text-[12px] md:text-[16px] font-Regular ">
                    {item.job}
                  </p>
                </div>
                <div className="flex items-center justify-center p-[6px] md:p-3 rounded-[50%] bg-blueLight size-[32px] md:size-[50px]">
                  <ReportDecIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-9 md:rounded-xl md:mb-7 border-y md:border-t-0 border-[#F5F5F5]">
        <p className="text-[12px] md:text-[16px] font-Regular">
          الكالسيوم الكلي في الدم هو اختبار دم يتم إجراؤه لقياس الأشكال الحرة
          والمقيدة للكالسيوم.
          <br /> غالبا ما يكون جزءا من اختبار الفحص للكشف عن مستويات الكالسيوم
          المرتفعة والمنخفضة بشكل غير طبيعي ، حيث يمكن أن يؤثر كلاهما على الصحة.{" "}
          <br /> التأثير على الصحة العامة؟
          <br /> يمكن أن تحدث مستويات غير طبيعية من الكالسيوم بسبب مشاكل في
          امتصاص الكالسيوم وأمراض العظام ،<br /> فرط نشاط الغدة الدرقية ، مرض
          الغدة الدرقية ، أمراض الكلى أو الكبد.
          <br /> كيفية تحسين الظروف الصحية؟
          <br /> بالنسبة لمستويات الكالسيوم المنخفضة ، فإن اتباع نظام غذائي
          يحتوي على الأطعمة الغنية بالكالسيوم هو التوصية
        </p>
      </div>
      <div className=" bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-9 md:rounded-xl md:mb-7 border-y md:border-t-0 border-[#F5F5F5] rtl">
        <LineChart
          w={560}
          h={240}
          data={charts}
          dataKey="date"
          dotProps={{
            r: 5,
            fill: "#010036",
            stroke: "#010036",
            strokeWidth: 18,
          }}
          series={[
            { name: "temperature", color: "#010036"},
          ]}
          activeDotProps={{ r: 10, strokeWidth: 18, fill: "#fff",spacing:10}}
          curveType="linear"
          tickLine="none"
          withGradient={false}
          yAxisProps={{ domain: [0, 100] }}
          withYAxis={false}
          strokeWidth={5}
          
        />
      </div>
    </div>
  );
}

export default page;