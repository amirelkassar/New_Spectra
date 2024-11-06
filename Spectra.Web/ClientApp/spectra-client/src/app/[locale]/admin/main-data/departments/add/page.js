"use client";
import React, { useState } from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import Button from "@/components/button";
import ROUTES from "@/routes";
import InputGreen from "@/components/Input-green";
import { MultiSelect } from "@mantine/core";
import ArrowDownIcon from "@/assets/icons/arrow-down";
import AddManger from "../_components/addManger";
import CardDocManger from "../_components/cardDocManger";
import DeleteIcon from "@/assets/icons/delete";
import { GetSpecialization } from "@/useAPI/admin/main-data/specialties";
import { useCreateSection } from "@/useAPI/admin/main-data/section";
const doctors = [
  {
    id: 1,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 2,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 3,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 4,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 5,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 6,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 7,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 8,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 9,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 10,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 11,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 12,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 13,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 14,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 15,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
  {
    id: 16,
    name: "أحمد عبد كامل",
    jobTitle: "طبيب نفسي",
    experience: "5 سنوات خبرة",
    rating: 9.5,
  },
];

function Page() {
  const { data, isLoading } = GetSpecialization();
  const {
    mutate: CreateSection,
    error,
    isSuccess,
    isError,
    reset,
  } = useCreateSection();

  const [DocID, setDocID] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    diagnoses: [],
    doctorId: "string",
    doctorName: "احمد علي",
  });
  useEffect(() => {
    isSuccess &&
      setFormData({
        name: "",
        diagnoses: [],
        doctorId: "string",
        doctorName: "احمد علي",
      });
  }, [isSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (isError) {
      reset();
    }
  };

  const handleMultiSelectChange = (selectedItems) => {
    setFormData((prevData) => ({
      ...prevData,
      diagnoses: selectedItems,
    }));
    if (isError) {
      reset();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    CreateSection(formData);
  };
  return (
    <div>
      <div className="flex mb-10 lgl:mt-0 mt-6   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.DATAMAIN.DEPARTMENTS}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2 className="headTitleDash">اضافة قسم</h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 lg:gap-8 px-3 mb-14">
          <InputGreen
            label="اسم القسم"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <MultiSelect
            data={data?.data?.data.map((item) => item.name) || []}
            label="التخصصات"
            placeholder="اختر التخصصات"
            rightSection={<ArrowDownIcon />}
            value={formData.diagnoses}
            onChange={handleMultiSelectChange}
            className="MultiSelect h-auto flex-1"
            classNames={{
              input: "!h-auto py-1 min-h-[60px]",
              label: "text-[12px] md:text-[16px] mb-2",
            }}
          />
          <AddManger doctors={doctors} DocID={DocID} setDocID={setDocID} />
          <div className="flex items-start gap-3">
            <div className="md:max-w-[240px] w-full">
              <CardDocManger />
            </div>
            <button className="border-red duration-200 hover:shadow-md border rounded-md w-9 md:w-12 h-9 md:h-12 flex items-center justify-center">
              <DeleteIcon className={" w-4 md:w-5 h-auto"} />
            </button>
          </div>
        </form>
        <div className="flex mt-10 items-center gap-4 md:gap-10 flex-col md:flex-row">
          <Button
            onClick={handleSubmit}
            variant="secondary"
            className={
              "max-w-[290px] w-full font-bold disabled:cursor-not-allowed md:h-[60px]"
            }
          >
            حفظ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
