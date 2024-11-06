"use client";

import { Attachment } from "@/client/_components/child";
import dayjs from "dayjs";

const DATA = [
  {
    fileName: "Prescription.pdf",
    size: "1.2 MB",
    date: "2024-10-26T10:23:37.249Z",
  },
  {
    fileName: "Prescription.pdf",
    size: "1.2 MB",
    date: "2024-10-26T10:23:37.249Z",
  },
];

export const Files = () => {
  return (
    <div className="flex flex-wrap gap-6 my-7 mdl:my-10">
      {DATA?.map((item, i) => (
        <File key={i} {...item} />
      ))}
    </div>
  );
};

const File = ({ fileName = "", date = "", size = "" }) => {
  return (
    <Attachment>
      <Attachment.Icon />
      <div>
        <Attachment.Name>{fileName}</Attachment.Name>
        <Attachment.SizeAndDate>
          {size} . {dayjs(date).locale("en").format("DD MMM, YYYY")}
        </Attachment.SizeAndDate>
      </div>
    </Attachment>
  );
};
