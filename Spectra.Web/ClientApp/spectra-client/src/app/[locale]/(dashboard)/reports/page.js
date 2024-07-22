import MenuActions from "@/components/menu-actions"
import ReportsFiltration from "./reports-filtration"

const ReportsPage = () => {
  const reports = [
    {
      state:'new',
      number:'2325',
      date:'20/2/2024',
      specialist:'احمد محمد كمال'
    }
  ]
  return (
    <div className="default-page">
    <div className="flex items-start justify-between gap-6">
      <div className="flex flex-col mb-1 flex-wrap md:flex-row items-start md:items-start gap-4 md:gap-6">
        <h2 className="headTitleDash">تقارير</h2>
      </div>
      <MenuActions/>
    </div>
    <ReportsFiltration />
  </div>
  )
}

export default ReportsPage