import BackIcon from "@/assets/icons/back";
import ContractsWhiteIcon from "@/assets/icons/contractsWhite";
import EditIcon from "@/assets/icons/edit";
import Button from "@/components/button";
import Card from "@/components/card";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";
import ServicesFreelancer from './services-freelancer'
import ServicesMember from './services-member'
function ContractInformation({ id }) {
  console.log(id);
  return (
    <div>
      
      <Card className={'!pe-12 '} >
        <ServicesFreelancer/>
        <ServicesMember/>
        <div dir="ltr" className="mt-3 md:mt-7 flex flex-col gap-4">
          <div className="pb-7 border-t pt-6 border-grayLight">
            <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-5">
              Introduction
            </h3>
            <p className={"text-[12px] md:text-[16px]"}>
              My name is [Your Name], and I am a UX/UI designer based in
              [Country Name]. I am passionate about creating user-centered
              solutions that enhance the user experience and simplify complex
              problems. My expertise lies in designing web and mobile
              applications, and I possess a proven track record of delivering
              high-quality, user-friendly products. This proposal outlines my
              design approach for your project, which will ensure we achieve the
              desired outcome. It details the project timeline, scope of work,
              and associated costs.
            </p>
          </div>

          <div className="pb-7 border-t pt-6 border-grayLight">
            <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-5">
              Context
            </h3>
            <p className={"text-[12px] md:text-[16px]"}>
              [Replace the placeholder text with a concise and factual
              description of the company. This could include their founding
              year, core business activities, target audience, or any relevant
              achievements.] Project Goals & Vision:The client aims to become a
              leading player in the Indian e-grocery industry. They are
              targeting a user base of [XX,XXX] active monthly users and
              [XXX,XXX] registered users. This ambitious vision requires a
              user-friendly and effective design that will attract and retain
              customers.
            </p>
          </div>
       
        </div>
        <div className="flex px-1 gap-5 md:gap-8 justify-end w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
          <Button
            className={
              " max-w-[260px] !py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5 font-bold   flex items-center bg-greenMain justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white mb-5 md:mb-0"
            }
          >
            <ContractsWhiteIcon />
            ارسال عقد
          </Button>

          <Link
            href={`#`}
            className={
              " max-w-[260px] !py-0 text-[14px] md:text-[20px] min-w-[200px] flex-1 !px-5  flex gap-[15px] font-bold items-center justify-center h-11 ring-1 !ring-[#010036] text-[#010036] border-none rounded-[10px]"
            }
          >
            <EditIcon />
            تعديل
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default ContractInformation;
