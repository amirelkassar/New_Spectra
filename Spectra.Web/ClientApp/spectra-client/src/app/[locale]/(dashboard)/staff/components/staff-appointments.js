import Statue from "@/components/status";
import clsx from "clsx";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder-person.png";
import MenuActions from "@/components/menu-actions";

const StaffAppointments = () => {
  const data = [
    {
      id: 0,
      name: "عبدالله الشيخ",
      DetectionNumber: "كشف 1",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "لم يبدأ بعد",
    },
    {
      id: 1,
      name: "عبدالله الشيخ",
      DetectionNumber: "متابعة",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      id: 2,
      name: "عبدالله الشيخ",
      DetectionNumber: " 5 كشف ",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "لم يبدأ بعد",
    },
    {
      id: 3,
      name: "عبدالله الشيخ",
      DetectionNumber: "متابعة",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
    {
      id: 4,
      name: "عبدالله الشيخ",
      DetectionNumber: "كشف 1",
      date: "25/4/2024",
      time: "10:00 pm",
      statu: "تمت",
    },
 
  ];
  return (
    <div className="rounded-xl bg-white pt-5  lg:p-8 grow w-[100%] lg:max-w-[calc(100%-250px)]">
      <div className=" min-h-[600px] overflow-auto grid grid-cols-[repeat(4,minmax(108px,1fr))] md:grid-cols-[repeat(4,minmax(max-content,1fr))] gap-y-1 max-w-[100%]">
        <div className="contents  ">
          <div className="bg-blueLight  items-center lg:text-[16px] text-[12px] text-nowrap rounded-s-xl py-1 lg:py-3 px-10 sticky top-0  flex">
            رقم الكشف
          </div>
          <div className="bg-blueLight flex items-center lg:text-[16px] text-[12px]   text-nowrap py-1 lg:py-3 px-10 sticky top-0 ">
            الميعاد
          </div>
          <div className="bg-blueLight flex items-center lg:text-[16px] text-[12px] text-nowrap py-1 lg:py-3 px-10 sticky top-0 ">
            اسم المريض
          </div>
          <div className="bg-blueLight flex items-center lg:text-[16px] text-[12px] text-nowrap py-1 lg:py-3 px-10 sticky top-0  ">
            الحالة
          </div>
        </div>
        {data.map((row, index) => (
          <div key={row.id} className="contents ">
            <div
              className={clsx(
                "  md:flex items-center gap-5 py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <div>
                <p className="font-bold">{row.DetectionNumber}</p>
              </div>
            </div>
            <div
              className={clsx(
                "py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="">{row.date}</p>
              <p>{row.time}</p>
            </div>{" "}
            <div
              className={clsx(
                "py-2 lg:py-5 lg:text-[16px] text-[12px] px-3 lg:px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="">{row.name}</p>
            </div>{" "}
            <div
              className={clsx(
                "flex gap-[10px] md:gap-[40px] py-2 md:py-5 px-3 md:px-10 content-center items-start",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <Statue statue={row.statu} />
              <MenuActions />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffAppointments;
