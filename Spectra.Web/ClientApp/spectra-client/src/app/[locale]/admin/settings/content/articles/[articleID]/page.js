import Card from "@/components/card";
import React from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { Textarea, TextInput } from "@mantine/core";
import Button from "@/components/button";
import Image from "next/image";
import image1 from "@/assets/images/child.png";
import EditIcon from "@/assets/icons/edit";
function page() {
  return (
    <Card>
      <div className="flex items-center mb-3 gap-4 lg:gap-9">
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon className={"w-full h-full"} />
        </Link>
        <h2>المقالات</h2>
      </div>
      <div className="flex flex-col gap-8">
        <TextInput
          defaultValue={"الإدمان واضطراب فرط الحركة ونقص الانتباه (ADHD)"}
          classNames={{
            input:
              "min-h-11 lg:min-h-[64px] rounded-lg h-auto pe-6 max-w-[660px]  border-[#CFD0D7] text-base lg:text-[24px] font-Bold",
          }}
        />

        <div className="w-full h-[180px] lg:h-[434px] relative mb-5">
          <Image
            alt="man"
            src={image1}
            width={800}
            className="w-full h-full object-cover object-top"
            height={324}
          />
          <div className=" size-[52px] rounded-full bg-greenMain flex items-center  justify-center absolute left-2/4 -bottom-[26px] -translate-x-1/2">
            <EditIcon pathColor="white" />
          </div>
        </div>
        <Textarea
          autosize
          defaultValue={
            "يعد اضطراب نقص الانتباه وفرط النشاط (ADHD) أحد أكثر اضطرابات النمو العصبي شيوعًا والأكثر دراسة لدى الأطفال: اكتشف العلماء أن هناك اختلافات في الأدمغة والشبكات العصبية والناقلات العصبية لدى المصابين بهذا الاضطراب. عد حالة دماغية طويلة الأمد (مزمنة) تسبب خللًا تنفيذيًا، مما يعني أنها تعطل قدرة الشخص على إدارة عواطفه وأفكاره وأفعاله. يجعل الاضطراب من الصعب على الأشخاص إدارة سلوكهم أو الانتباه أو السيطرة على النشاط الزائد أو تنظيم مزاجهم. أو اتباع التوجيهات. عادةً ما يتم تشخيص الأطفال أثناء مرحلة الطفولة، وغالبًا ما تستمر الحالة حتى مرحلة البلوغ.يعد العلاج الفعال متاح، وإذا تُرك اضطراب فرط الحركة ونقص الانتباه دون علاج، فيمكن أن يسبب مضاعفات خطيرة مدى الحياة. "
          }
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full  border-[#CFD0D7] text-[18px] font-Regular",
          }}
        />

        <div className="w-full h-[130px] lg:h-[324px] relative mb-5">
          <Image
            alt="man"
            src={image1}
            width={800}
            className="w-full h-full object-cover object-top"
            height={324}
          />
          <div className=" size-[52px] rounded-full bg-greenMain flex items-center  justify-center absolute left-2/4 -bottom-[26px] -translate-x-1/2">
            <EditIcon pathColor="white" />
          </div>
        </div>
        <Textarea
          autosize
          defaultValue={
            "يعد اضطراب نقص الانتباه وفرط النشاط (ADHD) أحد أكثر اضطرابات النمو العصبي شيوعًا والأكثر دراسة لدى الأطفال: اكتشف العلماء أن هناك اختلافات في الأدمغة والشبكات العصبية والناقلات العصبية لدى المصابين بهذا الاضطراب. عد حالة دماغية طويلة الأمد (مزمنة) تسبب خللًا تنفيذيًا، مما يعني أنها تعطل قدرة الشخص على إدارة عواطفه وأفكاره وأفعاله. يجعل الاضطراب من الصعب على الأشخاص إدارة سلوكهم أو الانتباه أو السيطرة على النشاط الزائد أو تنظيم مزاجهم. أو اتباع التوجيهات. عادةً ما يتم تشخيص الأطفال أثناء مرحلة الطفولة، وغالبًا ما تستمر الحالة حتى مرحلة البلوغ.يعد العلاج الفعال متاح، وإذا تُرك اضطراب فرط الحركة ونقص الانتباه دون علاج، فيمكن أن يسبب مضاعفات خطيرة مدى الحياة. "
          }
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full  border-[#CFD0D7] text-[18px] font-Regular",
          }}
        />
      </div>
    
      <div className="flex flex-col mt-10 items-center gap-3">
        <Button
          className="w-full h-12 lg:h-[60px] text-sm lg:text-[20px] font-Bold duration-300 hover:shadow-md"
          variant="secondary"
        >
          تأكيد
        </Button>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-12 lg:h-[60px] text-sm lg:text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </Card>
  );
}

export default page;
