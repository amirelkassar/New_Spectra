import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Button from "./button";

function ContractsTextDetails({ contractText, setContractText, setEditText }) {
  const handleTextChange = (value) => {
    setContractText(value);
  };
  return (
    <div>
      <div dir="rtl" className="contractsDetails">
        <ReactQuill
          className="text-start"
          value={contractText}
          onChange={handleTextChange}
        />
      </div>
      <Button
        variant="secondary"
        className="font-Bold text-sm mdl:text-xl w-full h-11 md:w-[230px] mdl:h-14 my-5"
        onClick={() => {
          setEditText(false);
        }}
      >
        حفظ التعديلات
      </Button>
    </div>
  );
}

export default ContractsTextDetails;
