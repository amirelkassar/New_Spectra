"use client";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

function HeaderAdd({ title, data }) {
  const params = useParams();
  return (
    <div className="mdl:p-7 px-2 py-4 mdl:rounded-[10px] bg-white flex-1">
      <div className="flex mb-1   items-center gap-4 ">
        <Link
          href={ROUTES.DOCTOR.CLIENTS.REPORTPATIENTS(params.clientId)}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>

        <h2 className="headTitleDash">{title}</h2>
      </div>
      <div className="flex justify-between items-center gap-7 flex-1 mt-8">
        <div className="flex items-center gap-x-3 md:gap-x-12 gap-y-4 flex-wrap">
          <div className="flex items-center gap-3 md:gap-7">
            <Image
              src={data.image}
              width={52}
              height={52}
              className=" size-[30px] md:size-[52px] rounded-[50%] object-cover object-top"
              alt="man"
            />
            <h2 className="text-[12px] md:text-[16px] font-extrabold min-w-[76px] md:min-w-[96px]">
              {data.name}
            </h2>
          </div>
          <p className="text-[12px] md:text-[16px] font-Regular ">
            {data.childName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdd;
