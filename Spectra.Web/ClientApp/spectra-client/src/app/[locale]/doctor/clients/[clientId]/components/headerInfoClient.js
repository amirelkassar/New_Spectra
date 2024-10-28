"use client";
import BackIcon from "@/assets/icons/back";
import { Link, usePathname } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import React from "react";
import imgdoc from "@/assets/images/doctor.png";
import MessageIconGreenMain from "@/assets/icons/message-green";
import { useParams } from "next/navigation";

function HeaderInfoClient() {
  const params = useParams();
  const path = usePathname();
  const TitlesLinks = [
    {
      name: "الوصفات الطبية ",
      route: ROUTES.DOCTOR.CLIENTS.PRESCRIPTIONSPATIENTS(params.clientId),
      isActive:
        path ===
        ROUTES.DOCTOR.CLIENTS.PRESCRIPTIONSPATIENTSDETAILS(
          params.clientId,
          params.prescriptionsID
        ),
    },
    {
      name: "التقارير",
      route: ROUTES.DOCTOR.CLIENTS.REPORTPATIENTS(params.clientId),
      isActive:
        path ===
        ROUTES.DOCTOR.CLIENTS.REPORTPATIENTSDETAILS(
          params.clientId,
          params.reportsID
        ),
    },
  ];
  return (
    <div className="col-span-1 lg:col-span-2 bg-white  md:px-6 lg:pb-12 pt-4 lg:rounded-xl relative">
      <div className="flex items-center justify-between gap-4 mb-6 ">
        <div className="flex   items-center gap-4 ">
          <Link
            href={
              TitlesLinks.find((item) => item.isActive === true)?.route ||
              ROUTES.DOCTOR.CLIENTS.DASHBOARD
            }
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h1 className="headTitleDash ">
            {TitlesLinks.find((item) => item.isActive === true)?.name ||
              "العملاء"}{" "}
          </h1>
        </div>
      
      </div>

      <div className="flex w-full flex-wrap border-2 md:border-none rounded-xl px-4 py-3 border-grayLight ">
        <div className="flex flex-1 gap-3 items-center lg:gap-8">
          <div className=" size-10 mdl:size-20  rounded-full ">
            <Image
              src={imgdoc}
              alt="doctor"
              width={400}
              height={400}
              className="object-cover object-top rounded-full  size-10 mdl:size-20 "
            />
          </div>
          <div className="flex flex-col gap-1 mdl:gap-4  ">
            <p className="text-nowrap w-fit sml:w-[110px] md:w-auto text-xs mdl:text-[16px] flex items-center gap-1">
              الاسم
            </p>
            <h2 className="text-xs mdl:text-[16px] font-bold">
              {" "}
              عبدالله الشيخ
            </h2>
          </div>
        </div>
        <div className="flex flex-1 gap-1 justify-between items-center lg:gap-8">
          <div className="flex  flex-col gap-1 mdl:gap-4  ">
            <p className="text-nowrap w-fit sml:w-[110px] md:w-auto text-xs mdl:text-[16px] flex items-center gap-1">
              اسم الطفل
            </p>
            <h2 className="text-xs mdl:text-[16px] font-bold">احمد عبدالله</h2>
          </div>
          <Link
            href={"#"}
            className="bg-blueLight duration-200 hover:shadow-md size-9 mdl:size-12 rounded-full flex items-center justify-center p-2 mdl:p-3"
          >
            <MessageIconGreenMain />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfoClient;
