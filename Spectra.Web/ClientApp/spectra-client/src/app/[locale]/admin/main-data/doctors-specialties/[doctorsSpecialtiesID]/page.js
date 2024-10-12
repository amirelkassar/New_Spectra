import React from "react";
import AddMainData from "../../_components/add-drugs";
import ROUTES from "@/routes";
import ActionMenu from '../../_components/ActionMenuSpecialtiesDetails'
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
function page({params}) {
  console.log(params);
  

  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-10">
        <div className="flex  flex-col mt-6 lg:mt-0 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <Link
            href={ROUTES.ADMIN.DATAMAIN.SPECIALTIES}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="headTitleDash">تخصصات طبية </h2>
          <AddMainData
            title={"أضافة تخصص "}
            path={ROUTES.ADMIN.DATAMAIN.SPECIALTIESADD}
          />
        </div>
        <ActionMenu id={params.doctorsSpecialtiesID} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            اسم التخصص
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">نفسية</p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            وصف التخصص
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">
            العلاج النفسى للاطفال
          </p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            تكلفة الجلسة
          </h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular">100 $</p>
        </div>
        <div className="pb-5 border-b last-of-type:border-none border-grayLight">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الكود</h3>
          <p className="text-[14px] lg:text-[20px]  font-Regular"># 1234</p>
        </div>
      </div>
    </div>
  );
}

export default page;
