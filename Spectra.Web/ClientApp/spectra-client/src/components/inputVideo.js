import React from "react";
import { TextInput } from "@mantine/core";

function InputVideo({ type = "text", className = "", ...props }) {
  return (
    <TextInput
      {...props}
      type={type}
      classNames={{
        input:
          "!h-10  lgl:!h-12 text-[12px] border-2 md:text-base border-[#E2E8F0] w-full rounded-xl  mdl:rounded-xl",
        label: "text-[12px] md:text-base mb-2",
      }}
      className={className}
    />
  );
}

export default InputVideo;
