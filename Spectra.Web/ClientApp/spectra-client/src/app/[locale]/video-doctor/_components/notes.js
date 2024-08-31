import { Textarea } from "@mantine/core";
import React from "react";

function Notes() {
  return (
    <div className="w-full mt-6 h-full">
      <Textarea placeholder="اكتب ملاحظتك هنا" classNames={{input:'min-h-[86px] lgl:min-h-[100px] pt-5 border-greenMain rounded-xl text-[12px] lgl:text-base font-Medium'}} />
    </div>
  );
}

export default Notes;
