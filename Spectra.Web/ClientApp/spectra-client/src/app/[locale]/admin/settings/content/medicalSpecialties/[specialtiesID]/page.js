"use client";
import { columns } from "../_components/columns";
import Button from "@/components/button";
import Card from "@/components/card";
import { DataTable } from "@/components/data-table";
import { Checkbox, Table } from "@mantine/core";
import Image from "next/image";
import avatar from "@/assets/images/placeholder-person.png";
import React, { useState } from "react";
import StarGoldIcon from "@/assets/icons/starGold";
const data = [
  {
    id: 0,
    name: "عبدالله الشيخ",
    kinshipName: "عائلة طفل",
    doctor: "احمد محمد كمال",
    specialisationDoctor: " اخصائى نفسى",
    date: "25/4/2024",
    time: "10:00 pm",
    avatar: avatar,
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
    avatar: avatar,
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
    avatar: avatar,
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
    avatar: avatar,
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
    avatar: avatar,
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
    avatar: avatar,
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
    avatar: avatar,
    star: 3,
  },
];
function Page() {
  const [selectedUsers, setSelectedUsers] = useState(new Set());

  const toggleUser = (index) => {
    const newSelectedUsers = new Set(selectedUsers);
    if (newSelectedUsers.has(index)) {
      newSelectedUsers.delete(index);
    } else {
      if (selectedUsers.size >= 4) {
        return null;
      } else {
        newSelectedUsers.add(index);
      }
    }
    setSelectedUsers(newSelectedUsers);
  };
  const getStar = (num) => {
    const stars = [];
    for (let i = 1; i <= num; i++) {
      stars.push(
        <StarGoldIcon key={i} className={"w-[14px] lg:w-[18px] h-auto"} />
      );
    }
    return stars;
  };
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
        <Table>
          <Table.Thead className="bg-blueLight h-[50px] min-h-[50px]  ">
            <tr>
              <Table.Th className="text-start text-xs font-ExtraLight lg:text-base rounded-s-xl ps-5">
                الاسم
              </Table.Th>
              <Table.Th className="text-start text-xs font-ExtraLight lg:text-base">
                تخصص الطبيب
              </Table.Th>
              <Table.Th className="text-start text-xs font-ExtraLight lg:text-base">
                تاريخ الانضمام
              </Table.Th>
              <Table.Th className="text-start text-xs font-ExtraLight lg:text-base rounded-e-xl pe-5">
                التقييم
              </Table.Th>
            </tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((doctor, index) => (
              <Table.Tr key={index} className="mt-3">
                <Table.Td className="flex items-center gap-4">
                  <Checkbox
                    size="xs"
                    checked={selectedUsers.has(index)}
                    onChange={() => toggleUser(index)}
                  />
                  <div className="flex items-center gap-2">
                    <Image
                      src={doctor.avatar}
                      className=" size-[60px] rounded-full object-cover object-top"
                    />
                    <h2 className="text-base">{doctor.name}</h2>
                  </div>
                </Table.Td>
                <Table.Td>{doctor.specialisationDoctor}</Table.Td>
                <Table.Td>{doctor.date}</Table.Td>
                <Table.Td>
                  <div className="flex gap-[6px] items-center justify-start w-[116px]">
                    {getStar(doctor.star)}
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
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

export default Page;
