import { Tabs, Textarea } from "@mantine/core";
import React from "react";

function Notes() {
  return (
    
      <Tabs color="#10B0C1" defaultValue="bundles">
        <Tabs.List justify="center" classNames={{ list: "mt-3" }}>
          <Tabs.Tab
           classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="bundles"
          >
            ملاحظات
          </Tabs.Tab>
          <Tabs.Tab
           classNames={{
              tab: "text-sm lgl:text-base font-Regular data-[active]:font-bold",
            }}
            value="services"
          >
            الملاحظات السابقة
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="bundles">
          <Textarea
            placeholder="اكتب ملاحظتك هنا"
            classNames={{
              input:
                "min-h-[86px] my-10 lgl:min-h-[100px] pt-5 border-greenMain rounded-xl text-[12px] lgl:text-base font-Medium",
            }}
          />
        </Tabs.Panel>

        <Tabs.Panel value="services">
          <p className="p-2 my-10">اكتب ملاحظتك هنا</p>
        </Tabs.Panel>
      </Tabs>
  
  );
}

export default Notes;
