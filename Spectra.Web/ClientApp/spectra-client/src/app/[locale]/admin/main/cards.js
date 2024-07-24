import DoctorIcon from "@/assets/icons/doctor";
import HeartWithPlus from "@/assets/icons/heart-with-plus";
import SessionIcon from "@/assets/icons/session";
import ShakeIcon from "@/assets/icons/shake";

const Cards = () => {
  const data = [
    {
      id: 0,
      number: 50,
      text: "طلب على خدمة الاستشارة الفردية",
      icon: (
        <div className=" size-[32px] p-[7px] md:p-0 md:size-12 rounded-full bg-greenMain/20 flex items-center justify-center ">
          <SessionIcon />
        </div>
      ),
    },
    {
      id: 1,
      number: 85,
      text: "طلب على خدمة الكشف المبكر",
      icon: (
        <div className=" size-[32px] p-[7px] md:p-0 md:size-12 rounded-full bg-[#F5E4F9]  flex items-center justify-center ">
          <DoctorIcon />{" "}
        </div>
      ),
    },
    {
      id: 2,
      number: 45,
      text: "طلب على خدمة فريق تشخيص متعدد الخدمات",
      icon: (
        <div className=" size-[32px] p-[7px] md:p-0 md:size-12 rounded-full bg-[#E9F7FF] flex items-center justify-center ">
          <ShakeIcon />
        </div>
      ),
    },
    {
      id: 3,
      number: 60,
      text: "طلب على الخدمات التدريبية والتأهيلية",
      icon: (
        <div className=" size-[32px] p-[7px] md:p-0 md:size-12 rounded-full bg-[#F5E4F9] flex items-center justify-center ">
          <HeartWithPlus />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-6 rounded-xl bg-white flex flex-col justify-between gap-2 md:gap-6"
        >
          <div className="flex items-center justify-between">
            <p className="font-bold text-[24px] md:tex-[34px]">{item.number}</p>
            {item.icon}
          </div>
          <p className="text-[14px] md:tex-[20px] text-balance ">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
