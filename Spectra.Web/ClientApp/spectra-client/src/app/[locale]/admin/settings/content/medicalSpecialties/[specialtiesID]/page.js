'use client'
import { columns } from "../_components/columns";
import Button from "@/components/button";
import Card from "@/components/card";
import { DataTable } from "@/components/data-table";
import React from "react";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 5,
  },
  {
    id: 1,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 5,
  },
  {
    id: 2,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 4,
  },
  {
    id: 3,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 4,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 5,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 6,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
  {
    id: 7,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    star: 3,
  },
];
function page() {
  return (
    <Card>
      <h1 className="text-center my-4 mdl:my-8 text-[18px] mdl:text-[24px] font-Bold">
        البانرات الدعائية
      </h1>
      <p className="text-center text-grayDark my-4 mdl:my-8 text-[16px] mdl:text-[20px] font-Regular">
        السحب والإفلات للأقسام لإعادة ترتيبها، قم بالضغط مطولًا على القسم
        المطلوب وسحبه إلى المكان الجديد.
      </p>
      <div>
        <DataTable  data={data} columns={columns} />
      </div>
      <Button
        variant={"secondary"}
        className="w-[80%] h-[60px] font-Bold max-w-full mx-auto my-12"
      >
        تأكيد
      </Button>
      
    </Card>
  );
}

export default page;
