import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import React from "react";
import imgDrugs from "@/assets/images/drugs.png";
import ActionMenu from "../_components/ActionMenuDetails";
function page({ params }) {
  return (
    <div>
      <div className="flex items-center  mb-10 justify-between gap-4">
        <div className="flex   items-center gap-4 ">
          <Link
            href={ROUTES.ADMIN.DATAMAIN.HOME}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="headTitleDash">العقاقير</h2>
        </div>
        <ActionMenu id={params.drugsID} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            صور العقار{" "}
          </h3>
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            <Image
              alt="drugs"
              src={imgDrugs}
              className=" h-[60px] lg:h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
            <Image
              alt="drugs"
              src={imgDrugs}
              className=" h-[60px] lg:h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
            <Image
              alt="drugs"
              src={imgDrugs}
              className=" h-[60px] lg:h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
          </div>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الاسم </h3>
          <p className=" text-[14px] lg:text-[20px] font-Regular">سيترالين </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            المادة الفعالة
          </h3>
          <p className=" text-[14px] lg:text-[20px] font-Regular">الريتنول </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">النوع</h3>
          <p className=" text-[14px] lg:text-[20px] font-Regular">مسكن </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الكود</h3>
          <p className=" text-[14px] lg:text-[20px] font-Regular">#1245 </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            الجرعة الموصى بها
          </h3>
          <p className=" font-Regular text-[12px] lg:text-[16px]">
            الجرعة الأولية: 50 ملغ مرة واحدة يوميًا من الأقراص. لا تستخدم
            الكبسولات لبدء العلاج. <br />
            جرعة الاستمرارية: يمكن زيادة الجرعة بمقدار 25 ملغ أسبوعيًا.
            <br /> الجرعة القصوى: 200 ملغ/اليوم.
          </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            موانع الاستخدام
          </h3>
          <p className=" font-Regular text-[12px] lg:text-[16px]">
            فرط الحساسية تجاه العلاج أو لأي مكون آخر من مكوناته.
            <br /> الاستخدام المتزامن مع مثبطات أكسيداز أحادي الأمين
            (بالإنجليزية: Monoamine Oxidase Inhibitor or MAOI) <br />
            وحتى 14 يوم بعد التوقف عن استخدامها.
          </p>
        </div>
        <div className="bg-blueLight rounded-xl px-8 py-7">
          <h3 className="font-bold mb-3 text-[12px] lg:text-[16px]">ملاحظات</h3>
          <p className=" text-[14px] lg:text-[20px] font-Regular pb-3 ">
            يحفظ العلاج في درجة حرارة الغرفة (15-25 درجة مئوية)، بعيدًا عن
            الرطوبة والحرارة، وبعيدًا عن متناول الأطفال.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
