"use client";
import placeholderImage from "@/assets/images/placeholder-person.png";
import TableComponents from "@/components/table-comp";
import ROUTES from "@/routes";
import { useState } from "react";

const AppoTable = () => {
  const data = [
    {
      id: 0,
      image: placeholderImage,
      name: "عبدالله الشيخ",
      specialisation: " اخصائى نفسى",
      patientName: "احمد محمد كمال",
      patientDiagnosis: "انفصام",
      date: "25/4/2024",
      numChild:'طفل واحد',
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
      numChild:'طفل واحد',
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
      numChild:'طفل واحد',
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
      numChild:'طفل واحد',
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
      numChild:'طفل واحد',
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
      numChild:'طفل واحد',
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
      numChild:'طفل واحد',
      time: "10:00 pm",
      doctor: "عبدالله الشيخ",
      statu: "تمت",
    },
  ];
  const [valuePage, setValuePage] = useState(1);
  const [selected, setSelected] = useState([]);
  return (
    <div className="rounded-xl bg-white p-0 md:p-8 grow">
      <TableComponents
        data={data}
        colNum={4}
        colNumSmall={4}
        dataLine={2}
        header={["الاسم", "اسم الطفل", "التاريخ ", "الحالة"]}
        haveImg={true}
        order={[["name",'specialisation'], ["patientName",''], ['date',"time"], "status"]}
        report={true}
        selectPage={selected}
        setSelected={setSelected}
        type={1}
        route={ROUTES.ADMIN.REQUESTS}
      />
    
    </div>
  );
};

export default AppoTable;
