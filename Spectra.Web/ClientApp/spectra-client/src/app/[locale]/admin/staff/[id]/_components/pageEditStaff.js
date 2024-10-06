"use client";
import Card from "@/components/card";
import { Link, useRouter } from "@/navigation";
import ROUTES from "@/routes";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import BackIcon from "@/assets/icons/back";
import Input from "@/components/input";
import imgStaff from "@/assets/images/staff.png";
import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Button from "@/components/button";

function PageEditStaff({ id }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRemoveEdit = () => {
    router.push(
      ROUTES.ADMIN.STAFF.STAFFID(id) + "?type=" + searchParams.get("type")
    );
  };
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
              <Input
                value={" فاطمة على محمد"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                رقم الهاتف
              </h4>
              <Input
                value={"9852146+"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                البريد الالكترونى
              </h4>
              <Input
                value={"Fatma@gmail.com"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                رقم الهوية
              </h4>
              <Input
                value={"58226541"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
            <li className=" flex items-center gap-5 text-xs lg:text-base font-Regular">
              <h4 className="text-xs lg:text-base font-Regular min-w-[84px] mdl:min-w-[130px]">
                عدد العملاء
              </h4>
              <Input
                value={"50 عميل"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
          </ul>
        </div>
      </Card>
      <Card>
        <h3 className="text-sm lg:text-xl font-bold mb-6 lg:mb-8">
          الوصف الوظيفى
        </h3>
        <form className="clientEdit">
          <ul className="flex   flex-col gap-5 ">
            <li className="flex items-center gap-4 lg:gap-8">
              <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
                المسمى الوظيفي{" "}
              </h4>
              <Input
                value={"سكرتيره"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
            <li className="flex items-center gap-4 lg:gap-8">
              <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
                القسم
              </h4>
              <Input
                value={" الطب النفسى"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
            <li className="flex items-center gap-4 lg:gap-8">
              <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
                المؤهلات
              </h4>
              <Input
                value={"  بكالوريوس اداب بجامعة السعودية"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
            <li className="flex items-center gap-4 lg:gap-8">
              <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
                تاريخ الانضمام
              </h4>

              <DatePickerInput
                className="w-full !border-[#CFD0D7] !outline-none"
                placeholder="Pick date"
                valueFormat="DD/MM/YYYY"
                defaultValue={new Date("5/5/2020")}
                classNames={{
                  input:
                    "h-auto w-full min-h-11 py-2 text-[12px] md:text-xl !font-Regular  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-xl",
                }}
              />
            </li>
            <li className="flex items-center gap-4 lg:gap-8">
              <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
                الحالة الوظيفية
              </h4>

              <Select
                className=" w-full  !border-[#CFD0D7] !outline-none"
                defaultValue={"نشط"}
                data={["غير نشط", "نشط"]}
                searchable
                nothingFoundMessage="Nothing found..."
              />
            </li>
            <li className="flex items-center gap-4 lg:gap-8">
              <h4 className="text-xs lg:text-base font-Regular min-w-[130px]">
                ساعات العمل
              </h4>
              <Input
                value={"8 ساعات"}
                containerClassName={"!gap-1 flex-1  max-w-full"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </li>
          </ul>
          <Button
            variant="secondary"
            onClick={handleRemoveEdit}
            className="h-14 mt-14 max-w-full w-[360px] text-xl font-Bold"
          >
            حفظ التعديلات
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default PageEditStaff;
