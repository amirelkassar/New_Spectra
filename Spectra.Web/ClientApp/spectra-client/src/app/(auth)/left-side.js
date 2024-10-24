import ArrowLeft from "@/assets/icons/arrow-left";
import MessageIcon from "@/assets/icons/message";
import Button from "@/components/button";
import Image from "next/image";
import authImage from "@/assets/images/auth.png";

const LeftSide = () => {
  return (
    <section className="w-1/2 lgl:w-[487px] space-y-16 self-center hidden mdl:block ">
      <div className="w-full rounded-3xl overflow-hidden flex items-center justify-center">
        <Image
          src={authImage}
          alt={"Family"}
          className="max-w-max h-[560px] "
          priority
        />
      </div>
      <div className="text-xl flex-col lgl:flex-row gap-3 flex items-center justify-between lgl:px-3">
        <Button className={"whitespace-nowrap w-full"}>
          طلب المساعدة <MessageIcon />
        </Button>
        <Button className={"whitespace-nowrap w-full"}>
          العودة للرئيسية <ArrowLeft />
        </Button>
      </div>
    </section>
  );
};

export default LeftSide;
