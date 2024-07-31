"use client";
import React, { useState } from "react";
import AcceptIcon from "@/assets/icons/accept";
import EditIcon from "@/assets/icons/edit";
import RefuseIcon from "@/assets/icons/refuse";
import Button from "@/components/button";

import { Link, useRouter } from "@/navigation";
import useMenu from "@/store/auth/signup/menu-store";
import placeholderImage from "@/assets/images/placeholder-person.png";
import certificates from "@/assets/images/certificates.png";
import Image from "next/image";
import PdfIcon from "@/assets/icons/pdf";
import ShareIcon from "@/assets/icons/share";
import ContractsIcon from "@/assets/icons/contracts";
function ContractDetails({ id }) {
  const data = {
    name: "احمد محمد كمال",
    licenseNumber: "2548A",
    certifiedBy: "وزارة الصحة",
    Degree: "دكتوراه",
    image: placeholderImage,
    certificates: [certificates, certificates],
    year: "2024",
    month: "5",
    day: "28",
    price:'100.00 $',
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

  const { modal, editModal } = useMenu();
  const router = useRouter()
  const [State, setState] = useState("accept");
  return (
    <div className="default-page text-xl space-y-2 !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <div className="w-[100%]">
        <div className="flex items-center gap-3 mb-9">
          <Image
            src={data.image}
            width={50}
            height={50}
            alt="man"
            className=" rounded-[50%] size-[50px] object-cover object-top"
          />
          <h2 className=" mb-0 md:mb-3 text-start text-[14px] md:text-[20px] font-bold">
            {data.name}
          </h2>
        </div>
        <div className="px-2 mdl:px-10 mb-8 md:mb-11">
          <h3 className="text-[12px] md:text-[16px] text-grayDark mb-3">
            التخصص
          </h3>
          <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 w-[100%]">
            {data.daqeqa.map((item, i) => {
              return (
                <p key={i} className=" mb-2 text-[14px] md:text-[20px]">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="px-2 mdl:px-10 mb-5 md:mb-8">
          <h3 className="text-[12px] md:text-[16px] text-grayDark mb-3">
            رقم الترخيص / الاعتماد
          </h3>
          <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 w-[100%]">
            <p className="  text-[14px] md:text-[20px]">{data.licenseNumber}</p>
          </div>
        </div>
        <div className="px-2 mdl:px-10 mb-5 md:mb-8">
          <h3 className="text-[12px] md:text-[16px] text-grayDark mb-3">
            مرخص / معتمد من
          </h3>
          <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 w-[100%]">
            <p className="  text-[14px] md:text-[20px]">{data.certifiedBy}</p>
          </div>
        </div>
        <div className="px-2 mdl:px-10 mb-5 ">
          <h3 className="text-[12px] md:text-[16px] text-grayDark mb-3">
            الدرجة العلمية
          </h3>
          <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 w-[100%]">
            <p className="  text-[14px] md:text-[20px]">{data.Degree}</p>
          </div>
        </div>
        <div className="px-2 mdl:px-10 mb-5 md:mb-8">
          <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 w-[100%]">
            <p className="  text-[14px] md:text-[20px]">
              موثقة من {data.certifiedBy}
            </p>
          </div>
        </div>
        <div className="px-2 mdl:px-10 mb-5 ">
          <h3 className="text-[12px] md:text-[16px] text-grayDark mb-3">
            تاريخ الحصول على الدرجة العلمية
          </h3>
          <div className="flex justify-between gap-5 md:gap-8 flex-wrap">
            <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 flex-1 max-w-[300px]">
              <p className="  text-[14px] md:text-[20px] text-center">
                {data.year}
              </p>
            </div>
            <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 flex-1 max-w-[300px]">
              <p className="  text-[14px] md:text-[20px] text-center">
                {data.month}
              </p>
            </div>
            <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 flex-1 max-w-[300px]">
              <p className="  text-[14px] md:text-[20px] text-center">
                {data.day}
              </p>
            </div>
          </div>
        </div>
        <div className="px-2 mdl:px-10 mb-5 ">
          <h3 className="text-[12px] md:text-[16px] text-grayDark mb-3">
            الشهادات
          </h3>
          <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 w-[100%]">
            <div>
              <div className="flex flex-wrap gap-7 mb-8 px-1">
                {data.certificates.map((img, i) => {
                  return (
                    <div
                      className="md:w-[102px] md:h-[80px] h-[47px] w-[63px] "
                      key={i}
                    >
                      <Image
                        src={img}
                        width={102}
                        height={80}
                        className=" h-[100%] w-[100%] object-contain"
                        alt="certificates"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="pt-[40px] border-t-2 border-grayLight flex flex-col gap-5">
                <div className="flex items-center gap-6 px-1">
                  <div className="min-w-[42px] w-[42px] h-auto">
                    <PdfIcon  />
                  </div>
                  <div>
                    <h3 className="text-[14px] md:text-[20px] font-Regular mb-[2px]">File Title.pdf</h3>
                    <p  className="text-[12px] md:text-[14px] text-grayDark">313 KB . 31 Aug, 2022  </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 px-1">
                  <div className="min-w-[42px] w-[42px] h-auto">
                    <PdfIcon  />
                  </div>
                  <div>
                    <h3 className="text-[14px] md:text-[20px] font-Regular mb-[2px]">File Title.pdf</h3>
                    <p  className="text-[12px] md:text-[14px] text-grayDark">313 KB . 31 Aug, 2022  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 mdl:px-10 mb-5 ">
          <h3 className="text-[12px] md:text-[16px] text-grayDark mb-3">
          رسوم خدمتك
          </h3>
          <div className="border border-greenMain rounded-[10px] py-3 md:py-5 px-6 md:px-7 w-[100%] flex items-center justify-between">
            <h4  className="text-[12px] md:text-[16px]">خدمة الاستشارة</h4>
            <p className="  text-[14px] md:text-[20px] font-Bold flex-1 text-center">{data.price}</p>
          </div>
        </div>
      </div>

      <div className="flex px-1 gap-5 md:gap-8 max-w-[950px] w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
        <Button
        
          className={
            "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold   flex items-center bg-greenMain justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white mb-5 md:mb-0"
          }
        >
          <ShareIcon />
          مشاركة 
        </Button>
        <Button
        onClick={()=>{
          router.push(`${id}/contract-Information`)
        }}
          className={
            "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold   flex items-center justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-greenMain"
          }
        >
          <ContractsIcon fill={'#10B0C1'} />
          ارسال عقد 
        </Button>
        <Button
          onClick={() => {
            setState("req");
            editModal("type", "req");
            editModal("open", true);
          }}
          className={
            "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5  flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none "
          }
        >
          <RefuseIcon />
          رفض الطلب
        </Button>
        <Link
          href={`#`}
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
}

export default ContractDetails;
