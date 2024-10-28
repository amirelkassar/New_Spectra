"use client";
import { Switch } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";

function SwitchContracts() {
  const [switches, setSwitches] = useState({
    freelance: false,
    spectraTeam: false,
  });

  const handleSwitchChange = (key) => {
    setSwitches((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex flex-col gap-6 ps-3 lgl:ps-14" dir="ltr">
      <div>
        <Switch
          size={isMobile ? "md" : "xl"}
          checked={switches.freelance}
          onChange={() => handleSwitchChange("freelance")}
          color="#10B0C1"
          labelPosition="left"
          label="Work as a freelance"
          className="flex items-center justify-between gap-3 flex-1 w-full"
          classNames={{
            body: "flex items-center  gap-3  justify-between md:justify-start  flex-1 w-full",
            label: "text-[14px] md:text-[20px] min-w-[210px] mdl:min-w-[430px] font-Bold",
            track: ` h-[26px] mdl:h-[35px]`,
            thumb: "bg-white size-[19px] mdl:size-[28px]",
          }}
        />
      </div>
      <div>
        <Switch
          size={isMobile ? "md" : "xl"}
          checked={switches.spectraTeam}
          onChange={() => handleSwitchChange("spectraTeam")}
          labelPosition="left"
          className="flex items-center justify-between gap-3 flex-1 w-full"
          color="#10B0C1"
          classNames={{
            body: "flex items-center  gap-3  justify-between md:justify-start  flex-1 w-full",
            label: "text-[14px] md:text-[20px] min-w-[210px] mdl:min-w-[430px] font-Bold",
            track: ` h-[26px] mdl:h-[35px]`,
            thumb: "bg-white size-[19px] mdl:size-[28px]",
          }}
          label="Work as a member of the Spectra team "
        />
      </div>
    </div>
  );
}

export default SwitchContracts;
