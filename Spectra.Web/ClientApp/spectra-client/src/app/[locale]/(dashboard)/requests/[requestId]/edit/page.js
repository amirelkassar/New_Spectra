"use client";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import SaveIcon from "@/assets/icons/save";
import Button from "@/components/button";
import React, { useState } from "react";

const EditPage = ({ params: { requestId } }) => {
  const sala7eya = ["طبيب", "متخصص", "محاسب", "سكرتير"];
  const [Data, setData] = useState({
    name: "احمد محمد كمال",
    spec: "طبيب",
    desc: " دكتورا في الفلسفة بالخدمة الاجتماعية مختص في تطوير الذات والعلاقات الاسرية والزوجية والمشاكل النفسية والإدمان ومشكلات العمل\nمرخص معتمد من الهيئة السعودية للتخصصات الصحية",
    title: "مرخص معتمد من الهيئة السعودية للتخصصات الصحية",
    daqeqa: [
      "القلق",
      "الضغوط",
      "مشكلات في العلاقات",
      "مشكلات بالتواصل",
      "اضطرابات الشخصية",
      "التعامل مع الغضب",
      "ثنائي القطب",
      "القلق الاجتماعي ، الفوبيا",
      "فرط الحركة",
    ],
  });
  const handleDescChange = (e) => {
    setData({ ...Data, desc: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newValue =
        Data.desc.substring(0, selectionStart) +
        "\n" +
        Data.desc.substring(selectionEnd);
      setData({ ...Data, desc: newValue });

      // Move the cursor to the right position
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = selectionStart + 1;
      }, 0);
    }
  };
  const [addMore, setAddMore] = useState(false);
  const [valueDaqeqa, setValueDaqeqa] = useState('');
  return (
    <div className="default-page text-xl space-y-2 !justify-start !items-start  text-start !gap-y-3 md:!gap-y-8 ">
      <div className="max-w-[700px] w-[100%] flex flex-col gap-2 px-1 md:px-0">
        <input
          value={Data.name}
          onChange={(e) => {
            setData({ ...Data, name: e.target.value });
          }}
          className={
            "mb-0 outline-none py-2 px-4 h-[38px] md:h-[46px]  md:mb-3 text-start text-[14px] md:text-[18px] font-bold ring-1 !ring-[#CFD0D7] rounded-[2px]"
          }
        />
        <input
          value={Data.spec}
          onChange={(e) => {
            setData({ ...Data, spec: e.target.value });
          }}
          className={
            "mb-0 outline-none py-2 px-4 h-[38px] md:h-[46px]  md:mb-3 text-start text-[14px] md:text-[18px] font-bold ring-1 !ring-[#CFD0D7] rounded-[2px]"
          }
        />
        <textarea
          className=" outline-none py-2 px-4 h-auto min-h-[100px] md:mb-3 text-start text-[14px] md:text-[18px] font-bold w-[100%] max-w-[700px] ring-1 !ring-[#CFD0D7]"
          name="desc"
          value={Data.desc}
          onChange={handleDescChange}
          onKeyDown={handleKeyDown}
          rows="4"
          cols="50"
        />
      </div>

      <div className="flex items-center gap-5">
        <h2 className="text-[14px] md:text-[20px] font-bold">
          التخصصات الدقيقة
        </h2>
        <button
          onClick={() => {
            setAddMore(true);
          }}
          className="flex font-bold items-center justify-center gap-[8px] py-1 md:py-2 px-[18px] rounded-[12px] bg-[#E9F7FF]"
        >
          <PlusInsideCircleIcon />
          <p className="text-[12px] md:text-[16px] font-bold">أضافة تخصص</p>
        </button>
      </div>

      <div className="max-w-[850px] flex flex-wrap gap-x-5 gap-y-2">
        {Data.daqeqa.map((item, index) => (
          <div
            key={index}
            className="bg-grayLight px-2 md:px-3 py-1 rounded-md text-[14px] md:text-[20px] "
          >
            {item}
          </div>
        ))}
        {addMore ? (
          <form onSubmit={(e)=>{e.preventDefault(); console.log(valueDaqeqa);setValueDaqeqa('');setAddMore(false) }}>
            <input
            className="h-[46px] rounded-[10px] px-2 py-1 w-[200px] border border-[#CFD0D7] outline-none"
             value={valueDaqeqa}
              onChange={(e) => {
                setValueDaqeqa(e.target.value)
              }}
            />
          </form>
        ) : null}
      </div>
      <h2 className="text-[14px] md:text-[20px] font-bold">إضافة صلاحية</h2>
      <div className="flex gap-3 md:gap-5 flex-wrap px-1">
        {sala7eya.map((item, index) => (
          <Button
            className={`!rounded-lg md:!rounded-xl !py-1 text-[14px] ${
              Data.spec.split(" ").includes(item)
                ? ""
                : " ring-1 !text-[#010036] !ring-[#010036]"
            } border-none md:text-[20px] px-[17px] lg:px-[26px]`}
            variant={
              Data.spec.split(" ").includes(item) ? "secondary" : "ternary"
            }
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="flex px-1 gap-5 md:gap-8 max-w-[950px] w-[100%] flex-wrap !mt-5 md:!mt-[40px]">
        <Button
          className={
            "!py-0 text-[14px] md:text-[20px]  min-w-[200px] max-w-[100%] md:max-w-[260px] flex-1 !px-5 font-bold items-center  flex items-center bg-[#10B0C1] justify-center h-11 ring-1 !gap-4 !ring-greenMain border-none text-white"
          }
        >
          <SaveIcon />
          حفظ التعديلات
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
