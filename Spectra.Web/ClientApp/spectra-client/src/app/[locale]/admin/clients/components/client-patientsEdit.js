"use client";
import Image from "next/image";
import childPlaceholder from "@/assets/images/child-placeholder.jpg";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { useParams } from "next/navigation";
import Input from "@/components/input";
import { useState } from "react";
import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Button from "@/components/button";
import EditIcon from "@/assets/icons/edit";
import EditImgIcon from "@/assets/icons/editImg";
import SaveIcon from "@/assets/icons/save";

const ClientPatientsEdit = () => {
  const [data, setData] = useState([
    {
      id: 0,
      name: "محمد عبدالله",
      image: childPlaceholder,
      nationalId: "25814739658",
      gender: "ذكر",
      dateOfBirth: "10/10/2024",
      relation: "الابن",
    },
    {
      id: 1,
      name: "محمد عبدالله",
      image: childPlaceholder,
      nationalId: "25814739658",
      gender: "ذكر",
      dateOfBirth: "10/10/2024",
      relation: "الابن",
    },
    {
      id: 2,
      name: "محمد عبدالله",
      image: childPlaceholder,
      nationalId: "25814739658",
      gender: "ذكر",
      dateOfBirth: "10/10/2024",
      relation: "الابن",
    },
  ]);
  const handleDescChange = (e, item) => {
    setData({ ...data, [item]: e.target.value });
  };
  const handleDescChangeMantine = (e, item) => {
    setData({ ...data, [item]: e });
  };
  const handleChange = (id, property, e) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [property]: e.target.value } : item
      )
    );
  };
  const handleChangeMantine = (id, property, e) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [property]: e } : item
      )
    );
  };
  const params = useParams();
  return (
    <section className="default-page grow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-9">
          <Link
            href={ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(params.orgId)}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon
              className={"w-full h-full"}
            />
          </Link>
          <h2>عبدالله الشيخ</h2>
        </div>
      </div>
      <div className=" my-9 px-3 block md:hidden">
        <ul className="flex flex-col gap-3">
          <li className="flex gap-1 items-center">
            <h3 className="text-[12px] text-[#010036] w-[96px]">الاسم </h3>
            <p className="text-[14px] text-[#010036] font-bold">
              عبدالله الشيخ
            </p>
          </li>
          <li className="flex gap-1 items-center">
            <h3 className="text-[12px] text-[#010036] w-[96px]">
              عدد الاطفال{" "}
            </h3>
            <p className="text-[14px] text-[#010036] font-bold"> 1 طفل</p>
          </li>
          <li className="flex gap-1 items-center">
            <h3 className="text-[12px] text-[#010036] w-[96px]">نوع العميل </h3>
            <p className="text-[14px] text-[#010036] font-bold"> عائلة الطفل</p>
          </li>
          <li className="flex gap-1 items-center">
            <h3 className="text-[12px] text-[#010036] w-[96px]">اخر دخول </h3>
            <p className="text-[14px] text-[#010036] font-bold"> 22/5/2024</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row   gap-8 max-w-[100px]  min-w-[100%]">
        {data.map((patient) => (
          <form
            key={patient.id}
            className="p-1 border-0   flex flex-col gap-2 relative max-w-[100%] md:max-w-[260px] clientEdit"
          >
            <div className="size-28 rounded-full flex items-center justify-center overflow-hidden self-center">
              <Image priority src={patient.image} alt="child" />
            </div>
            <div className="flex items-center gap-3 w-[100%]">
              <p className="min-w-[90px] text-[12px]">الاسم/</p>
              <Input
                handleOnChange={(e) => {
                  handleChange(patient.id, "name", e);
                }}
                setValue={setData}
                containerClassName={"max-w-[100%] flex-1"}
                value={patient.name}
                inputClassName={
                  "!h-[38px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold min-w-[100%] w-[100%]"
                }
              />
            </div>{" "}
            <div className="flex items-center gap-3">
              <p className="min-w-[90px] text-[12px]">الرقم القومي/</p>
              <Input
                handleOnChange={(e) => {
                  handleChange(patient.id, "nationalId", e);
                }}
                containerClassName={"max-w-[100%] flex-1"}
                value={patient.nationalId}
                inputClassName={
                  "!h-[38px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold min-w-[100%] w-[100%]"
                }
              />
            </div>{" "}
            <div className="flex items-center gap-3">
              <p className="min-w-[90px] text-[12px]">الجنس/</p>
              <Select
                className=" max-w-[100%] w-[100%]  !border-[#CFD0D7] !outline-none"
                defaultValue={patient.gender}
                data={["ذكر", "انثى"]}
                nothingFoundMessage="Nothing found..."
                onChange={(e) => {
                  handleChangeMantine(patient.id, "gender", e);
                }}
              />
            </div>{" "}
            <div className="flex items-center gap-3">
              <p className="min-w-[90px] text-[12px]">تاريخ الميلاد/</p>
              <DatePickerInput
                className=" max-w-[100%] lg:max-w-[240px] w-[100%] !border-[#CFD0D7] !outline-none"
                valueFormat="DD/MM/YYYY"
                defaultValue={new Date(patient.dateOfBirth)}
                onChange={(e) => {
                  handleChangeMantine(patient.id, "dateBirth", e);
                }}
              />
            </div>{" "}
            <div className="flex items-center gap-3">
              <p className="min-w-[90px] text-[12px]">علاقة العملاء بالمريض/</p>
              <Select
                className=" max-w-[100%]  lg:max-w-[240px] w-[100%] !border-[#CFD0D7] !outline-none"
                defaultValue={patient.relation}
                data={["الابن", "راعي"]}
                nothingFoundMessage="Nothing found..."
                onChange={(e) => {
                  handleChangeMantine(patient.id, "relationship", e);
                }}
              />
            </div>
          </form>
        ))}
      </div>
      <Button
        className={
          "mt-10 btnReqTable !py-3 text-[16px] lg:text-[20px] !px-2 lg:!px-5 font-Bold items-center flex  bg-greenMain justify-center  max-w-[260px] h-12 ring-1 !gap-4 !ring-greenMain border-none text-white"
        }
      >
        <SaveIcon />
        حفظ التعديلات
      </Button>
    </section>
  );
};

export default ClientPatientsEdit;
