"use client";
import { Link, usePathname } from "@/navigation";
import AppoFilteration from "./appo-filteration";
import AppoTable from "./appo-table";
import ROUTES from "@/routes";

const AppointmentsPage = () => {
  const path = usePathname();

  const AppointmentsLinks = [
    {
      name: "المواعيد الملغاة",
      route: ROUTES.DOCTOR.APPOINTMENTSCANCELD,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSCANCELD),
    },
    {
      name: "المواعيد المؤجلة",
      route: ROUTES.DOCTOR.APPOINTMENTSDEFERRED,
      isActive: path.includes(ROUTES.DOCTOR.APPOINTMENTSDEFERRED),
    },
  ];
  console.log(path);
  return (
    <div className="default-page">
        <div className=" lg:hidden linksReqMob flex items-center max-w-[96%] w-[400px] justify-between mx-auto gap-[20px] flex-wrap mt-8">
        
            <Link
              key={ROUTES.ADMIN.REQUESTS}
              href={ROUTES.ADMIN.REQUESTS}
              className={`${path===ROUTES.DOCTOR.APPOINTMENTS?"bg-greenMain text-white font-bold":''} text-[12px] py-[9px] px-[12px] rounded-[10px] `}
            >
              الكل
            </Link>
        
          {AppointmentsLinks.map((item) => {
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`text-[12px] py-[9px] px-[12px] rounded-[10px] ${
                  item.isActive ? "bg-greenMain text-white font-bold" : ""
                }  `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      <AppoFilteration />
      <AppoTable />
    </div>
  );
};

export default AppointmentsPage;
