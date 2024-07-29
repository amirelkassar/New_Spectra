"use client";
import BackIcon from "@/assets/icons/back";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import ReportDecIcon from "@/assets/icons/reportDec";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";
import man from "@/assets/images/placeholder-person.png";
import ROUTES from "@/routes";
import { useParams } from "next/navigation";

function ReportsNumber({
  title,
  addReport,
  addPrescriptions,
  haveBack = false,
}) {
  const data = [
    {
      id: 0,
      name: "احمد محمد",
      nameChild: "احمد عبدالله",
      image: man,
    },
    {
      id: 1,
      name: "احمد محمد",
      nameChild: "احمد عبدالله",
      image: man,
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      nameChild: " احمد عبدالله",
      image: man,
    },
  ];
  const params = useParams();

  return (
    <div className=" flex-1">
      <div className=" lg:mb-5 bg-white px-0 md:px-4 lg:px-6 xl:px-12 py-6 lg:rounded-xl">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="flex mb-1   items-center gap-4 ">
            {haveBack && (
              <Link
                href={ROUTES.DOCTOR.CLIENTS.DASHBOARD}
                className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
              >
                <BackIcon className={"w-full h-full"} />
              </Link>
            )}

            <h2 className="headTitleDash">{title}</h2>
            {params.clientId ? (
              addPrescriptions ? (
                <Link
                  href={ROUTES.DOCTOR.CLIENTS.ADDPRESCRIPTIONSPATIENTS(
                    params.clientId
                  )}
                  className="flex items-center justify-center w-44 h-10 rounded-xl bg-blueLight gap-4 font-bold"
                >
                  <PlusInsideCircleIcon />
                  <p className=" text-[14px] md:text-[16px] font-bold">
                    أضافة وصفه الطبية
                  </p>
                </Link>
              ) : addReport ? (
                <Link
                  href={ROUTES.DOCTOR.CLIENTS.ADDREPORTPATIENTS(
                    params.clientId
                  )}
                  className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold"
                >
                  <PlusInsideCircleIcon />
                  <p className=" text-[14px] md:text-[16px] font-bold">
                    أضافة تقرير
                  </p>
                </Link>
              ) : null
            ) : null}
          </div>
          <MenuActions type={2} />
        </div>
        <div className="flex flex-col gap-8 mb-5 ">
          {data.map((item, i) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center gap-7 flex-1"
              >
                <div className="flex items-center gap-x-3 md:gap-x-12 gap-y-4 flex-wrap">
                  <div className="flex items-center gap-3 md:gap-7">
                    <Image
                      src={item.image}
                      width={52}
                      height={52}
                      className=" size-[30px] md:size-[52px] rounded-[50%] object-cover object-top"
                      alt="man"
                    />
                    <h2 className="text-[12px] md:text-[16px] font-extrabold min-w-[76px] md:min-w-[96px]">
                      {item.name}
                    </h2>
                  </div>
                  <p className="text-[12px] md:text-[16px] font-Regular ">
                    {item.nameChild}
                  </p>
                </div>
                <div className="flex items-center justify-center p-[6px] md:p-3 rounded-[50%] bg-blueLight size-[32px] md:size-[50px]">
                  <ReportDecIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReportsNumber;
