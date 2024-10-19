"use client";
import React from "react";
import ServicesDetails from "../components/ServicesDetails";
import Card from "@/components/card";
import { useSearchParams } from "next/navigation";
import { Link, useRouter } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
import EditIcon from "@/assets/icons/edit";
import {
  DeleteMasterDataServices,
  GetMasterDataServicesID,
} from "@/useAPI/admin/main-data/services";
import HandelShowDataID from "@/components/handelShowDataID";
import Button from "@/components/button";
import DeleteIcon from "@/assets/icons/delete";
import LinkGreen from "@/components/linkGreen";

function Page({ params }) {
  const searchparams = useSearchParams();
  const { data, isLoading } = GetMasterDataServicesID(params.servicesID);
  console.log(data?.data.data);
  const { mutate: deleteMasterDataServices } = DeleteMasterDataServices(
    params.servicesID
  );
  const router = useRouter();

  const handleDelete = () => {
    deleteMasterDataServices();
    router.replace(ROUTES.ADMIN.DATAMAIN.SERVICES);
  };
  return (
    <Card>
      {searchparams.get("show") === "false" ? (
        <div>
          <div className="flex items-center justify-between gap-5 mb-10">
            <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
              <Link
                href={ROUTES.ADMIN.DATAMAIN.SERVICES}
                className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
              >
                <BackIcon className={"w-full h-full"} />
              </Link>
              <h2 className="headTitleDash"> الخدمات - داخلية</h2>
            </div>
          </div>
          <HandelShowDataID isLoading={isLoading} statusCode={data?.data.code}>
            {data?.data.code === 200 && (
              <>
                <div className="flex flex-col gap-5">
                  <div className="pb-5 border-b last-of-type:border-none border-grayLight">
                    <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                      اسم الخدمة
                    </h3>
                    <p className="text-base lg:text-xl font-bold">
                      {" "}
                      {data?.data.data.name}{" "}
                    </p>
                  </div>
                  <div className="pb-5 border-b last-of-type:border-none border-grayLight">
                    <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                      تعريف للخدمة
                    </h3>
                    <p className="text-base lg:text-xl font-bold">
                      {data?.data.data.definitionServices}
                    </p>
                  </div>
                  <div className="pb-5 border-b last-of-type:border-none border-grayLight">
                    <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                      سعر الخدمة
                    </h3>
                    <p className="text-base lg:text-xl font-bold">
                      {" "}
                      {data?.data.data.price}$
                    </p>
                  </div>
                  <div className="pb-5 border-b last-of-type:border-none border-grayLight">
                    <h3 className=" font-Regular mb-3 text-sm lg:text-base">
                      الشروط و الاحكام
                    </h3>
                    <p className="text-base lg:text-xl font-bold">
                      {data?.data.data.termsAndConditions}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 flex-col md:flex-row mt-11 max-w-[600px]">
                  <LinkGreen
                    href={ROUTES.ADMIN.DATAMAIN.SERVICESDETAILSEDIT(
                      data?.data.data.id
                    )}
                    className={" flex-1 w-full"}
                  >
                    <EditIcon pathColor="white" />
                    تعديل
                  </LinkGreen>
                  <Button
                    onClick={handleDelete}
                    className={
                      "text-base flex-1 w-full  px-3 flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none  !gap-3"
                    }
                  >
                    <DeleteIcon /> مسح
                  </Button>
                </div>
              </>
            )}
          </HandelShowDataID>
        </div>
      ) : (
        <HandelShowDataID isLoading={isLoading} statusCode={data?.data.code}>
          {data?.data.code === 200 && <ServicesDetails DataServices={data?.data.data} />}
        </HandelShowDataID>
      )}
    </Card>
  );
}

export default Page;
