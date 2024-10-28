"use client";
import Card from "@/components/card";
import React, { useState } from "react";
import CardDocManger from "./_components/cardDocManger";
import DeleteIcon from "@/assets/icons/delete";
import AddTeamIcon from "@/assets/icons/addTeam";
import AddManger from "./_components/addManger";
import { useDisclosure } from "@mantine/hooks";
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
  const [DocID, setDocID] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card>
      <AddManger
        opened={opened}
        open={open}
        close={close}
        doctors={doctors}
        DocID={DocID}
        setDocID={setDocID}
      >
        <button
          onClick={() => {
            open();
          }}
          className=" md:min-w-[240px] md:max-w-[240px] w-full bg-blueLight my-10 mx-auto  duration-300 cursor-pointer hover:shadow-md rounded-xl h-[88px] md:h-[114px] flex flex-col justify-center items-center gap-2"
        >
          <AddTeamIcon className={" w-7 mdl:w-10 h-auto mx-auto"} />
          <h3 className=" text-center font-bold text-sm  mdl:text-base">
            اضافة اخصائيين
          </h3>
        </button>
      </AddManger>
      <h2 className="p-2 text-sm md:text-base mb-7">الاخصائيين</h2>
      <div className="flex items-center flex-wrap gap-8">
        <div className="flex  gap-3">
          <div className="md:min-w-[240px] max-w-[240px] w-full">
            <CardDocManger />
          </div>
          <button className="border-red duration-200 hover:shadow-md border rounded-md size-9 mdl:size-12 min-w-9 mdl:min-w-12 flex items-center justify-center">
            <DeleteIcon className={" w-4 md:w-5 h-auto"} />
          </button>
        </div>
        <div className="flex  gap-3">
          <div className="md:min-w-[240px] max-w-[240px] w-full">
            <CardDocManger />
          </div>
          <button className="border-red duration-200 hover:shadow-md border rounded-md size-9 mdl:size-12 min-w-9 mdl:min-w-12 flex items-center justify-center">
            <DeleteIcon className={" w-4 md:w-5 h-auto"} />
          </button>
        </div>
        <div className="flex  gap-3">
          <div className="md:min-w-[240px] max-w-[240px] w-full">
            <CardDocManger />
          </div>
          <button className="border-red duration-200 hover:shadow-md border rounded-md size-9 mdl:size-12 min-w-9 mdl:min-w-12 flex items-center justify-center">
            <DeleteIcon className={" w-4 md:w-5 h-auto"} />
          </button>
        </div>
        <AddManger
          opened={opened}
          open={open}
          close={close}
          doctors={doctors}
          DocID={DocID}
          setDocID={setDocID}
        >
          <button
            onClick={() => {
              open();
            }}
            className="border-2 md:min-w-[240px] md:max-w-[240px] w-full border-dashed border-greenMain duration-300 cursor-pointer hover:shadow-md rounded-xl h-[88px] md:h-[114px] flex flex-col justify-center items-center gap-2"
          >
            <AddTeamIcon className={" w-7 mdl:w-10 h-auto mx-auto"} />
            <h3 className=" text-center font-bold text-sm  mdl:text-base">
              اضافة اخصائيين
            </h3>
          </button>
        </AddManger>
      </div>
    </Card>
  );
}

export default Page;
