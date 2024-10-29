"use client";
import EditIcon from "@/assets/icons/edit";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React, { useState } from "react";
import ServicesFreelancer from "./services-freelancer";
import ServicesMember from "./services-member";
import { MultiSelect, NavLink, TextInput } from "@mantine/core";
import Button from "@/components/button";
import RefuseIcon from "@/assets/icons/refuse";
import AcceptIcon from "@/assets/icons/accept";
import useModal from "@/store/modal-slice";
import { useSearchParams } from "next/navigation";
import LinkGreen from "@/components/linkGreen";
import WorkNum from "./workNum";
import SwitchContracts from "./switchContracts";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import ArrowDownIcon from "@/assets/icons/arrow-down";
const serviceOptions = [
  { id: 1, value: "examination", label: "Examination Service" },
  { id: 2, value: "counseling", label: "Counseling Service" },
  { id: 3, value: "diagnostic", label: "Diagnostic Service" },
  { id: 4, value: "followup", label: "Follow-up Service" },
];

function ContractInformation({ id }) {
  const { modal, editModal } = useModal();
  const searchparams = useSearchParams();

  const [listFreelancer, setListFreelancer] = useState([]);
  const [listMember, setListMember] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to track search input
  const [filteredOptions, setFilteredOptions] = useState(serviceOptions);
  const handleAddToList = (value) => {
    if (!listFreelancer.find((item) => item.id === value.id)) {
      const newItem = { id: value.id, label: value.label, price: 0 };
      setListFreelancer([...listFreelancer, newItem]);
    }
    if (!listMember.find((item) => item.id === value.id)) {
      const newItem = { id: value.id, label: value.label, price: 0 };
      setListMember([...listMember, newItem]);
    }
  };
  // Handle deleting an item from the list
  const handleDeleteItem = (type, id) => {
    if (type === "freelancer") {
      const updatedList = listFreelancer.filter((item) => item.id !== id);
      setListFreelancer(updatedList);
    }
    if (type === "member") {
      const updatedList = listMember.filter((item) => item.id !== id);
      setListMember(updatedList);
    }
  };

  console.log(listFreelancer);
  console.log(listMember);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Filter options based on search term
    const filtered = serviceOptions.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };
  const handleServiceDataChange = (serviceId, value, type) => {
    if (type === "freelancer") {
      setListFreelancer((prevData) =>
        prevData.map((item) =>
          item.id === serviceId ? { ...item, price: value } : item
        )
      );
    } else if (type === "member") {
      setListMember((prevData) =>
        prevData.map((item) =>
          item.id === serviceId ? { ...item, price: value } : item
        )
      );
    }
  };

  return (
    <Card className="mt-5 ">
      {searchparams.get("editContracts") === "true" ? (
        <div className=" relative h-11 mdl:h-14 max-h-14 mdl:max-h-16 mb-5">
          <div className="border absolute top-0 overflow-hidden w-full left-0 z-50 border-solid  rounded-xl min-h-11 mdl:min-h-14">
            <NavLink
              label="Choose Services"
              component="button"
              className="min-h-11 mdl:min-h-14 rounded-xl bg-white hover:bg-white"
              rightSection={<ArrowDownIcon />}
              dir="ltr"
              classNames={{
                body: "text-start",
                children: "p-0 pb-4 mdl:pb-6 bg-white",
              }}
            >
              <div className=" -mt-11 mdl:-mt-14">
                <div className=" mb-1 mdl:mb-4">
                  <TextInput
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="ابحث عن خدمة..."
                    className=" p-1 mdl:p-2 w-full rounded-lg mb-1 mdl:mb-4 max-w-[calc(100%-50px)] mdl:max-w-[calc(100%-100px)] "
                    classNames={{
                      input:
                        "!border-none h-10 w-full text-sm mdl:text-base font-Bold",
                    }}
                  />
                </div>
                {filteredOptions.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex bg-white items-center px-2 mdl:px-6 justify-between gap-6 py-2 mdl:py-3 border-b-2 border-grayLight last-of-type:border-none"
                    >
                      <h4 className=" text-sm mdl:text-xl font-Bold">
                        {item.label}
                      </h4>
                      <button
                        onClick={() => {
                          handleAddToList(item);
                        }}
                        className={` size-5 mdl:size-7  duration-300 hover:shadow-md hover:scale-[1.02]  text-white rounded-full`}
                      >
                        <PlusInsideCircleIcon
                          className={" w-full h-full rounded-full"}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </NavLink>
          </div>
        </div>
      ) : null}

      <ServicesFreelancer
        data={listFreelancer}
        setData={setListFreelancer}
        handleServiceDataChange={handleServiceDataChange}
        handleDeleteItem={handleDeleteItem}
      />

      <ServicesMember
        data={listMember}
        setData={setListMember}
        handleServiceDataChange={handleServiceDataChange}
        handleDeleteItem={handleDeleteItem}
      />
      <WorkNum />

      <SwitchContracts />
      {searchparams.get("editContracts") === "true" ? (
        <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
          <LinkGreen
            href={ROUTES.DOCTOR.CONTRACTS.DASHBOARD}
            className={
              "  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11  rounded-[10px]"
            }
          >
            حفظ التعديلات
          </LinkGreen>
        </div>
      ) : (
        <div className="flex px-1 flex-col mdl:flex-row gap-5 md:gap-8 justify-center items-center mdl:justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
          <Button
            onClick={() => {
              editModal("type", "contractsAccept");
              editModal("open", true);
            }}
            className={
              "text-[12px] lg:text-[16px]   mdl:max-w-[260px] !w-full !py-0 !px-3 md:!px-5 font-bold items-center flex-1 flex  bg-greenMain justify-center  md:w-[120px] !min-h-11 ring-1 !gap-[8px] !ring-greenMain border-none text-white"
            }
          >
            <AcceptIcon />
            قبول
          </Button>
          <Button
            onClick={() => {
              editModal("type", "contractsReq");
              editModal("open", true);
            }}
            className={
              "text-[12px] lg:text-[16px]  mdl:max-w-[260px] !w-full  !py-0 !px-3 md:!px-5 flex font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-red text-red border-none  md:w-[120px] !gap-[8px]"
            }
          >
            <RefuseIcon />
            رفض
          </Button>
          <Link
            href={ROUTES.DOCTOR.CONTRACTS.CONTRACTSIDEDIT(id)}
            className={
              "  mdl:max-w-[260px] w-full !py-0 text-[14px] md:text-[20px] min-w-[200px] !px-5  flex gap-[15px] font-bold items-center flex-1 justify-center !min-h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
            }
          >
            <EditIcon />
            تعديل
          </Link>
        </div>
      )}
    </Card>
  );
}

export default ContractInformation;
