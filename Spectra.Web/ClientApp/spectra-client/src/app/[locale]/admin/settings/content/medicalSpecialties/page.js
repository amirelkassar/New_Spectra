import React from "react";
import Card from "@/components/card";
import Button from "@/components/button";
import DoctorsContainer from "./_components/DoctorsContainer";
import { Link } from "@/navigation";
import ROUTES from "@/routes";

function Page() {
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
        <DoctorsContainer />
      </div>
      <Button
        variant={"secondary"}
        className="w-[80%] h-[60px] font-Bold max-w-full mx-auto my-12"
      >
        تأكيد
      </Button>
      <Link
        href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
        className="w-[80%] mx-auto h-[60px] duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl text-[20px] font-Bold"
      >
        إلغاء
      </Link>
    </Card>
  );
}

export default Page;
