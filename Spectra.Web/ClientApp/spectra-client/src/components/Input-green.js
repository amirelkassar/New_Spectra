import React from "react";
import { TextInput } from "@mantine/core";

const InputGreen = ({ type = "text",className='', ...props }) => {
  return (
    <TextInput
      {...props}
      type={type}
      classNames={{
        input:
          "!h-14  lgl:!h-[66px] text-[12px] md:text-base border-greenMain w-full rounded-lg  mdl:rounded-xl",
        label: "text-[12px] md:text-base mb-2",
      }}
      className={className}
    />
  );
};

export default InputGreen;
