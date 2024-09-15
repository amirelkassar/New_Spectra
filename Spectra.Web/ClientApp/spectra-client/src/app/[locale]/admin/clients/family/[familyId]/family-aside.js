"use client";

import { Link, usePathname } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams } from "next/navigation";

const FamilyAside = () => {
  const params = useParams();
  const path = usePathname();
  const pages = [
    {
      name: "بيانات عائلة الطفل",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.DETAILS(params.familyId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.FAMILY.DETAILS(params.familyId) ||
        path === ROUTES.ADMIN.CLIENTS.FAMILY.DETAILSEDIT(params.familyId),
    },
    {
      name: "المواعيد",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.APPOINTMENTS(params.familyId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.FAMILY.APPOINTMENTS(params.familyId),
    },
    {
      name: "الوصفات الطبية",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.PRESCRIPTIONS(params.familyId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.FAMILY.PRESCRIPTIONS(params.familyId),
    },
    {
      name: " التقارير",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.REPORTS(params.familyId),
      isActive: path === ROUTES.ADMIN.CLIENTS.FAMILY.REPORTS(params.familyId),
    },
    {
      name: "المرضى / الاطفال",
      route: ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(params.familyId),
      isActive:
        path === ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(params.familyId) ||
        path === ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTSEDIT(params.familyId),
    },
  ];

  return (
    <div className="w-[100%] lg:w-56 shrink-0 overflow-auto bg-white rounded-xl py-3 lg:pt-8 lg:ps-12 px-2 pe-6">
      <ul className="flex lg:flex-col  items-start gap-3  lg:gap-5">
        {pages.map((page) => (
          <li key={page.name} className="lg:w-[100%] ">
            <Link
              href={page.route}
              className={clsx(
                " transition text-nowrap w-auto lg:w-full py-2 flex items-center justify-start px-3  font-bold rounded-xl gap-3 text-[12px] md:text-[16px] ",
                page.isActive
                  ? "bg-greenMain text-white"
                  : "bg-transparent text-black"
              )}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamilyAside;
