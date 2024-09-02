import Card from "@/components/card";
import React from "react";
import BackIcon from "@/assets/icons/back";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import { Textarea, TextInput } from "@mantine/core";
import Button from "@/components/button";
import WhatsAppIcon from "@/assets/icons/whatsApp";
import Image from "next/image";
import image1 from "@/assets/images/child.png";
import EditIcon from "@/assets/icons/edit";
import StarWhiteIcon from "@/assets/icons/starWhite";

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
              "min-h-[64px] h-auto pe-6 max-w-[660px]  border-[#CFD0D7] text-[24px] font-Bold",
          }}
        />
        <div className="flex items-center gap-4 text-base mr-3">
          <p>لا يوجد تقييم حتى الآن</p>
          <div className="flex items-center gap-1 ">
            <StarWhiteIcon fill="#939393" className={'w-5 h-auto'} />
            <StarWhiteIcon fill="#939393" className={'w-5 h-auto'} />
            <StarWhiteIcon fill="#939393" className={'w-5 h-auto'} />
            <StarWhiteIcon fill="#939393" className={'w-5 h-auto'} />
            <StarWhiteIcon fill="#939393" className={'w-5 h-auto'} />
          </div>
        </div>
        <Textarea
          autosize
          defaultValue={
            "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، "
          }
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full  border-[#CFD0D7] text-[18px] font-Regular",
          }}
        />
        <div className="w-full h-[324px] relative mb-5">
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
            "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، "
          }
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full  border-[#CFD0D7] text-[18px] font-Regular",
          }}
        />
        <TextInput
          defaultValue={
            "يتم تشخيص معظم الحالات عند الأطفال بعمر أقل من 12 عامًا، ولكن في بعض الأحيان يتم تشخيصها لاحقًا في مرحلة الطفولة."
          }
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full  border-[#CFD0D7] text-[20px] font-Bold",
          }}
        />
        <Textarea
          autosize
          defaultValue={
            "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، "
          }
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full  border-[#CFD0D7] text-[18px] font-Regular",
          }}
        />
        <div className="w-full h-[324px] relative mb-5">
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
            "الإدمان ما هو الا وسيلة أخرى للمدمن للتكيف والتعامل مع معاناته الناتجة عن الأعراض والاضطرابات الأخرى المصاحبة لاضطراب فرط الحركة ونقص الانتباه (ADHD)، مثل ضعف التركيز، فرط الحركة، القلق، الاكتئاب، إضرابات التعلم والسلوك وغيرها الكثير، "
          }
          classNames={{
            input:
              "min-h-[64px] h-auto pe-6 w-full  border-[#CFD0D7] text-[18px] font-Regular",
          }}
        />
      </div>
      <div className="flex items-center justify-between  pt-9 border-t max-w-[640px] mx-auto mt-10">
        <h3 className="text-base font-Regular">المشاركة فى</h3>
        <div className="flex items-center  border rounded-md border-[#EAEAEA]">
          <div className="border-e p-3 flex items-center justify-center  last-of-type:border-none border-[#EAEAEA]">
            <WhatsAppIcon />
          </div>
          <div className="border-e p-3 flex items-center justify-center  last-of-type:border-none border-[#EAEAEA]">
            <WhatsAppIcon />
          </div>
          <div className="border-e p-3 flex items-center justify-center  last-of-type:border-none border-[#EAEAEA]">
            <WhatsAppIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 items-center gap-3">
        <Button
          className="w-full h-[60px] text-[20px] font-Bold duration-300 hover:shadow-md"
          variant="secondary"
        >
          تأكيد
        </Button>
        <Link
          href={ROUTES.ADMIN.SETTINGS.CONTENT.ARTICLES}
          className="w-full duration-300 hover:shadow-md hover:border-red flex items-center justify-center border rounded-xl h-[60px] text-[20px] font-Bold"
        >
          إلغاء
        </Link>
      </div>
    </Card>
  );
}

export default page;
