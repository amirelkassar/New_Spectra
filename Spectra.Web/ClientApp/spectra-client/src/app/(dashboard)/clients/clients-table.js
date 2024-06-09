"use client";

import ROUTES from "@/routes";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const ClientsTable = () => {
  const router = useRouter();
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 6,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 8,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 10,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 11,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 12,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 13,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 14,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 15,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 16,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 17,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
    {
      id: 18,
      name: "عبدالله الشيخ",
      numberOfChildren: "1",
      email: "Abdullah@gmail.com",
      lastLogin: "20/4/2024",
    },
  ];

  const handleRouting = (id) => {
    router.push(`${ROUTES.DASHBOARD.CLIENTS}/${id}`);
  };

  return (
    <div className="grow max-h-[calc(100vh-325px)] overflow-auto ">
      <div className="grid grid-cols-[repeat(4,auto),1fr] text-center gap-y-1">
        <div className="contents ">
          <div className="bg-greenLight rounded-s-xl py-3 pe-10 ps-8 sticky top-0">
            الاسم
          </div>
          <div className="bg-greenLight py-3 px-10 sticky top-0">
            عدد الاطفال
          </div>
          <div className="bg-greenLight py-3 px-10 sticky top-0">الايميل</div>
          <div className="bg-greenLight py-3 px-10 sticky top-0">اخر دخول</div>
          <div className="bg-greenLight rounded-e-xl py-3 px-10 sticky top-0 me-6"></div>
        </div>
        {data.map((item, index) => (
          <div
            onClick={() => handleRouting(item.id)}
            key={item.id}
            className="contents cursor-pointer group "
          >
            <div
              className={clsx(
                "py-5 ms-8",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.name}
            </div>
            <div
              className={clsx(
                "py-5 px-10",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.numberOfChildren}
            </div>
            <div
              className={clsx(
                "py-5 px-10",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.email}
            </div>
            <div
              className={clsx(
                "py-5 px-10",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.lastLogin}
            </div>
            <div
              className={clsx(
                "py-3 px-10 me-14",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsTable;
