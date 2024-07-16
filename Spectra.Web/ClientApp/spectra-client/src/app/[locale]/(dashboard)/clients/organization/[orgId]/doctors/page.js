"use client"
import clsx from "clsx";
import MenuActions from "@/components/menu-actions";
import StarGoldIcon from "@/assets/icons/starGold";
import { Link } from "@/navigation";
import { useParams, usePathname } from "next/navigation";
import ROUTES from "@/routes";

const DoctorsOrg = ({}) => {
    const params = useParams();
console.log(params);
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 5,
      route: ROUTES.ADMIN.CLIENTS.ORGANIZATION.DOCTORSDETAILS(params.orgId),
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 5,
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 4,
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 3,
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 3,
    },
    {
      id: 5,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 3,
    },
    {
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 3,
    },
    {
      id: 7,
      name: "عبدالله الشيخ",
      kinshipName: "عائلة طفل",
      doctor: "احمد محمد كمال",
      specialisationDoctor: " اخصائى نفسى",
      date: "25/4/2024",
      time: "10:00 pm",
      star: 3,
    },
  ];
  const getStar = (num) => {
    const stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(<StarGoldIcon key={i} className={'w-[14px] lg:w-[18px] h-auto'}/>);
    }
    return stars;
  };

  return (
    <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%]">
      <h1 className="ms-5 mb-5 lg:block hidden ">الـمواعيد</h1>
      <div className=" min-h-[600px] overflow-auto grid grid-cols-[repeat(4,minmax(120px,1fr))] lg:grid-cols-[repeat(4,minmax(200px,1fr))] gap-y-1 max-w-[100%]">
        <div className="contents  ">
          <div className="bg-blueLight  items-center lg:text-[16px] text-[12px] text-nowrap rounded-s-xl py-1 lg:py-3 px-4 lg:px-5 sticky top-0  flex">
            الاسم
          </div>
          <div className="bg-blueLight flex items-center lg:text-[16px] text-[12px]  text-nowrap py-1 lg:py-3 px-4 lg:px-5 sticky top-0 ">
            تخصص الطبيب
          </div>
          <div className="bg-blueLight flex items-center lg:text-[16px] text-[12px] text-nowrap py-1 lg:py-3 px-4 lg:px-5 sticky top-0 ">
            تاريخ الانضمام
          </div>
          <div className="bg-blueLight justify-center flex items-center lg:text-[16px] text-[12px] text-nowrap py-1 lg:py-3 px-4 lg:px-5 sticky top-0  ">
            التقييم
          </div>
        </div>
        {data.map((row, index) => (
          <Link href={ROUTES.ADMIN.CLIENTS.ORGANIZATION.DOCTORSDETAILS(params.orgId,row.id)} key={row.id} className="contents "> 
            <div
              className={clsx(
                "  flex items-center gap-5 py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-5",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <div>
                <p className="font-bold">{row.doctor}</p>
                <p>{row.specialisationDoctor}</p>
              </div>
            </div>
            <div
              className={clsx(
                "py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-5",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="">{row.name}</p>
              <p>{row.kinshipName}</p>
            </div>{" "}
            <div
              className={clsx(
                "py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-5",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="">{row.date}</p>
              <p>{row.time}</p>
            </div>{" "}
            <div
              className={clsx(
                "flex gap-[10px] md:gap-[40px] py-2 md:py-5 px-3 md:px-10 justify-center items-start",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <div className=" hidden lg:flex gap-[6px] items-center justify-center w-[116px]"> {getStar(row.star)}</div>

             
              <MenuActions />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorsOrg;
