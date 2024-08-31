import Image from "next/image";
import React from "react";
import clientImg from "@/assets/images/client.png";
import doctorImg from "@/assets/images/doctor.png";
import LeaveCallIcon from "@/assets/icons/leaveCall";
import MicrophoneIcon from "@/assets/icons/microphone";
import VideoIcon from "@/assets/icons/video";
function VideoCall() {
  return (
    <div className=" relative w-full h-[500px] lgl:h-[540px] mb-6 max-w-full lgl:after:content-none after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] after:z-[1] after:bg-gradient-to-t after:from-[#373737] after:to-[#00000000] after:opacity-80">
      <div className="w-full h-full lgl:rounded-xl  overflow-hidden">
        <Image
          src={clientImg}
          alt="client"
          width={980}
          height={540}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[118px] lgl:w-[150px] absolute top-20 lgl:top-6 start-7 h-[130px] lgl:h-[168px] rounded-xl overflow-hidden border-[3px] border-white">
        <Image
          src={doctorImg}
          alt="client"
          width={980}
          height={540}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" absolute bottom-7 z-10 flex gap-3 items-center left-1/2 -translate-x-1/2">
        <div className="bg-grayLight py-3 h-11 lgl:h-[58px] w-[62px] px-4 rounded-lg flex items-center justify-center duration-300 hover:shadow-md cursor-pointer">
          <VideoIcon className={"h-full w-auto"} />
        </div>
        <div className="bg-grayLight py-3 h-11 lgl:h-[58px] w-[62px] px-4 rounded-lg flex items-center justify-center duration-300 hover:shadow-md cursor-pointer">
          <MicrophoneIcon className={"h-full w-auto"} />
        </div>
        <div className="bg-red cursor-pointer h-11 lgl:h-[58px] p-3 rounded-lg flex items-center justify-center gap-4 w-fit duration-300 hover:shadow-md hover:shadow-red/40  ">
          <p className="text-sm text-white font-Bold lg:text-xl">مغادرة</p>
          <LeaveCallIcon className={"h-4 w-6"} />
        </div>
      </div>
    </div>
  );
}

export default VideoCall;
