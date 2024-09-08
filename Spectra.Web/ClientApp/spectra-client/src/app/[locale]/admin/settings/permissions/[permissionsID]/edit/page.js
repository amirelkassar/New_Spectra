import React from 'react'
import Validity from '../../validity'
import HeaderPage from '../../header-page';
import ROUTES from '@/routes';

function Page() {
  const dataSwitch = ["ادارة", "انشاء جديد", "تعديل", "مسح"];

  return (
    <div className="default-page">
    <HeaderPage
      title={"الاعدادات - الأذونات - مستويات الصلاحية "}
      linkBack={ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD}
    />
    <div>
      <h2 className="text-[16px] mdl:text-[24px] font-Bold">طبيب</h2>
    </div>
    <Validity dataSwitch={dataSwitch}/>
  </div>
   
  )
}

export default Page