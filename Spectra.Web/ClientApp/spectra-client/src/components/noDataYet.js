import NoDataIcon from "@/assets/icons/noData";
import React from "react";
import LinkGreen from "./linkGreen";
import ROUTES from "@/routes";

function NoDataYet() {
  return (
    <div className="flex-1 h-full ">
      <NoDataIcon
        className={
          " mb-6 w-[310px] md:w-[528px] max-w-[90%] mx-auto block h-auto"
        }
      />
      <h2 className="text-sm mdl:text-xl font-Bold text-center mb-3">
        هذه الصفحة لا تحتوي على بيانات في الوقت الحالي.
      </h2>
      <p className="text-sm max-w-[670px] mx-auto mdl:text-xl mb-9 font-Regular text-center ">
        يُرجى التفاعل مع الأنشطة أو العمليات المطلوبة لتسجيل البيانات هنا. سيتم
        تحديث المحتوى تلقائيًا عند توفر البيانات الجديدة.
      </p>
      <LinkGreen
        href={ROUTES.ADMIN.MAIN}
        className="text-sm mdl:text-xl font-Bold w-[330px] mx-auto max-w-[80%]"
      >
        الرجوع للرئيسية
      </LinkGreen>
    </div>
  );
}

export default NoDataYet;
