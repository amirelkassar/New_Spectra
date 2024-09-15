import React from "react";
import Card from "@/components/card";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import Image from "next/image";
import imgStaff from "@/assets/images/staff.png";
import ActionMenu from "./ActionMenu";
function StaffInformation() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Card>
        <div className="flex items-center justify-between mb-8  gap-5">
          <div className="flex items-center gap-2 lg:gap-3">
            <Link
              href={ROUTES.ADMIN.STAFF.DASHBOARD}
              className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
            >
              <BackIcon className={"w-full h-full"} />
            </Link>
            <h2 className="text-base lg:text-xl font-bold ">الموظفين</h2>
          </div>
          <ActionMenu/>
        </div>
        <div className="flex gap-6 items-center">
          <Image
            src={imgStaff}
            alt="imgStaff"
            width={230}
            height={230}
            className=" size-[158px] lg:size-[230px] aspect-square"
          />
          <div>
            <h3 className="text-xs lg:text-base font-bold mb-3">
              فاطمة على محمد
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-xs lg:text-base font-Regular">5/5/1980</li>
              <li className="text-xs lg:text-base font-Regular">95255411+</li>
              <li className="text-xs lg:text-base font-Regular">
                Fatma@gmail.com
              </li>
              <li className="text-xs lg:text-base font-Regular">50 عميل</li>
            </ul>
          </div>
        </div>
      </Card>
      <Card>
        <h3 className="text-sm lg:text-xl font-bold mb-6 lg:mb-8">
          الوصف الوظيفى
        </h3>
        <ul className="flex flex-col gap-5 ">
          <li className="flex items-center gap-4 lg:gap-8">
            <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
              المسمى الوظيفي{" "}
            </h4>
            <p className="text-xs lg:text-base font-bold    ">سكرتيره</p>
          </li>
          <li className="flex items-center gap-4 lg:gap-8">
            <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
              القسم
            </h4>
            <p className="text-xs lg:text-base font-bold    ">الطب النفسى</p>
          </li>
          <li className="flex items-center gap-4 lg:gap-8">
            <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
              المؤهلات
            </h4>
            <p className="text-xs lg:text-base font-bold    ">
              بكالوريوس اداب بجامعة السعودية
            </p>
          </li>
          <li className="flex items-center gap-4 lg:gap-8">
            <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
              تاريخ الانضمام
            </h4>
            <p className="text-xs lg:text-base font-bold    ">5/5/2020</p>
          </li>
          <li className="flex items-center gap-4 lg:gap-8">
            <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
              الحالة الوظيفية
            </h4>
            <p className="text-xs lg:text-base font-bold    ">نشط</p>
          </li>
          <li className="flex items-center gap-4 lg:gap-8">
            <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
              ساعات العمل
            </h4>
            <p className="text-xs lg:text-base font-bold    ">8 ساعات</p>
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default StaffInformation;
