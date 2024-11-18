"use client";
import AcceptIcon from "@/assets/icons/accept";
import EditIcon from "@/assets/icons/edit";
import RefuseIcon from "@/assets/icons/refuse";
import Button from "@/components/button";
import MenuActions from "@/components/menu-actions";
import { Link } from "@/navigation";
import useModal from "@/store/modal-slice";
import React from "react";
import ImagePlaceholderIcon from "@/assets/icons/image-placeholder";
import certificates from "@/assets/images/certificates.png";
import Image from "next/image";
import ROUTES from "@/routes";
import ActionMenu from "../_components/ActionMenuPage";
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
const ListCertificates = [
  {
    id: 0,
    image: certificates,
    date: "20/8/2022",
    title: "دكتوراه العلوم الطبية",
  },
  {
    id: 1,
    image: certificates,
    date: "20/8/2022",
    title: "دكتوراه العلوم الطبية",
  },
  {
    id: 2,
    image: certificates,
    date: "20/8/2022",
    title: "دكتوراه العلوم الطبية",
  },
];
const sala7eya = ["طبيب", "متخصص", "محاسب", "سكرتير"];
const Card = ({ title, values }) => {
  return (
    <div className="bg-white py-4 lg:py-7 px-6 lg:px-12 lg:rounded-xl flex flex-row lg:flex-col gap-2">
      <p className="text-nowrap w-[130px] md:w-auto text-[12px] md:text-[16px] flex items-center gap-1">
        {title} <span className="lg:hidden inline-block">/</span>{" "}
      </p>
      <div className="w-full flex flex-wrap gap-3 gap-y-2 ">
        {values.map((value, index) => (
          <h2 key={index} className="text-[13px] md:text-[16px] font-bold">
            {value}
          </h2>
        ))}
      </div>
    </div>
  );
};
const RequestDetailsPage = ({ params: { requestId } }) => {
  const { modal, editModal } = useModal();
  return (
    <div className=" text-xl space-y-2 !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <h2 className="text-sm mb-4 lg:mb-6 lg:text-xl font-bold">
        طلبات الاشتراك
      </h2>
      <section className="grow grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-y-2.5 lg:!mb-10 !mb-5 lg:gap-x-5 ">
        <div className="col-span-1 lg:col-span-2 bg-white py-4 px-6 lg:px-10 lg:py-8  lg:rounded-xl relative">
          <div className={"absolute top-5 end-5"}>
            <ActionMenu />
          </div>
          <h3 className=" text-sm mdl:text-medium block mb-8 ">
            {" "}
            البيانات الشخصية
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <div className=" w-[100%] lg:w-auto lg:size-24 rounded-full overflow-hidden flex items-center justify-center">
                <label htmlFor="file" className="cursor-pointer">
                  <ImagePlaceholderIcon />
                </label>
                <input id="file" type="file" className="hidden" />
              </div>
              <div className="flex flex-row lg:flex-col items-center lg:items-start lg:justify-around py-4 lg:py-0">
                <p className="text-nowrap w-[110px] md:w-auto text-[13px] md:text-[16px] flex items-center gap-1">
                  الاسم<span className="lg:hidden inline-block">/</span>
                </p>
                <h2 className="text-[13px] md:text-[16px] font-bold">
                  احمد محمد كمال
                </h2>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col items-center lg:items-start lg:justify-around">
              <p className="text-nowrap w-[110px] md:w-auto text-[13px] md:text-[16px] flex items-center gap-1">
                تاريخ الطلب <span className="lg:hidden inline-block">/</span>
              </p>
              <h2 className="text-[13px] md:text-[16px] font-bold">
                25/4/2024
              </h2>
            </div>
          </div>
        </div>
        <Card title={"نوع العمل"} values={["منظمة"]} />
        <Card title={" رقم الهوية "} values={["623-456-782"]} />
        <Card title={"العنوان"} values={["السعودية"]} />
        <Card title={"المدينة"} values={["دمام"]} />
        <Card title={"رقم الهاتف"} values={["9874563+"]} />
        <Card title={"البريد الالكترونى"} values={["safwa@gmail.com"]} />
      </section>
      <h2 className="text-sm !mb-4 lg:!mb-6 lg:text-xl font-bold">
        طلبات الاشتراك
      </h2>
      <section className="grow grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-y-2.5  !mb-5 lg:gap-x-5 ">
        <Card title={"التخصص"} values={["اخصائى نفسى"]} />
        <Card title={" رقم الترخيص / الاعتماد "} values={["235846"]} />
        <Card
          title={"مرخص / معتمد من"}
          values={["  مرخص معتمد من الهيئة السعودية للتخصصات الصحية"]}
        />
        <Card title={"رقم الهوية"} values={["623-456-782"]} />
        <Card title={"الدرجة العلمية"} values={["درجة الدكتوراه."]} />
      </section>

      <div className="col-span-1 lg:col-span-2 bg-white py-4 px-6 lg:px-10 lg:py-8 !mb-4 lg:rounded-xl relative">
        <h3 className=" text-sm mdl:text-xl font-bold block mb-8 ">
          التخصصات الدقيقة
        </h3>
        <div className="max-w-[850px] flex flex-wrap gap-x-5 gap-y-2 mb-5">
          {data.daqeqa.map((item, index) => (
            <div
              key={index}
              className="bg-blueLight px-3 md:px-5 py-1 rounded-lg text-[14px] md:text-[20px] "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-white py-4 px-6 lg:px-10 lg:py-8 !mb-4 lg:rounded-xl relative">
        <div className=" w-full mb-14 lg:mb-20">
          <h2 className="headTitleDash mb-6"> الشهادات </h2>
          <div className="flex gap-2 mdl:gap-4 flex-wrap ">
            {ListCertificates.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className="py-3 mdl:py-5 px-3 mdl:px-4 bg border-gray border shadow-sm rounded-lg max-w-[260px] min-w-[calc(50%-4px)] md:min-w-[260px] flex-1"
                >
                  <Image
                    src={item.image}
                    width={228}
                    height={178}
                    className="w-full h-auto object-contain rounded-[10px]"
                    alt="items"
                  />
                  <div className="flex md:items-center flex-col md:flex-row md:justify-between gap-1 md:gap-3 mt-3 mdl:mt-5 flex-wrap">
                    <h2 className="text-[12px] mdl:text-[16px] font-Bold ">
                      {item.title}
                    </h2>
                    <p className="text-[12px] mdl:text-[16px] text-grayDark">
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-[14px] md:text-xl mb-6 font-bold">
            إضافة صلاحية
          </h2>
          <div className="flex gap-3 md:gap-5 flex-wrap px-1">
            {sala7eya.map((item, index) => (
              <Button
                className={`!rounded-lg md:!rounded-xl !py-1 text-[14px] ${
                  data.spec.includes(item)
                    ? ""
                    : " ring-1 !text-[#010036] !ring-[#010036]"
                } border-none md:text-[20px] px-[17px] lg:px-[26px]`}
                variant={data.spec.includes(item) ? "secondary" : "ternary"}
                key={index}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex px-1 gap-5 md:gap-8 max-w-[950px] w-[100%] flex-wrap !mt-5 md:!mt-14">
          <Button
            onClick={() => {
              editModal("type", "accept");
              editModal("open", true);
            }}
            className={
              "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold   flex items-center bg-greenMain justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
            }
          >
            <AcceptIcon />
            قبول
          </Button>
          <Button
            onClick={() => {
              editModal("type", "req");
              editModal("open", true);
            }}
            className={
              "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5  flex font-bold items-center justify-center h-11 ring-1 !ring-red text-red border-none "
            }
          >
            <RefuseIcon />
            رفض
          </Button>
          <Link
            href={ROUTES.ADMIN.REQUESTSIDEdit(requestId)}
            className={
              "!py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5  flex gap-[15px] font-bold items-center justify-center h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
            }
          >
            <EditIcon />
            تعديل
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailsPage;
