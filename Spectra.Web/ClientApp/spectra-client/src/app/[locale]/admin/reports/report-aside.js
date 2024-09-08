"use client";

import { Link, usePathname } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams } from "next/navigation";

const ReportAside = () => {
  const params = useParams();
  const path = usePathname();
console.log(params);
  const pages = [
    {
      name: "العملاء",
      route: ROUTES.ADMIN.REPORT.REPORTID(params.reportID),
      isActive:
        path === ROUTES.ADMIN.REPORT.REPORTID(params.reportID),
    },
    {
      name: "الوصفات الطبية",
      route: ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.DETAILS(params.patientsID),
      isActive:  path === '/'+params.locale+ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.DETAILS(params.patientsID)||path === '/'+params.locale+ROUTES.ADMIN.CLIENTS.PATIENTSDETAILS.EDIT(params.patientsID),
    },
    {
      name: "التقارير",
      route:  ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.patientsID),
      isActive:
        path === '/'+params.locale+ ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.patientsID),
    },
    {
      name: "جلسات كود الدعوة",
      route:  ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.patientsID),
      isActive:  path.includes('/'+params.locale+ ROUTES.ADMIN.CLIENTS.ORGANIZATION.CLIENTS(params.patientsID)),
    },
   
  ];
  return (
    <div className="w-[100%]  lg:w-56 shrink-0 overflow-auto bg-white lg:rounded-xl py-3 lg:pt-8 lg:ps-12 px-2 pe-6">
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

export default ReportAside;
