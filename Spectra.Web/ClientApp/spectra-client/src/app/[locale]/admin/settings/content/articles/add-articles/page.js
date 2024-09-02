"use client";
import Card from "@/components/card";
import React, { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
function Page({ placeholder }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  
  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      showCharsCounter: false,
      "inline": true,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      placeholder: placeholder || "Start typings...",
      
      buttons: [
        "font",
        "fontsize",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "ul",
        "ol",
        "paragraph",
        "indent",
        "outdent",
        "left",
      ],
      buttonsXS: [
        "font",
        "fontsize",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "ul",
        "ol",
        "paragraph",
        "indent",
        "outdent",
        "left",
      ],
      buttonsMD: [
        "font",
        "fontsize",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "ul",
        "ol",
        "paragraph",
        "indent",
        "outdent",
        "left",
      ],
      buttonsSM: [
        "font",
        "fontsize",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "ul",
        "ol",
        "paragraph",
        "indent",
        "outdent",
        "left",
      ],
    }),
    [placeholder]
  );
  return (
    <Card>
      <h1 className="text-center my-4 mdl:my-8 text-[24px] mdl:text-[36px] font-Bold">
        اضافة مقال
      </h1>

      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
    </Card>
  );
}

export default Page;
