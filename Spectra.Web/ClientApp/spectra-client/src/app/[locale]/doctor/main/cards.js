import PhoneIcon from "@/assets/icons/phone";
import PersonIcon from "@/assets/icons/person";
import BarsIcon from "@/assets/icons/bars";
import CalenderIcon from "@/assets/icons/calender";

const Cards = () => {
  const data = [
    {
      id: 0,
      number: 0,
      text: "الوصفات الطبية",
      icon: (
        <div className="size-[32px] p-[7px] md:p-2 md:size-12 rounded-full bg-red/10 flex items-center justify-center ">
          <BarsIcon />
        </div>
      ),
    },
    {
      id: 1,
      number: 0,
      text: "الاستشارات",
      icon: (
        <div className="size-[32px] p-[7px] md:p-2 md:size-12 rounded-full bg-[#F5E4F9]  flex items-center justify-center ">
          <PhoneIcon className={'h-full w-auto'} />{" "}
        </div>
      ),
    },
    {
      id: 2,
      number: 0,
      text: "المواعيد",
      icon: (
        <div className="size-[32px] p-[7px] md:p-2 md:size-12 rounded-full bg-[#E9F7FF] flex items-center justify-center ">
          <CalenderIcon />
        </div>
      ),
    },
    {
      id: 3,
      type: "total",
      number: 0,
      text: "اجمالى المرضى",
      icon: (
        <div className="size-[32px] p-[7px] md:p-3 md:size-12 rounded-full bg-greenMain flex items-center justify-center ">
          <PersonIcon />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full   mdl:mt-7 mdl:px-2  pb-9 border-b-2 border-b-grayLight">
      <h2 className="mb-7 mdl:block hidden mdl:text-[20px]">ملخص النشاطات</h2>
      <div className="flex gap-5 mdl:gap-7 w-full px-2 flex-wrap bg-white mdl:bg-transparent">
        {data.map((item) => (
          <div
            key={item.id}
            className="px-6 mdl:px-0 pt-6  rounded-xl bg-white flex flex-col shadow-sm mdl:shadow-none justify-between gap-2 mdl:gap-6 flex-1 min-w-[160px]"
          >
            <div className="flex flex-col items-center justify-between">
              {item.icon}
              <p className="text-[14px] ر md:text-[16px] text-balance mb-10 mt-6">
                {item.text}
              </p>
              {item.type === "total" ? (
                <p className="font-Bold h-[70px] mdl:text-white flex items-center justify-center  rounded-xl  text-[24px] md:tex-[34px] w-full mdl:bg-greenMain">
                  {item.number}
                </p>
              ) : (
                <p className="font-bold pb-4 text-[24px] md:tex-[34px]">
                  {item.number}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
