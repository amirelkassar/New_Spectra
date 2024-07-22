import DeleteButton from "@/components/delete-button";
import EditButton from "@/components/edit-button";
import MenuActions from "@/components/menu-actions";
import clsx from "clsx";

const OrgClients = () => {
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
        <h2>عملاء المنظمة</h2>
        <MenuActions />
      </div>
      <div className="grid grid-cols-[repeat(3,auto),1fr] text-center gap-y-1 max-h-[calc(100vh-260px)] overflow-auto">
        <div className="contents ">
          <div className="bg-blueLight rounded-s-xl py-3 pe-10 ps-8 sticky top-0">
            الاسم
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0">
            عدد الاطفال
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0">اخر دخول</div>
          <div className="bg-blueLight rounded-e-xl py-3 px-10 sticky top-0 me-6"></div>
        </div>
        {data.map((item, index) => (
          <div
            /*             onClick={() => handleRouting(item.id)}
             */ key={item.id}
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
                "py-5 px-10 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.numberOfChildren}
            </div>
            <div
              className={clsx(
                "py-5 px-10 font-bold",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              {item.lastLogin}
            </div>{" "}
            <div
              className={clsx(
                "py-3 px-10 me-14 flex items-center gap-3 content-end justify-end",
                index === data.length - 1 ? "" : "border-b border-b-grayMedium"
              )}
            >
              <EditButton />
              <DeleteButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrgClients;