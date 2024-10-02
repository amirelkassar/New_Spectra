import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from "../../_components/ActionMenuDiagnosticsDetails";
function page({ params }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-10">
        <div className="flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
          <h2 className="headTitleDash">التشخيصات </h2>
          <AddMainData
            title={"أضافة تشخيص "}
            path={ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSADD}
          />
        </div>
        <ActionMenu id={params.diagnosticsID}/>
      </div>
      <div className="flex flex-col gap-5">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            الكود 1{" "}
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">#12358 </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            الكود 2{" "}
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">#12358 </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            الكود 3{" "}
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">#12358 </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">وصف </h3>
          <p className="text-[12px]  lg:text-[16px] font-Regular">
            اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية
            تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب
            في حدوث مشكلات في التفاعل والتواصل الاجتماعي. كما يتضمن الاضطراب
            أنماط محدودة ومتكررة من السلوك. يُشير مصطلح الطي في عبارة اضطراب طيف
            التوحد إلى مجموعة كبيرة من الأعراض ومستويات الشدة. يتضمن اضطراب طيف
            التوحد حالات كانت تعتبر منفصلة في السابق — التوحد، ومتلازمة أسبرجر،
            واضطراب التحطم الطفولي وأحد الأشكال غير المحددة للاضطراب النمائي
            الشامل. لا زال بعض الأفراد يستخدمون مصطلح متلازمة أسبرجر، والتي
            يعتقد بوجه عام أنها تقع على الطرف المعتدل من اضطراب طيف التوحد. يبدأ
            اضطراب طيف التوحد في مرحلة الطفولة المبكرة ويتسبب في نهاية المطاف في
            حدوث مشكلات على مستوى الأداء الاجتماعي — على الصعيد الاجتماعي، في
            المدرسة والعمل، على سبيل المثال. غالبًا ما تظهر أعراض التوحد على
            الأطفال في غضون السنة الأولى. يحدث النمو بصورة طبيعية على ما يبدو
            بالنسبة لعدد قليل من الأطفال في السنة الأول
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
