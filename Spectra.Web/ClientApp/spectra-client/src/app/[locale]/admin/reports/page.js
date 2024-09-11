import MenuActions from "@/components/menu-actions";
import ReportsFiltration from "./reports-filtration";
import imgDoctor from '../../../../assets/images/placeholder-person.png'
import imgPatient from '../../../../assets/images/placeholder-person.png'
import Report from "./report";
const reports = [
  {
    id: 1,
    state: "new",
    number: "2325",
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    typeReport: "تقرير تحليل صحي شامل",
    doctor: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    imgdoctor: imgDoctor,
    patient: "عبدالله الشيخ",
    specialistPatient: " الطفل / احمد",
    imgPatient: imgPatient,
  },
  {
    id: 2,
    state: "old",
    number: "2325",
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    typeReport: "تقرير تحليل صحي شامل",
    doctor: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    imgdoctor: imgDoctor,
    patient: "عبدالله الشيخ",
    specialistPatient: " الطفل / احمد",
    imgPatient: imgPatient,
  },
  {
    id: 3,
    state: "old",
    number: "2325",
    date: "20/2/2024",
    specialist: "احمد محمد كمال",
    typeReport: "تقرير تحليل صحي شامل",
    doctor: "احمد محمد كمال",
    specialistDoctor: "اخصائى نفسى",
    imgdoctor: imgDoctor,
    patient: "عبدالله الشيخ",
    specialistPatient: " الطفل / احمد",
    imgPatient: imgPatient,
  }
];
const ReportsPage = () => {

  return (
    <div className="default-page">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
          <h2 className="headTitleDash">تقارير</h2>
        </div>
        <MenuActions />
      </div>
      <ReportsFiltration />
      <div className="flex gap-6 flex-wrap mt-9">
        {
          reports.map((report,i)=>{
            return  <Report key={i} data={report} />
          })
        }
       
      </div>
    </div>
  );
};

export default ReportsPage;
