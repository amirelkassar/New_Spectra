"use client"
import AcceptIcon from "@/assets/icons/accept";
import EditIcon from "@/assets/icons/edit";
import RefuseIcon from "@/assets/icons/refuse";
import Button from "@/components/button";
import { Link } from "@/navigation";
import useMenu from "@/store/auth/signup/menu-store";
import React, { useState } from "react";

const RequestDetailsPage = ({params:{requestId}}) => {
  const data = {
    name: "احمد محمد كمال",
    spec: ["طبيب"],
    desc: "دكتورا في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان ومشكلات العمل",
    title: "مرخص معتمد من الهيئة السعودية للتخصصات الصحية",
    daqeqa: [
      "القلق",
      "الضغوط",
      "مشكلات في العلاقات",
      "مشكلات بالتواصل",
      "اضطرابات الشخصية",
      "التعامل مع الغضب",
      "ثنائي القطب",
      "القلق الاجتماعي ، الفوبيا",
      "فرط الحركة",
    ],
  };

  const sala7eya = ["طبيب", "متخصص", "محاسب", "سكرتير"];
  const {modal, editModal} = useMenu();
  const [State,setState] = useState('accept');
  return (
    <div className="default-page text-xl space-y-2 !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <div >
        <h2 className=" mb-0 md:mb-3 text-start text-[14px] md:text-[20px] font-bold">{data.name}</h2>
        <h2 className="text-start text-[14px] md:text-[20px]">{data.spec.map((item) => item+" ")}</h2>
      </div>
      <p className="max-w-[800px] text-[14px] md:text-[20px]">{data.desc}</p>
      <p className="max-w-[800px] text-[14px] md:text-[20px] !mt-0">{data.title}</p>
      <h2 className="text-[14px] md:text-[20px] font-bold">التخصصات الدقيقة</h2>
      <div className="max-w-[850px] flex flex-wrap gap-x-5 gap-y-2">
        {data.daqeqa.map((item, index) => (
          <div key={index} className="bg-grayLight px-2 md:px-3 py-1 rounded-md text-[14px] md:text-[20px] ">
            {item}
          </div>
        ))}
      </div>
      <h2 className="text-[14px] md:text-[20px] font-bold">إضافة صلاحية</h2>
      <div className="flex gap-3 md:gap-5 flex-wrap px-1">
        {sala7eya.map((item, index) => (
          <Button
            className={`!rounded-lg md:!rounded-xl !py-1 text-[14px] ${data.spec.includes(item) ? "" : " ring-1 !text-[#010036] !ring-[#010036]"} border-none md:text-[20px] px-[17px] lg:px-[26px]`}
            variant={data.spec.includes(item) ? "secondary" : "ternary"}
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="flex px-1 gap-5 md:gap-8 max-w-[950px] w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
        <Button 
        onClick={()=>{editModal('type','accept');editModal('open',true)}}
          className={
            "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold items-center  flex items-center bg-greenMain justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
          }
        >
          <AcceptIcon />
          قبول
        </Button>
        <Button
       onClick={()=>{editModal('type','req');editModal('open',true)}}
          className={
            "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5  flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none "
          }
        >
          <RefuseIcon />
          رفض
        </Button>
        <Link
        href={`${requestId}/edit`}
          className={
            "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5  flex gap-[15px] font-bold items-center justify-center h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
          }
        >
          <EditIcon />
          تعديل
        </Link>
 
      </div>
   
    </div>
  );
};

export default RequestDetailsPage;
