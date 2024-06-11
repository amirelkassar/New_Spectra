import clsx from "clsx";

const ClientAppointments = () => {
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
        time: "8:00 مساءا",
        doctor: "الطبيب: احمد محمد كمال",
      },
      {
        id: 1,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 2,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 3,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 4,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 5,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 6,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 7,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 8,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 9,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 10,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 11,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
      {
        id: 12,
        type: "متابعة 3",
        date: "6/9/224",
        time: "8:00 مساءا",
        doctor: "المختص: كمال احمد",
      },
    ],
  };
  return (
    <section className="bg-white flex-1 overflow-auto   rounded-xl p-8">
      <h2 className="ms-5 mb-5">مواعيد اليوم</h2>
      <div className="grid grid-cols-4 w-full ">
        {data.today.map((item, index) => (
          <div key={item.id} className="contents">
            <div
              className={clsx(
                "text-xl py-5 ",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.type}
            </div>
            <div
              className={clsx(
                "text-xl py-3",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.date}
            </div>
            <div
              className={clsx(
                "text-xl py-3",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.time}
            </div>
            <div
              className={clsx(
                "text-xl py-3 me-5",
                index !== data.today.length - 1 && "border-b  border-grayMedium"
              )}
            >
              {item.doctor}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientAppointments;
