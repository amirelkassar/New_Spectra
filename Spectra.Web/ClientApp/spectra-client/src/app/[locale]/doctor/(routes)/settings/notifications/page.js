import AddTeamIcon from "@/assets/icons/addTeam";
import ArrowLeft from "@/assets/icons/arrow-left";
import CalenderIcon from "@/assets/icons/calender";
import CircleCheck from "@/assets/icons/circle-check";
import ContractsSendIcon from "@/assets/icons/contracts-send";
import FileSendIcon from "@/assets/icons/fileSend";
import MessageIconGreenMain from "@/assets/icons/message-green";
import PeopleIcon from "@/assets/icons/people";
import TransfersIcon from "@/assets/icons/transfers";
import True2Icon from "@/assets/icons/true2";
import SessionDate from "@/components/SessionDate";
import { Link } from "@/navigation";
import React, { useMemo } from "react";
const notifications = [
  {
    date: "20/4/2024",
    message: "لقد تم تحويل مبلغ $100.00 من عبد الله الشيخ",
    type: "transfer",
  },
  {
    date: "20/4/2024",
    message: "لقد قام الشرف بضمك الى فريق طبي",
    type: "team",
  },
  {
    date: "20/4/2024",
    message: "لديك رسالة جديدة في الحادثات، لا تنسَ ان تتفقدها",
    type: "message",
  },
  {
    date: "20/4/2024",
    message:
      "لقد قام احد العملاء بحجز جلسة نفسية معك يوم الاثنين 20/5/2020 الساعة 6:00 مساء",
    type: "appointment",
  },
  {
    date: "يومين",
    message:
      "لقد قام عبد الله الشيخ برفع ملف جديد مرتبط بجلسة سابقة، يمكنك مراجعته الآن",
    type: "upload",
  },
  {
    date: "يوم",
    message: "لقد تم ترشيح فريقك للعميل عبد الله الشيخ",
    type: "nomination",
  },
  {
    date: "الان",
    message: "لقد قام الشرف بارسال عقد اليك، يرجى ان تتفقدها",
    type: "contract",
  },
  {
    date: "الان",
    message: "لقد قام الشرف بارسال عقد اليك، يرجى ان تتفقدها",
    type: "accept",
  },
];
const NotificationIcon = ({ type }) => {
  const icon = useMemo(() => {
    switch (type) {
      case "transfer":
        return <TransfersIcon fill="#10B0C1" className={"w-full h-auto"} />;
      case "team":
        return <AddTeamIcon className={"w-full h-auto"} />;
      case "message":
        return <MessageIconGreenMain className={"w-full h-auto"} />;
      case "appointment":
        return <CalenderIcon className={"w-full h-auto"} />;
      case "upload":
        return <FileSendIcon className={"w-full h-auto"} />;
      case "nomination":
        return <PeopleIcon className={"w-full h-auto"} />;
      case "contract":
        return <ContractsSendIcon fill="#10B0C1" className={"w-full h-auto"} />;
      case "accept":
        return <CircleCheck className={"w-full h-auto text-greenMain"} />;
      default:
        return <True2Icon className={"w-full h-auto"} />;
    }
  }, [type]);
  return (
    <div className="text-xl max-w-6  w-full h-auto text-blue-500 ">{icon}</div>
  );
};

// Memoized notification item component
const NotificationItem = ({ date, message, type }) => (
  <div className="flex md:items-center   flex-1 md:gap-3 flex-col md:flex-row   w-full">
    <Link
      href={"#"}
      className="flex items-center gap-3 mdl:gap-6 px-3 mdl:px-6 shadow justify-between cursor-pointer duration-200 hover:shadow-md  py-5 rounded-xl flex-1 bg-white "
    >
      <div className="flex items-center gap-3 mdl:gap-6  flex-1 ">
        <NotificationIcon type={type} />
        <h3 className="text-xs mdl:text-base">{message}</h3>
      </div>
      <div className="bg-blueLight size-6 mdl:size-8 rounded-full p-[6px] mdl:p-2 flex items-center justify-center">
        <ArrowLeft fill="#10B0C1" />
      </div>
    </Link>

    <p className="text-sm text-end md:text-start mdl:text-base text-grayDark text-nowrap mt-1 mdl:mt-0 min-w-[104px] ">
      {date}
    </p>
  </div>
);

function Page() {
  return (
    <div>
      <SessionDate />
      <div className="md:p-4 mt-5 md:mt-8">
        <h2 className=" text-base mdl:text-xl font-semibold mb-8 mdl:mb-5">
          تنبيهات
        </h2>
        <div className="flex flex-col  gap-3 w-full">
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              date={notification.date}
              message={notification.message}
              type={notification.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
