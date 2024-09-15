"use client";
import Button from "@/components/button";
import Card from "@/components/card";
import { Checkbox, Table } from "@mantine/core";
import Image from "next/image";
import avatar from "@/assets/images/placeholder-person.png";
import React, { useState } from "react";
import StarGoldIcon from "@/assets/icons/starGold";
import { Link } from "@/navigation";
import BackIcon from "@/assets/icons/back";
import ROUTES from "@/routes";
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
        <StarGoldIcon key={i} className={"w-[10px] lg:w-[18px] h-auto"} />
      );
    }
    return stars;
  };
  return (
    <Card>
      <div className=" mb-7 lgl:mb-14 ">
        <div className="flex items-center  gap-2 lg:gap-3">
          <Link
            href={ROUTES.ADMIN.SETTINGS.CONTENT.MEDICAL}
            className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
          >
            <BackIcon className={"w-full h-full"} />
          </Link>
          <h2 className="text-base lg:text-[20px] font-bold ">
            اخصائيين التوحد
          </h2>
        </div>
        <p className="text-center lgl:text-start text-grayDark my-4 lgl:my-8 text-sm lgl:text-[18px] font-Regular">
          يرجى تحديد الأطباء الذين ترغب في ظهورهم على الموقع الذي يتصفحه العملاء
          و الزوار
        </p>
      </div>
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
                <Table.Td className="flex items-center gap-2  lgl:gap-4">
                  <Checkbox
                    color="#10B0C1"
                    size="xs"
                    checked={selectedUsers.has(index)}
                    onChange={() => toggleUser(index)}
                  />
                  <div className="flex items-center gap-2">
                    <Image
                      src={doctor.avatar}
                      alt="doctor"
                      className=" size-[60px] hidden lg:block rounded-full object-cover object-top"
                    />
                    <h2 className="text-[12px] lgl:text-base min-w-[96px]">{doctor.name}</h2>
                  </div>
                </Table.Td>
                <Table.Td className="text-[12px] lgl:text-base">{doctor.specialisationDoctor}</Table.Td>
                <Table.Td className="text-[12px] lgl:text-base">{doctor.date}</Table.Td>
                <Table.Td>
                  <div className="flex gap-1 lgl:gap-[6px] items-center justify-start w-[116px]">
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
        className="lgl:w-[80%] w-full h-12 text-sm lgl:text-xl lgl:h-[60px] font-Bold max-w-full mx-auto my-12"
      >
        تأكيد
      </Button>
    </Card>
  );
}

export default Page;
