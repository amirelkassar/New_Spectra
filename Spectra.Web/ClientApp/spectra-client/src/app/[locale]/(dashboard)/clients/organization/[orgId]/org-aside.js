"use client";

import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams, usePathname } from "next/navigation";

const OrgAside = () => {
  const params = useParams();
  const path = usePathname();

  const pages = [
    {
      name: "بيانات المنظمة",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(params.orgId),
      isActive:
        path === '/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.DETAILS(params.orgId),
    },
    {
      name: "موظفين المنظمة",
      route: "",
      isActive: false,
    },
    {
      name: "عملاء المنظمة",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.orgId),
      isActive:
        path === '/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.orgId),
    },
    {
      name: "اطباء المنظمة",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.DOCTORS(params.orgId),
      isActive:  path.includes('/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.DOCTORS(params.orgId)),
    },
    {
      name: "المواعيد",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.APPOINTMENTS(params.orgId),
      isActive:  path.includes('/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.APPOINTMENTS(params.orgId)),
    },
    {
      name: "الوصفات الطبية",
      route: "",
      isActive: false,
    },
    {
      name: "المرضى/الاطفال",
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(params.orgId),
      isActive:
        path === '/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTS(params.orgId)||path === '/'+params.locale+ROUTES.ADMIN.CLIENTS.ORGANIZATION.PATIENTSEDIT(params.orgId),
    },
  ];
  return (
    <div className="w-[100%] lg:w-56 shrink-0 overflow-auto bg-white lg:rounded-xl py-3 lg:pt-8 lg:ps-12 px-2 pe-6">
        <ul className="flex lg:flex-col  items-start  gap-5">
        {pages.map((page) => (
          <li key={page.name} className="lg:w-[100%] ">
            <Link
              href={page.route}
              className={clsx(
                " transition text-nowrap  w-full py-2 flex items-center justify-start px-3 text-[12px] md:text-[16px]   font-bold rounded-xl gap-3",
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

export default OrgAside;
