import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import React from "react";
import imgDrugs from "@/assets/images/drugs.png";
import man from "@/assets/images/placeholder-person.png";
function page() {
  return (
    <div>
      <div className="flex mb-10   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.HOME}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">العقاقير</h2>
      </div>
      <div className="flex flex-col gap-5">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2">صور العقار </h3>
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            <Image
              alt="drugs"
              src={imgDrugs}
              className="h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
            <Image
              alt="drugs"
              src={imgDrugs}
              className="h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
            <Image
              alt="drugs"
              src={imgDrugs}
              className="h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
          </div>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2">الاسم </h3>
          <p className="text-[20px] font-Regular">سيترالين </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2">المادة الفعالة</h3>
          <p className="text-[20px] font-Regular">الريتنول </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2">النوع</h3>
          <p className="text-[20px] font-Regular">مسكن </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2">الكود</h3>
          <p className="text-[20px] font-Regular">#1245 </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2">الجرعة الموصى بها</h3>
          <p className=" font-Regular">
            الجرعة الأولية: 50 ملغ مرة واحدة يوميًا من الأقراص. لا تستخدم
            الكبسولات لبدء العلاج. <br />
            جرعة الاستمرارية: يمكن زيادة الجرعة بمقدار 25 ملغ أسبوعيًا.
            <br /> الجرعة القصوى: 200 ملغ/اليوم.
          </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2">موانع الاستخدام</h3>
          <p className=" font-Regular">
            فرط الحساسية تجاه العلاج أو لأي مكون آخر من مكوناته.
            <br /> الاستخدام المتزامن مع مثبطات أكسيداز أحادي الأمين
            (بالإنجليزية: Monoamine Oxidase Inhibitor or MAOI) <br />
            وحتى 14 يوم بعد التوقف عن استخدامها.
          </p>
        </div>
        <div className="bg-blueLight rounded-xl px-8 py-7">
          <h3 className="font-bold mb-2">ملاحظات</h3>
          <p className="text-[20px] font-Regular pb-5 border-b border-black/15">
            يحفظ العلاج في درجة حرارة الغرفة (15-25 درجة مئوية)، بعيدًا عن
            الرطوبة والحرارة، وبعيدًا عن متناول الأطفال.
          </p>
          <div className="flex gap-2 items-center mt-6">
            <Image
              width={38}
              height={38}
              src={man}
              alt="man"
              className=" rounded-[50%] min-w-[38px] w-[38px] h-[38px] object-cover object-top"
            />
            <h2 className="text-[14px] sml:text-[16px] font-ExtraLight">
              الاخصائى : احمد محمد كمال
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
