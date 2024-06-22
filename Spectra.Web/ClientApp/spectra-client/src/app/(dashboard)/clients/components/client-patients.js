import Image from "next/image";
import childPlaceholder from "@/assets/images/child-placeholder.jpg";

const ClientPatients = () => {
  const patients = [
    {
      id: 0,
      name: "محمد عبدالله",
      image: childPlaceholder,
      nationalId: "25814739658",
      gender: "ذكر",
      dateOfBirth: "10/10/2024",
      relation: "الابن",
    },
    {
      id: 1,
      name: "محمد عبدالله",
      image: childPlaceholder,
      nationalId: "25814739658",
      gender: "ذكر",
      dateOfBirth: "10/10/2024",
      relation: "الابن",
    },
    {
      id: 2,
      name: "محمد عبدالله",
      image: childPlaceholder,
      nationalId: "25814739658",
      gender: "ذكر",
      dateOfBirth: "10/10/2024",
      relation: "الابن",
    },
  ];
  return (
    <section className="default-page grow">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="p-5 border-2 border-blueLight rounded-xl flex flex-col gap-2"
          >
            <div className="size-28 rounded-full flex items-center justify-center overflow-hidden self-center">
              <Image priority src={patient.image} alt="child" />
            </div>
            <div className="flex items-center gap-3">
              <p>الاسم/</p>
              <strong>{patient.name}</strong>
            </div>{" "}
            <div className="flex items-center gap-3">
              <p>الرقم القومي/</p>
              <strong>{patient.nationalId}</strong>
            </div>{" "}
            <div className="flex items-center gap-3">
              <p>الجنس/</p>
              <strong>{patient.gender}</strong>
            </div>{" "}
            <div className="flex items-center gap-3">
              <p>تاريخ الميلاد/</p>
              <strong>{patient.dateOfBirth}</strong>
            </div>{" "}
            <div className="flex items-center gap-3">
              <p>علاقة العملاء بالمريض/</p>
              <strong>{patient.relation}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientPatients;
