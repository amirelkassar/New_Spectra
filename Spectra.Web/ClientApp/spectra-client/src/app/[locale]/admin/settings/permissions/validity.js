"use client";
import React, { useState } from "react";
import HeaderPage from "./header-page";
import ROUTES from "@/routes";
import { Group, Switch } from "@mantine/core";

function Validity() {
  const [selectedValues, setSelectedValues] = useState(["react"]);

  const handleCheckAll = () => {
    if (selectedValues.length === 4) {
      setSelectedValues([]);
    } else {
      setSelectedValues(["react", "svelte", "ng", "vue"]);
    }
  };
  const handleSwitchChange = (value) => {
    setSelectedValues((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };
 
  return (
    <div className="default-page">
      <HeaderPage
        title={"الاعدادات - الأذونات - مستويات الصلاحية "}
        linkBack={ROUTES.ADMIN.SETTINGS.PERMISSIONS.DASHBOARD}
      />
      <div>
        <h2 className="text-[16px] mdl:text-[24px] font-Bold">طبيب</h2>
      </div>
      <div>
        <Switch
         size="xl"
         color="#10B0C1"
          labelPosition="left"
          className="flex items-center justify-between gap-3 flex-1 w-full mb-20"
          classNames={{
            body: "flex items-center justify-between gap-3 flex-1 w-full",
            label: "text-[14px] md:text-[20px] font-Bold",
          }}
          value="all"
          label="جميع الصلاحيات"
          checked={selectedValues.length === 4}
          onChange={() => {
            handleCheckAll();
          }}
        />
        <Switch.Group value={selectedValues} onChange={setSelectedValues}>
          <Group mt="xs" className="flex flex-col gap-9">
            <Switch
            size="xl"
            color="#10B0C1"

              labelPosition="left"
              className="flex items-center justify-between gap-3 flex-1 w-full"
              classNames={{
                body: "flex items-center justify-between gap-3 flex-1 w-full",
                label: "text-[14px] md:text-[20px] font-Bold",
                track:` h-[35px]  ${selectedValues.includes("react")?'':'bg-grayDark'}`,
                thumb:'bg-white size-[28px]',         
              }}
              value="react"
              label="ادارة"
              checked={selectedValues.includes("react")}
              onChange={() => handleSwitchChange("react")}
            />
            <Switch
             size="xl"
             color="#10B0C1"
              labelPosition="left"
              className="flex items-center justify-between gap-3 flex-1 w-full"
              classNames={{
                body: "flex items-center justify-between gap-3 flex-1 w-full",
                label: "text-[14px] md:text-[20px] font-Bold",
              }}
              value="svelte"
              label="انشاء جديد"
              checked={selectedValues.includes("svelte")}
              onChange={() => handleSwitchChange("svelte")}
            />
            <Switch
             size="xl"
             color="#10B0C1"
              labelPosition="left"
              className="flex items-center justify-between gap-3 flex-1 w-full"
              classNames={{
                body: "flex items-center justify-between gap-3 flex-1 w-full",
                label: "text-[14px] md:text-[20px] font-Bold",
              }}
              value="ng"
              label="تعديل"
              checked={selectedValues.includes("ng")}
              onChange={() => handleSwitchChange("ng")}
            />
            <Switch
             size="xl"
             color="#10B0C1"
              labelPosition="left"
              className="flex items-center justify-between gap-3 flex-1 w-full"
              classNames={{
                body: "flex items-center justify-between gap-3 flex-1 w-full",
                label: "text-[14px] md:text-[20px] font-Bold",
              }}
              value="vue"
              label="مسح"
              checked={selectedValues.includes("vue")}
              onChange={() => handleSwitchChange("vue")}
            />
          </Group>
        </Switch.Group>
      </div>
    </div>
  );
}

export default Validity;
