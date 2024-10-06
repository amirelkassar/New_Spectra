"use client";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import BriefIcon from "@/assets/icons/brief";
import CloseIcon from "@/assets/icons/close";
import DateIcon from "@/assets/icons/date";
import LicenseIcon from "@/assets/icons/License";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import QualificationsIcon from "@/assets/icons/qualifications";
import Button from "@/components/button";
import Card from "@/components/card";
import Input from "@/components/input";
import { useRouter } from "@/navigation";
import ROUTES from "@/routes";
import { MultiSelect, Select, Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import certificates from "@/assets/images/certificates.png";
import React, { useState } from "react";
const allSpecialties = [
  "القلق",
  "الضغوط",
  "مشكلات في العلاقات",
  "مشكلات بالتواصل",
  "اضطرابات الشخصية",
  "التعامل مع الغضب",
  "ثنائي القطب",
  "القلق الاجتماعي ، الفوبيا",
  "فرط الحركة",
  "نفسى",
  "اجتماعى",
  "طيف توحد",
];
const allAvailableServices = [
  "خدمة الاستشارة",
  "خدمة الكشف المبكر",
  "خدمة أخرى",
  "خدمة الدعم النفسي",
  "خدمة التأهيل النفسي",
  "خدمة الإرشاد الأسري",
  "خدمة الوعي الذاتي",
  "خدمة علاج الإدمان",
  "خدمة تحسين العلاقات",
  "خدمة الاستشارات التربوية",
  "خدمة التوجيه المهني",
  "خدمة الاستشارات الزوجية",
  "خدمة العلاج السلوكي",
];
const allServices = ["خدمة الاستشارة", "خدمة الكشف المبكر", "خدمة أخرى"];
function PageEdit({ id }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [Data, setData] = useState({
    name: "احمد محمد كمال",
    gender: "ذكر",
    nationalID: "1225854",
    address: "السعودية",
    city: "دمام",
    phone: "9874563+",
    email: "safwa@gmail.com",
    brief:
      "دكتوراه في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان والمشكلات ",
    qualifications: "مرخص معتمد من الهيئة السعودية للتخصصات الصحية",
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
    licenseNumber: "5215664",
    star: 4,
    date: "2/8/2022",
    rating: 281,
    bookingCode: "DR-AHMED-2024",
    ListCertificates: [
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
      {
        id: 3,
        image: certificates,
        date: "20/8/2022",
        title: "دكتوراه العلوم الطبية",
      },
    ],
    Services: [
      {
        id: 0,
        name: "خدمة الاستشارة",
        price: "100",
      },
      {
        id: 1,
        name: "خدمة الكشف المبكر",
        price: "100",
      },
      {
        id: 2,
        name: "خدمة أخرى",
        price: "100",
      },
    ],
  });
  const handleAddService = (selectedItems) => {
    const existingServiceNames = Data.Services.map((service) => service.name);
    const newServicesToAdd = selectedItems
      .filter((serviceName) => !existingServiceNames.includes(serviceName))
      .map((serviceName) => ({
        name: serviceName,
        price: "0",
      }));
    const updatedServices = Data.Services.filter((service) =>
      selectedItems.includes(service.name)
    );
    setData({
      ...Data,
      Services: [...updatedServices, ...newServicesToAdd],
    });
  };
  const handleFeeChange = (serviceName, fee) => {
    const updatedServices = Data.Services.map((service) =>
      service.name === serviceName ? { ...service, price: fee } : service
    );
    setData({ ...Data, Services: updatedServices });
  };
  console.log(Data.Services);

  const handleRemoveEdit = () => {
    router.push(
      ROUTES.ADMIN.STAFF.STAFFIDINFORMATION(id) +
        "?type=" +
        searchParams.get("type")
    );
  };
  const handleAddSpecialty = (value) => {
    setData((prevState) => ({
      ...prevState,
      daqeqa: value,
    }));
  };
  const handleRemoveSpecialty = (itemToRemove) => {
    setData((prevState) => ({
      ...prevState,
      daqeqa: prevState.daqeqa.filter((item) => item !== itemToRemove),
    }));
  };
  return (
    <div className=" flex flex-col gap-7 w-full">
      <Card>
        <h2 className="text-sm lgl:text-xl  mb-4 lgl:mb-6">
          البيانات الشخصية{" "}
        </h2>
        <form className="w-[100%] clientEdit">
          <div className="flex flex-col flex-wrap md:flex-row gap-x-4 gap-y-4 md:gap-y-12">
            <Input
              label={"الاسم كمال"}
              value={Data.name}
              containerClassName={
                "!gap-1 min-w-[calc(50%-10px)] xl:min-w-[calc(50%-10px)]"
              }
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />

            <Select
              className=" min-w-[calc(50%-10px)]  !border-[#CFD0D7] !outline-none"
              label={"النوع "}
              defaultValue={Data.gender}
              data={["انثى", "ذكر"]}
              searchable
              nothingFoundMessage="Nothing found..."
            />

            <Input
              label={"البلد"}
              value={Data.address}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"المدينة"}
              value={Data.city}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={" رقم الهاتف  "}
              value={Data.phone}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
            <Input
              label={"البريد الالكترونى "}
              type={"email"}
              value={Data.email}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />

            <Input
              label={"رقم الهوية"}
              value={Data.nationalID}
              containerClassName={"!gap-1 min-w-[calc(50%-10px)]"}
              labelClassName={"!text-[16px] !mb-0 px-4"}
              inputClassName={
                "!h-[48px] rounded-[10px] !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
              }
            />
          </div>
        </form>
      </Card>
      <div>
        <h2 className="text-sm lgl:text-xl mb-4 lgl:mb-5">الوصف الوظيفى</h2>
        <Card>
          <div className="w-full flex flex-col gap-10">
            <div className="flex items-start gap-4 lg:gap-5">
              <DateIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div className="flex-1">
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  تاريخ الانضمام
                </h3>

                <DatePickerInput
                  className=" min-w-[calc(50%-10px)]  !border-[#CFD0D7] !outline-none"
                  placeholder="Pick date"
                  valueFormat="DD/MM/YYYY"
                  defaultValue={new Date(Data.date)}
                  onChange={(e) => {
                    setData({ ...Data, date: e });
                  }}
                  classNames={{
                    input:
                      "h-auto w-full min-h-11 py-2 text-[12px] md:text-xl !font-Regular  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-xl",
                  }}
                />
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <BriefIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div className="flex-1">
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  نبدة
                </h3>
                <p className=" text-[14px] lg:text-[20px] font-normal "></p>
                <Textarea
                  value={Data.brief}
                  autosize
                  onChange={(e) => {
                    setData({ ...Data, brief: e.target.value });
                  }}
                  classNames={{
                    input:
                      "h-auto w-full min-h-11 py-2 text-[12px] md:text-xl !font-Regular  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-xl",
                    label: "text-[12px]  md:text-[16px]",
                  }}
                  className="w-full flex-1"
                />
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <QualificationsIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div className="flex-1">
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  المؤهلات والتراخيص
                </h3>

                <Textarea
                  value={Data.qualifications}
                  autosize
                  onChange={(e) => {
                    setData({ ...Data, qualifications: e.target.value });
                  }}
                  classNames={{
                    input:
                      "h-auto w-full min-h-11 py-2 text-[12px] md:text-xl !font-Regular  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-xl",
                    label: "text-[12px]  md:text-[16px]",
                  }}
                  className="w-full flex-1"
                />
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5">
              <LicenseIcon
                className={"min-w-[22px] w-[22px] lg:min-w-[25px] h-auto mt-3"}
              />
              <div className="flex-1">
                <h3 className=" text-[14px] lg:text-[16px] font-bold lg:mb-2">
                  رقم الترخيص
                </h3>
                <Textarea
                  value={Data.licenseNumber}
                  autosize
                  onChange={(e) => {
                    setData({ ...Data, licenseNumber: e.target.value });
                  }}
                  classNames={{
                    input:
                      "h-auto w-full min-h-11 py-2 text-[12px] md:text-xl !font-Regular  !ring-[#CFD0D7] !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] rounded-xl",
                    label: "text-[12px]  md:text-[16px]",
                  }}
                  className="w-full flex-1"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full bg-white py-4 px-6 lg:px-10 lg:py-8 !mb-4 lg:rounded-xl relative">
        <div className="flex gap-4 items-center mb-10">
          <h2 className="text-[14px] md:text-[20px] font-bold">
            التخصصات الدقيقة
          </h2>
          <MultiSelect
            data={allSpecialties}
            defaultValue={Data.daqeqa}
            value={Data.daqeqa}
            placeholder="اختر تخصص"
            rightSection={<ArrowDownIcon />}
            className="MultiSelect h-auto flex-1"
            classNames={{
              input:" !h-auto"
            }}
            onChange={handleAddSpecialty}
          />
        </div>
        <div className="max-w-[850px] flex flex-wrap gap-x-5 gap-y-2">
          {Data.daqeqa.map((item, index) => (
            <div
              key={index}
              className="relative bg-blueLight px-3 md:px-5 py-1 rounded-lg text-[14px] md:text-[20px] flex items-center"
            >
              {item}
              <button
                onClick={() => handleRemoveSpecialty(item)}
                className="ml-2 absolute top-1 start-1 w-3 h-3 text-red-500"
              >
                <CloseIcon className={"w-full h-full"} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white py-4 px-6 lg:px-10 lg:py-8 !mb-4 lg:rounded-xl relative">
        <div className="flex gap-4 items-center mb-10">
          <h2 className="text-[14px] md:text-[20px] font-bold">رسوم الخدمات</h2>
          <MultiSelect
            data={allAvailableServices}
            placeholder="إضافة خدمة"
            rightSection={<ArrowDownIcon />}
            className="MultiSelect !h-auto  flex-1"
            classNames={{
              input: "!h-auto min-h-12",
            }}
            value={Data.Services.map((service) => service.name)}
            onChange={handleAddService}
          />
        </div>
        <div className=" w-full flex flex-col gap-4">
          {Data.Services.map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-base font-Regular min-w-[120px]">
                {service.name}
              </span>

              <Input
                value={service.price || ""}
                placeholder="$ 0.00"
                handleOnChange={(e) =>
                  handleFeeChange(service.name, e.target.value)
                }
                containerClassName={"!gap-1 flex-1"}
                labelClassName={"!text-[16px] !mb-0 px-4"}
                inputClassName={
                  "!h-[48px] rounded-[10px] !ring-[#CFD0D7] text-greenMain !ring-[0px] !border !border-[#CFD0D7] !outline-none bg-[#FCFCFD] text-[16px] !font-bold"
                }
              />
            </div>
          ))}
        </div>
      </div>
      <Card>
        <div className=" flex-1  w-full">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="headTitleDash "> الشهادات </h2>
            <button className="flex items-center justify-center w-40 h-10 rounded-xl bg-blueLight gap-4 font-bold">
              <PlusInsideCircleIcon />
              <p className=" text-[14px] md:text-[16px] font-bold">
                أضافة شهادة{" "}
              </p>
            </button>
          </div>
          <div className="flex gap-2 mdl:gap-4 flex-wrap ">
            {Data.ListCertificates.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className="py-3 bg-white mdl:py-5 px-3 mdl:px-4 shadow-sm border-gray border rounded-lg max-w-[260px] min-w-[calc(50%-4px)] md:min-w-[260px] flex-1"
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
      </Card>

      <Button
        variant="secondary"
        onClick={handleRemoveEdit}
        className="h-14 max-w-full w-[360px] text-xl font-Bold"
      >
        حفظ التعديلات
      </Button>
    </div>
  );
}

export default PageEdit;
