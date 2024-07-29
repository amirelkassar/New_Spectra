import BackIcon from "@/assets/icons/back";
import ContractsWhiteIcon from "@/assets/icons/contractsWhite";
import EditIcon from "@/assets/icons/edit";
import Button from "@/components/button";
import { Link } from "@/navigation";
import ROUTES from "@/routes";
import React from "react";

function ContractInformation({ id }) {
  console.log(id);
  return (
    <div className="default-page text-xl space-y-2 !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <div className="flex mb-1   items-center gap-4 ">
        <Link
          href={ROUTES.ADMIN.CONTRACTS.CONTRACTSID(id)}
          className=" w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] rounded-[50%]  flex items-center justify-center"
        >
          <BackIcon
            className={"w-full h-full"}
          />
        </Link>
        <h2 className="headTitleDash">العقد</h2>
      </div>
      <div dir="ltr" className="mt-3 md:mt-7">
        <div>
          <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-4">
            Introduction
          </h3>
          <p className={"text-[12px] md:text-[16px]"}>
            My name is [Your Name], and I am a UX/UI designer based in [Country
            Name]. I am passionate about creating user-centered solutions that
            enhance the user experience and simplify complex problems. My
            expertise lies in designing web and mobile applications, and I
            possess a proven track record of delivering high-quality,
            user-friendly products. This proposal outlines my design approach
            for your project, which will ensure we achieve the desired outcome.
            It details the project timeline, scope of work, and associated
            costs.
          </p>
        </div>
        <span className=" block h-[2px] w-full bg-grayLight mb-2 md:mb-4 mt-6 md:mt-9"></span>
        <div>
          <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-4">
            Context
          </h3>
          <p className={"text-[12px] md:text-[16px]"}>
            [Replace the placeholder text with a concise and factual description
            of the company. This could include their founding year, core
            business activities, target audience, or any relevant achievements.]
            Project Goals & Vision:The client aims to become a leading player in
            the Indian e-grocery industry. They are targeting a user base of
            [XX,XXX] active monthly users and [XXX,XXX] registered users. This
            ambitious vision requires a user-friendly and effective design that
            will attract and retain customers.
          </p>
        </div>
        <span className=" block h-[2px] w-full bg-grayLight mb-2 md:mb-4 mt-6 md:mt-9"></span>
        <div>
          <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-4">
            Project Approach & Scope of work
          </h3>
          <p className={"text-[12px] md:text-[16px]"}>
            My UX process follows industry-standard UX standards. Each project
            is completed in three key phases: • Research • Design • Iterate
          </p>
        </div>
        <span className=" block h-[2px] w-full bg-grayLight mb-2 md:mb-4 mt-6 md:mt-9"></span>
        <div>
          <h3 className="text-[16px] font-Bold md:text-[20px] mb-2 md:mb-4">
            Introduction
          </h3>
          <p className={"text-[12px] md:text-[16px]"}>
            My name is [Your Name], and I am a UX/UI designer based in [Country
            Name]. I am passionate about creating user-centered solutions that
            enhance the user experience and simplify complex problems. My
            expertise lies in designing web and mobile applications, and I
            possess a proven track record of delivering high-quality,
            user-friendly products. This proposal outlines my design approach
            for your project, which will ensure we achieve the desired outcome.
            It details the project timeline, scope of work, and associated
            costs.
          </p>
          <p className={"text-[12px] md:text-[16px]"}>
            Phase 1: Research This initial phase focuses on gathering
            comprehensive user insights to establish a strong foundation for the
            project. We will employ a combination of qualitative and
            quantitative research methods to identify: Key User Personas:
            Defining the primary user groups and their demographic
            characteristics. User Needs: Understanding the core goals and
            motivations users seek to fulfill with your product. User Goals:
            Identifying the specific objectives users rely on your product to
            achieve. Competitive Analysis: Evaluating the user experience
            offered by your competitors to identify potential opportunities for
            differentiation. Thorough user research forms the foundation for a
            successful UX strategy, guiding design decisions to deliver a
            user-centric solution aligned with your goals.
          </p>
        </div>
      </div>
      <div className="flex px-1 gap-5 md:gap-8 max-w-[950px] w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
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
    </div>
  );
}

export default ContractInformation;
