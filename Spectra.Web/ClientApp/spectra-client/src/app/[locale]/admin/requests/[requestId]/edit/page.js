"use client";
import AcceptIcon from "@/assets/icons/accept";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import EditIcon from "@/assets/icons/edit";
import EditImgIcon from "@/assets/icons/editImg";
import ImagePlaceholderIcon from "@/assets/icons/image-placeholder";
import RefuseIcon from "@/assets/icons/refuse";
import Button from "@/components/button";
import Input from "@/components/input";
import { Link } from "@/navigation";
import { MultiSelect, Select } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import certificates from "@/assets/images/certificates.png";
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
const EditPage = ({ params: { requestId } }) => {
  const sala7eya = ["طبيب", "متخصص", "محاسب", "سكرتير"];
  const [Data, setData] = useState({
    name: "احمد محمد كمال",
    spec: "طبيب",
    desc: " دكتورا في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان ومشكلات العمل\nمرخص معتمد من الهيئة السعودية للتخصصات الصحية",
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
  });
  const handleDescChange = (e) => {
    setData({ ...Data, desc: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newValue =
        Data.desc.substring(0, selectionStart) +
        "\n" +
        Data.desc.substring(selectionEnd);
      setData({ ...Data, desc: newValue });

      // Move the cursor to the right position
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = selectionStart + 1;
      }, 0);
    }
  };
 
  const data = {
    name: "عبدالله الشيخ",
    lastEntry: "25/4/2024",
    customerType: "عائلة طفل",
    nationalID: "623-456-782",
    address: "السعودية",
    city: "دمام",
    phone: "9874563+",
    email: "safwa@gmail.com",
    website: "safwa@gmail.com",
    gender: "ذكر",
    jop: "مدير مؤسسة حكومية",
    numChildren: "1 طفل",
    dateBirth: "2/8/1990",
  };
  return (
    <div className="w-full">
      <h2 className="text-sm lg:text-xl font-bold mb-5 lg:mb-8">
        طلبات الاشتراك
      </h2>
      <div className="default-page w-full max-w-[100%] mb-11  text-xl  !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
        <h2>البيانات الشخصية </h2>
        <form className="w-[100%] clientEdit">
          <div className="flex flex-col flex-wrap md:flex-row gap-x-4 gap-y-4 md:gap-y-12">
            <div className=" relative">
              <div className=" w-[100%] lg:w-auto lg:size-24 rounded-full overflow-hidden flex items-center justify-center">
                <label htmlFor="file" className="cursor-pointer">
                  <ImagePlaceholderIcon />
                </label>
                <input id="file" type="file" className="hidden" />
              </div>
              <div className="bg-greenMain flex items-center justify-center p-[7px] rounded-[50%] size-[32px] absolute left-[50%] bottom-[-12px] border-[2px] border-white translate-x-[-50%]">
                <EditImgIcon />
              </div>
            </div>

            <Input
              label={"الاسم"}
              value={data.name}
              containerClassName={
                "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
              }
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"اخر دخول"}
              value={data.lastEntry}
              containerClassName={
                "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
              }
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
              readOnly={true}
            />
            <Select
              className=" min-w-[calc(50%-10px)]  !border-[#CFD0D7] !outline-none"
              label={"نوع العميل"}
              defaultValue={data.customerType}
              data={["عائلة طفل", "منظمه"]}
              searchable
              nothingFoundMessage="Nothing found..."
            />
            <Input
              label={"رقم الهوية"}
              value={data.nationalID}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"البلد"}
              value={data.address}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"المدينة"}
              value={data.city}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"رقم الهاتف"}
              value={data.phone}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"البريد الالكترونى "}
              type={"email"}
              value={data.email}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
          </div>
        </form>
      </div>
      <h2 className="text-sm lg:text-xl font-bold mb-5 lg:mb-8">
        الوصف الوظيقى
      </h2>
      <div className="default-page w-full max-w-[100%] mb-5  text-xl  !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
        <form className="w-[100%] clientEdit">
          <div className="flex flex-col  flex-wrap md:flex-row gap-x-4 gap-y-4 md:gap-y-12">
            <Select
              className=" min-w-[calc(50%-10px)]  !border-[#CFD0D7] !outline-none"
              label={"التخصص"}
              defaultValue={"اخصائى نفسى"}
              data={["اخصائى نفسى2", "اخصائى نفسى"]}
              searchable
              nothingFoundMessage="Nothing found..."
            />
            <Input
              label={"رقم الترخيص / الاعتماد"}
              defaultValue={"235846"}
              containerClassName={
                "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
              }
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"مرخص / معتمد من"}
              defaultValue={" مرخص معتمد من الهيئة السعودية للتخصصات الصحية"}
              containerClassName={
                "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
              }
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"رقم الهوية"}
              defaultValue={"623-456-782"}
              containerClassName={
                "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
              }
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"الدرجة العلمية "}
              defaultValue={"623-456-782"}
              containerClassName={
                "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(42%-10px)]"
              }
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
          </div>
        </form>
      </div>

      <div className="col-span-1 lg:col-span-2 bg-white py-4 px-6 lg:px-10 lg:py-8 !mb-4 lg:rounded-xl relative">
        <div className="flex gap-4 items-center mb-10">
          <h2 className="text-[14px] md:text-[20px] font-bold">
            التخصصات الدقيقة
          </h2>

          <MultiSelect
            data={["نفسى", "اجتماعى", "طيف توحد"]}
            placeholder="اختر تخصص"
            rightSection={<ArrowDownIcon />}
            className="MultiSelect flex-1"
          />
        </div>
        <div className="max-w-[850px] flex flex-wrap gap-x-5 gap-y-2">
          {Data.daqeqa.map((item, index) => (
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
                  Data.spec.includes(item)
                    ? ""
                    : " ring-1 !text-[#010036] !ring-[#010036]"
                } border-none md:text-[20px] px-[17px] lg:px-[26px]`}
                variant={Data.spec.includes(item) ? "secondary" : "ternary"}
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
  
    </div>
  );
};

export default EditPage;
