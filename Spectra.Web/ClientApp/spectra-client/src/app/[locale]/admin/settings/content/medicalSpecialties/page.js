import React from "react";
import Card from "@/components/card";
import CardDoctor from "./_components/cardDoctor";
import RowDoctors from "./_components/rowDoctors";
import Button from "@/components/button";
function page() {
  return (
    <Card>
      <h1 className="text-center my-4 mdl:my-8 text-[24px] mdl:text-[36px] font-Bold">
        البانرات الدعائية
      </h1>
      <p className="text-center text-grayDark my-4 mdl:my-8 text-[16px] mdl:text-[24px] font-Bold">
        السحب والإفلات للأقسام لإعادة ترتيبها، قم بالضغط مطولًا على القسم
        المطلوب وسحبه إلى المكان الجديد.
      </p>
      <div>
        <h2 className=" mb-4 mdl:mb-8 text-[18px] mdl:text-[28px] mdl:ms-14 font-Bold">
          فريقنا الطبى
        </h2>
        <div className="flex flex-col gap-9">
          <RowDoctors title={"اخصائيين التوحد"} />
          <RowDoctors title={"اخصائيين التغذية"} />
          <RowDoctors title={"اخصائيين الاسرة"} />
        </div>
      </div>
      <Button variant={'secondary'} className="w-[80%] h-[60px] font-Bold max-w-full mx-auto my-12">تأكيد</Button>
    </Card>
  );
}

export default page;
