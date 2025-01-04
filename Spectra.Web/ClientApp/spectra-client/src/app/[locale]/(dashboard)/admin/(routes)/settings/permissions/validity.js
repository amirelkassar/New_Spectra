"use client";
import React, { useState } from "react";
import { Group, Switch } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
function Validity({ dataSwitch }) {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckAll = () => {
    if (selectedValues.length === dataSwitch.length) {
      setSelectedValues([]);
    } else {
      setSelectedValues(dataSwitch);
    }
  };
  const handleSwitchChange = (value) => {
    setSelectedValues((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="px-3">
      <Switch
        size={isMobile ? "md" : "xl"}
        color="#10B0C1"
        labelPosition="left"
        className="flex items-center justify-between gap-3 flex-1 w-full mb-12 mdl:mb-20"
        classNames={{
          body: "flex items-center justify-between gap-3 flex-1 w-full",
          label: "text-[14px] md:text-[20px] font-Bold",
          track: ` h-[26px] mdl:h-[35px]  ${
            selectedValues.length === dataSwitch.length ? "" : "bg-grayDark"
          }`,
          thumb: "bg-white size-[19px] mdl:size-[28px]",
        }}
        value="all"
        label="جميع الصلاحيات"
        checked={selectedValues.length === dataSwitch.length}
        onChange={() => {
          handleCheckAll();
        }}
      />

      <Switch.Group value={selectedValues} onChange={setSelectedValues}>
        <Group mt="xs" className="flex flex-col gap- mb-126mdl: mdl:gap-9">
          {dataSwitch.map((item, i) => {
            return (
              <Switch
                key={i}
                size={isMobile ? "md" : "xl"}
                color="#10B0C1"
                labelPosition="left"
                className="flex items-center justify-between gap-3 flex-1 w-full"
                classNames={{
                  body: "flex items-center justify-between gap-3 flex-1 w-full",
                  label: "text-[14px] md:text-[20px] font-Bold",
                  track: `  h-[26px] mdl:h-[35px]  ${
                    selectedValues.includes(item) ? "" : "bg-grayDark"
                  }`,
                  thumb: "bg-white size-[19px] mdl:size-[28px]",
                }}
                value={item}
                label={item}
                checked={selectedValues.includes(item)}
                onChange={() => handleSwitchChange(item)}
              />
            );
          })}
        </Group>
      </Switch.Group>
    </div>
  );
}

export default Validity;
