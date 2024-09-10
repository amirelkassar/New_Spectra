"use client";
import Image from "next/image";
import childPlaceholder from "@/assets/images/child-placeholder.jpg";
import MenuActions from "@/components/menu-actions";
import { Link, useRouter } from "@/navigation";
import ROUTES from "@/routes";
import BackIcon from "@/assets/icons/back";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import { useParams } from "next/navigation";
import ActionMenu from "./ActionMenuPatients";

const ClientPatients = () => {
  const patients = [
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
  ];
  const params = useParams();
  const router = useRouter();


  return (
    <section className="default-page grow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-9">
          <button
            onClick={() => {
              router.back();
            }}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </button>
          <h2>عبدالله الشيخ</h2>
        
        </div>
        <ActionMenu
          type={params.orgId ? "organization" : "family"}
          id={params.orgId?params.orgId:params.familyId}
          id2={params.clientID}
          pathEdit={
            params.orgId
              ? ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTSEDIT(params.orgId,params.clientID)
              : ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTSEDIT(params.familyId)
          }
        />
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
      <div className="flex  gap-5 max-w-[100px] overflow-auto min-w-[100%]">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className=" border-2 border-blueLight rounded-xl  relative"
          >
            <div className=" absolute left-4 top-[18px]">
              <MenuActions type={2} path={ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.DETAILS(patient.id)} pathEdit={ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.EDIT(patient.id)} />
            </div>
            <Link
              href={ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.DETAILS(patient.id)}
              className=" p-5 flex flex-col gap-2 "
            >
              <div className="size-28 rounded-full flex items-center justify-center overflow-hidden self-center">
                <Image priority src={patient.image} alt="child" />
              </div>
              <div className="flex items-center gap-3">
                <p className="min-w-[94px] text-[12px]">الاسم/</p>
                <strong>{patient.name}</strong>
              </div>{" "}
              <div className="flex items-center gap-3">
                <p className="min-w-[94px] text-[12px]">الرقم القومي/</p>
                <strong>{patient.nationalId}</strong>
              </div>{" "}
              <div className="flex items-center gap-3">
                <p className="min-w-[94px] text-[12px]">الجنس/</p>
                <strong>{patient.gender}</strong>
              </div>{" "}
              <div className="flex items-center gap-3">
                <p className="min-w-[94px] text-[12px]">تاريخ الميلاد/</p>
                <strong>{patient.dateOfBirth}</strong>
              </div>{" "}
              <div className="flex items-center gap-3">
                <p className="min-w-[94px] text-[12px]">
                  علاقة العملاء بالمريض/
                </p>
                <strong>{patient.relation}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientPatients;
