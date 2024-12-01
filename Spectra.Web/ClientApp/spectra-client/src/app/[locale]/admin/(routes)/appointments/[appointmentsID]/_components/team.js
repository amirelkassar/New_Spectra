import Card from "@/components/card";
import Image from "next/image";
import React from "react";
import team from "@/assets/images/doctor.png";
import StarGoldIcon from "@/assets/icons/starGold";
const dataTeam = [
  {
    id: 0,
    name: "احمد  محمد كمال ",
    role: "اخصائى نفسى ",
    star: 9,
    image: team,
  },
  {
    id: 1,
    name: "محمد عبدالله",
    role: "اخصائى نفسى ",
    star: 9.5,
    image: team,
  },
];

function Team() {
  return (
    <Card>
      <h3 className="mb-8 font-Bold text-base mdl:text-lg ">الفريق المعالج</h3>
      <div className="flex gap-4 mdl:gap-8 flex-wrap">
        {dataTeam.map((item, i) => {
          return (
            <div
              key={i}
              className="border-2 border-blueLight rounded-3xl mld:rounded-xl px-2 mld:px-5 py-3 flex items-center gap-3 max-w-[140px] mdl:max-w-[250px] w-full mdl:flex-row flex-col g"
            >
              <Image
                alt=""
                src={item.image}
                className=" size-[70px] mdl:size-20 rounded-full mdl:rounded-lg object-cover "
              />
              <div>
                <h4 className="text-xs mdl:text-base text-center mdl:text-start font-Bold max-w-[130px] truncate">{item.name}</h4>
                <p className="text-xs mdl:text-base text-center mdl:text-start font-Regular mb-3">{item.role}</p>
                <div className="flex items-center mx-auto mdl:mx-0 gap-1 border px-1 border-grayDark rounded-3xl w-fit">
                  <p className="text-grayDark text-xs font-Bold">9.5</p>
                  <StarGoldIcon className="w-3 h-auto" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default Team;
