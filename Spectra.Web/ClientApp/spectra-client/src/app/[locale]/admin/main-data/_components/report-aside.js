"use client";

import { Link, usePathname } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";

import { useParams } from "next/navigation";

const MainDataAside = () => {
  const params = useParams();
  const path = usePathname();

  const pages = [
    {
      name: "عقاقير",
      route: ROUTES.ADMIN.DATAMAIN.HOME,
      isActive:
        path === ROUTES.ADMIN.DATAMAIN.HOME ||
        path === ROUTES.ADMIN.DATAMAIN.DRUGSDETAILS(params.drugsID),
    },
    {
      name: "تخصصات الاطباء",
      route: ROUTES.ADMIN.DATAMAIN.SPECIALTIES,
      isActive:
        path === ROUTES.ADMIN.DATAMAIN.SPECIALTIES ||
        path === ROUTES.ADMIN.DATAMAIN.SPECIALTIESADD,
    },
    {
      name: "التحاليل و الاشاعات",
      route: ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS,
      isActive:
        path === ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORS ||
        path === ROUTES.ADMIN.DATAMAIN.ANALYSISRUMORSADD,
    },
    {
      name: "التشخيصات",
      route: ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS,
      isActive:
        path === ROUTES.ADMIN.DATAMAIN.DIAGNOSTICS ||
        path === ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSADD ||
        path === ROUTES.ADMIN.DATAMAIN.DIAGNOSTICSDETAILS(params.diagnosticsID),
    },
    {
      name: "الشكاوى العامة",
      route: ROUTES.ADMIN.DATAMAIN.COMPLAINTS,
      isActive:
        path === ROUTES.ADMIN.DATAMAIN.COMPLAINTS ||
        path === ROUTES.ADMIN.DATAMAIN.COMPLAINTSADD,
    },
    {
      name: "الخدمات",
      route: ROUTES.ADMIN.DATAMAIN.SERVICES,
      isActive:
        path === ROUTES.ADMIN.DATAMAIN.SERVICES ||
        path === ROUTES.ADMIN.DATAMAIN.SERVICESADD||
        path === ROUTES.ADMIN.DATAMAIN.SERVICESDETAILS(params.servicesID),
    },
  ];
  return (
    path !== ROUTES.ADMIN.DATAMAIN.DRUGSADD && (
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
    )
  );
};

export default MainDataAside;
