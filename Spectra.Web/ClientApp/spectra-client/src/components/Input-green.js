import React from "react";
import { TextInput } from "@mantine/core";

const InputGreen = ({ type = "text",className='', ...props }) => {
  return (
    <TextInput
      {...props}
      type={type}
      classNames={{
        input:
          "!h-14  lgl:!h-[66px] text-[12px] md:text-[16px] border-greenMain w-full rounded-lg  mdl:rounded-2xl",
        label: "text-[12px] md:text-[16px] mb-2",
      }}
      className={className}
    />
  );
};

export default InputGreen;
