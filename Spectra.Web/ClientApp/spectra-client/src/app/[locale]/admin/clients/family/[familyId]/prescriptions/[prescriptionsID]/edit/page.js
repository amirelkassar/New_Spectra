"use client";
import BackIcon from "@/assets/icons/back";
import Card from "@/components/card";
import Input from "@/components/input";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import React from "react";
import imgDrugs from "@/assets/images/drugs.png";
import { Textarea } from "@mantine/core";
import Button from "@/components/button";
import SaveIcon from "@/assets/icons/save";

function page({ params }) {
  return (
    <Card className="">
      <div className="flex items-center  mb-10 justify-between gap-4">
        <div className="flex   items-center gap-4 ">
          <Link
            href={ROUTES.ADMIN.CLIENTS.FAMILY.PRESCRIPTIONSDETAILS(params.familyId, params.prescriptionsID)}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="headTitleDash">الوصفات الطبية</h2>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            صور العقار{" "}
          </h3>
          <div className="flex items-center gap-2 mt-6 flex-wrap">
            <Image
              alt="drugs"
              src={imgDrugs}
              className=" h-[60px] lg:h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
            <Image
              alt="drugs"
              src={imgDrugs}
              className=" h-[60px] lg:h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
            <Image
              alt="drugs"
              src={imgDrugs}
              className=" h-[60px] lg:h-[100px] w-auto object-contain"
              width={100}
              height={110}
            />
          </div>
        </div>
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الاسم </h3>
          <Input
            value={"سيترالين"}
            containerClassName={
              "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
            }
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </div>
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            المادة الفعالة
          </h3>
          <Input
            value={"الريتنول"}
            containerClassName={
              "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
            }
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </div>
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">النوع</h3>

          <Input
            value={"مسكن"}
            containerClassName={
              "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
            }
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </div>
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">الكود</h3>

          <Input
            value={"#1245"}
            containerClassName={
              "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
            }
            labelClassName={"!text-[16px] !mb-0 px-4"}
            inputClassName={
              "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
            }
          />
        </div>
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            الجرعة الموصى بها
          </h3>

          <Textarea
            value={
              "الجرعة الأولية: 50 ملغ مرة واحدة يوميًا من الأقراص. لا تستخدم الكبسولات لبدء العلاج. جرعة الاستمرارية: يمكن زيادة الجرعة بمقدار 25 ملغ أسبوعيًا. الجرعة القصوى: 200 ملغ/اليوم."
            }
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] !font-bold  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
          />
        </div>
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">
            موانع الاستخدام
          </h3>
          <Textarea
            value={
              "فرط الحساسية تجاه العلاج أو لأي مكون آخر من مكوناته. الاستخدام المتزامن مع مثبطات أكسيداز أحادي الأمين (بالإنجليزية: Monoamine Oxidase Inhibitor or MAOI) وحتى 14 يوم بعد التوقف عن استخدامها."
            }
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] !font-bold  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
          />
        </div>
        <div className="pb-5 last-of-type:border-none ">
          <h3 className="font-bold mb-2 text-[12px] lg:text-[16px]">ملاحظات</h3>
          <Textarea
            value={
              "يحفظ العلاج في درجة حرارة الغرفة (15-25 درجة مئوية)، بعيدًا عن الرطوبة والحرارة، وبعيدًا عن متناول الأطفال."
            }
            classNames={{
              input:
                "min-h-[110px] !h-10 h-auto text-[12px] md:text-[16px] !font-bold  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-2xl",
              label: "text-[12px]  md:text-[16px]",
            }}
          />
        </div>
        <Button
          className={
            "mt-8 btnReqTable !py-3 text-[16px] lg:text-[20px] !px-2 lg:!px-5 font-Bold items-center flex  bg-greenMain justify-center  max-w-[260px] h-12 ring-1 !gap-4 !ring-greenMain border-none text-white"
          }
        >
          <SaveIcon />
          حفظ التعديلات
        </Button>
      </div>
    </Card>
  );
}

export default page;
