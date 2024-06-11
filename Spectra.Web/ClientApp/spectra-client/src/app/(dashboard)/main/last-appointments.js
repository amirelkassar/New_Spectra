import placeholderImage from "@/assets/images/placeholder-person.png";
import Statue from "@/components/status";
import clsx from "clsx";
import Image from "next/image";

const LastAppointments = () => {
  const data = [
    {
      id: 0,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "لم يبدأ بعد",
    },
    {
      id: 1,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "لم يبدأ بعد",
    },
    {
      id: 2,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تتم الان",
    },
    {
      id: 4,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 5,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 6,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
    {
      id: 7,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
  ];
  return (
    <div className="rounded-xl bg-white p-8 grow">
      <h1 className="ms-5 mb-5">اخر المواعيد</h1>
      <div className="max-h-[calc(100vh-480px)] overflow-auto grid grid-cols-[repeat(4,minmax(max-content,1fr))] gap-y-1 w-full ">
        <div className="contents ">
          <div className="bg-blueLight rounded-s-xl py-3 px-10 sticky top-0 text-xl">
            اسم الطبيب
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-xl">
            اسم المريض{" "}
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 text-xl">
            الـميعاد
          </div>
          <div className="bg-blueLight py-3 px-10 sticky top-0 rounded-e-xl text-xl me-5">
            الحالة
          </div>
        </div>
        {data.map((row, index) => (
          <div key={row.id} className="contents">
            <div
              className={clsx(
                "flex items-center gap-5 py-5 px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <div className="size-14 rounded-full bg-red flex items-start justify-center overflow-hidden">
                <Image src={row.image} alt="Doctor image" />
              </div>
              <div>
                <p className="font-bold">{row.name}</p>
                <p>{row.specialisation}</p>
              </div>
            </div>
            <div
              className={clsx(
                "py-5 px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="font-bold">{row.patientName}</p>
              <p>{row.patientDiagnosis}</p>
            </div>
            <div
              className={clsx(
                "py-5 px-10",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <p className="font-bold">{row.date}</p>
              <p>{row.time}</p>
            </div>
            <div
              className={clsx(
                "py-5 px-10 content-center me-5",
                index !== data.length - 1 && "border-b border-grayMedium"
              )}
            >
              <Statue statue={row.statu} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastAppointments;
