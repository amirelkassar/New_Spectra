import { Textarea } from "@mantine/core";
import React from "react";

function Notes() {
  return (
    <div className="w-full mt-6">
      <Textarea placeholder="اكتب ملاحظتك هنا" classNames={{input:'min-h-[100px] pt-5 border-greenMain rounded-xl text-base font-Medium'}} />
    </div>
  );
}

export default Notes;
