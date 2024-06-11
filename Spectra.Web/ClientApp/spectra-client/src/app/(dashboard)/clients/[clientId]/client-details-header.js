import Separetor from "@/components/separator";

const ClientDetailsHeader = () => {
  const data = {
    details: {
      name: "عبدالله الشيخ",
      email: "Abdallah@gmail.com",
      lastLogin: "25/4/2024",
      numberOfChildren: "1",
      diagnosis: "اضطراب طيف التوحد",
    },
    today: [
      {
        id: 0,
        type: "كشف 1",
        date: "6/9/224",
        doctor: "الطبيب: احمد محمد كمال",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        doctor: "المختص: كمال احمد",
      },
    ],
  };
  return (
    <div className="bg-white w-full rounded-xl px-12 py-6 flex items-stretch gap-20">
      <div className="flex flex-col gap-y-1 ">
        <p className="text-sm ">الاسم</p>
        <h2>{data.details.name}</h2>
        <h2>{data.details.email}</h2>
      </div>
      <Separetor vertical />{" "}
      <div className="flex flex-col gap-y-1 justify-between ">
        <p className="text-sm ">اخر دخول</p>
        <h2>{data.details.lastLogin}</h2>
      </div>{" "}
      <Separetor vertical />{" "}
      <div className="flex flex-col gap-y-1 justify-between ">
        <p className="text-sm ">عدد الاطفال</p>
        <h2>{data.details.numberOfChildren}</h2>
      </div>{" "}
      <Separetor vertical />{" "}
      <div className="flex flex-col gap-y-1 justify-between ">
        <p className="text-sm ">التشخيص</p>
        <h2>{data.details.diagnosis}</h2>
      </div>
    </div>
  );
};

export default ClientDetailsHeader;
