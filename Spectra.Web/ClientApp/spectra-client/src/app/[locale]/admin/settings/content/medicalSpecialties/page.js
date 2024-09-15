import React from "react";
import Card from "@/components/card";
import Button from "@/components/button";
import DoctorsContainer from "./_components/DoctorsContainer";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";

function Page() {
  return (
    <Card>
      <div className=" mb-7 lgl:mb-14 ">
        <div className="flex items-center  gap-2 lg:gap-3">
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="text-base lg:text-[24px] font-bold ">
            التخصصات الطبية
          </h2>
        </div>
        <p className="text-center lgl:text-start text-grayDark my-3 lgl:my-8 text-sm lgl:text-[18px] font-Regular">
          السحب والإفلات للأقسام لإعادة ترتيبها، قم بالضغط مطولًا على القسم
          المطلوب وسحبه إلى المكان الجديد.
        </p>
      </div>

      <div>
        <h2 className=" mb-4 lgl:mb-8 text-[18px] lgl:text-[28px] lgl:ms-14 font-Bold">
          فريقنا الطبى
        </h2>
        <DoctorsContainer />
      </div>
      <div className="flex flex-col gap-5 mt-14 lgl:mt-20 w-full md:w-[80%]  mx-auto ">
        <Button
          variant={"secondary"}
          className=" h-[48px] lgl:h-[60px] text-sm lgl:text-xl font-Bold max-w-full  w-full"
        >
          تأكيد
        </Button>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.DASHBOARD}
          className="w-full  h-[48px] lgl:h-[60px] text-sm lgl:text-xl duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </Card>
  );
}

export default Page;
