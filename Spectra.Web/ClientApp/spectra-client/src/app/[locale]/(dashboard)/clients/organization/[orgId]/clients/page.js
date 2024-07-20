"use client";
import DeleteButton from "@/components/delete-button";
import EditButton from "@/components/edit-button";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const OrganizationClientsPage = () => {
  const router = useRouter();
  const handleRouting = (id) => {
    router.push(ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(id));
  };

  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 9,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
    },
  ];
  return (
    <section className="default-page grow">
      <div className="flex items-center justify-between">
        <h2 className=" lg:block hidden text-[20px]">عملاء المنظمة</h2>
        <MenuActions />
      </div>
      <div className="grid grid-cols-[repeat(4,minmax(120px,1fr))] md:grid-cols-[repeat(4,minmax(max-content,1fr))] text-center gap-y-1 max-h-[calc(100vh-260px)] w-full overflow-auto">
        <div className="contents ">
          <div className="bg-blueLight text-nowrap rounded-s-xl py-3 pe-10 ps-8 sticky top-0">
            الاسم
          </div>
          <div className="bg-blueLight text-nowrap py-3 px-10 sticky top-0">
            عدد الاطفال
          </div>
          <div className="bg-blueLight text-nowrap py-3 px-10 sticky top-0">اخر دخول</div>
          <div className="bg-blueLight text-nowrap rounded-e-xl py-3 px-10 sticky top-0 me-6"></div>
        </div>
        {data.map((item, index) => (
          <Link
           href={ROUTES.ADMIN.CLIENTS.FAMILY.PATIENTS(item.id)}
            key={item.id}
            className="contents cursor-pointer group "
          >
            <div
              className={clsx(
                "py-5 ms-8 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.name}
            </div>
            <div
              className={clsx(
                "py-5 px-10 ",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.numberOfChildren}
            </div>
            <div
              className={clsx(
                "py-5 px-10 ",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.lastLogin}
            </div>{" "}
            <div
              className={clsx(
                "flex gap-[10px] md:gap-[40px] py-2 md:py-5 px-3 md:px-10 justify-center items-center",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              
              <MenuActions />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OrganizationClientsPage;
