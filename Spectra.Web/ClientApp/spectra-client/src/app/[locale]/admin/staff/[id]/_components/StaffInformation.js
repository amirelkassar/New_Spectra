"use client";
import React from "react";
import Card from "@/components/card";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import Image from "next/image";
import imgStaff from "@/assets/images/staff.png";
import ActionMenu from "./ActionMenu";
import PageEditStaff from "./pageEditStaff";
import { useSearchParams } from "next/navigation";
function StaffInformation() {
  const searchParams = useSearchParams();

  return searchParams.get("edit") === "true" ? (
    <PageEditStaff />
  ) : (
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
          <ActionMenu />
        </div>
        <div className="flex flex-wrap gap-3 mdl:gap-6 items-center">
          <Image
            src={imgStaff}
            alt="imgStaff"
            width={230}
            height={230}
            className=" size-[142px] lg:size-[230px] aspect-square"
          />

          <ul className="flex flex-col gap-4 mdl:gap-7">
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                الاسم
              </h4>
              <p className="text-xs lg:text-base font-bold    ">
                فاطمة على محمد
              </p>
            </li>
            <li className=" flex items-center gap-4 lg:gap-8 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                رقم الهاتف
              </h4>
              <p className="text-xs lg:text-base font-bold    ">9852146+</p>
            </li>
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                البريد الالكترونى
              </h4>
              <p className="text-xs lg:text-base font-bold    ">
                Fatma@gmail.com
              </p>
            </li>
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                رقم الهوية
              </h4>
              <p className="text-xs lg:text-base font-bold    ">58226541</p>
            </li>
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                عدد العملاء
              </h4>
              <p className="text-xs lg:text-base font-bold    ">50 عميل</p>
            </li>
          </ul>
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
