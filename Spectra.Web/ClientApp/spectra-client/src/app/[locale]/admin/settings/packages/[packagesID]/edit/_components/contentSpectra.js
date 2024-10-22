import DeleteIcon from "@/assets/icons/delete";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import Card from "@/components/card";
import { NavLink, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
const availableOptions = [
  { value: "خدمة الكشف المبكر", label: "خدمة الكشف المبكر" },
  { value: "خدمة الاستشارات الفردية", label: "خدمة الاستشارات الفردية" },
  {
    value: "خدمة التشخيص المتعدد التخصصات",
    label: "خدمة التشخيص المتعدد التخصصات",
  },
  { value: "خدمة التدريب", label: "خدمة التدريب" },
  { value: "خدمة دعم المراكز و الجهات", label: "خدمة دعم المراكز و الجهات " },
];
function ContentSpectra({ list, setList }) {
  const [OpenOther, setOpenOther] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State to track search input
  const [filteredOptions, setFilteredOptions] = useState(availableOptions); // Filtered data
  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddToListFromInput = () => {
    if (inputValue.trim() !== "") {
      const newItem = { id: `${list.length + 1}`, text: inputValue };
      setList([...list, newItem]);
      setInputValue("");
      setOpenOther(false);
    }
  };

  // Handle adding a new item to the list
  const handleAddToList = (value) => {
    if (value) {
      const newItem = { id: `${list.length + 1}`, text: value };
      setList([...list, newItem]);
    }
  };

  // Handle deleting an item from the list
  const handleDeleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  // Count occurrences of each item
  const countOccurrences = () => {
    return list.reduce((acc, item) => {
      acc[item.text] = (acc[item.text] || 0) + 1;
      return acc;
    }, {});
  };
  const occurrences = countOccurrences();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Filter options based on search term
    const filtered = availableOptions.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };
  return (
    <Card className={"mdl:!ps-14 mdl:!py-8"}>
      <h3 className=" mb-5 text-xs mdl:text-base font-Regular">محتوى الباقة</h3>
      {/* عرض عدد ظهور كل عنصر */}

      <div className="flex items-center gap-4 bg-white">
        <ul className="flex items-center gap-4 flex-wrap mb-6">
          {Object.entries(occurrences).map(([text, count], i) => (
            <li
              key={i}
              className="bg-blueLight text-black/50 font-Regular rounded-xl px-2 h-9 mdl:h-[50px] flex items-center justify-center max-w-[170px] mdl:max-w-[222px] truncate min-w-[106px] mdl:min-w-[150px]"
            >
              <p className="max-w-full truncate text-xs mdl:text-base">
                {count} {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className=" relative h-14 mdl:h-16 max-h-14 mdl:max-h-16 mb-5">
        <div className="border absolute top-0 overflow-hidden w-full left-0 z-50 border-solid !border-greenMain rounded-xl min-h-16">
          <NavLink
            label=""
            component="button"
            className="min-h-16 rounded-xl bg-white hover:bg-white"
            classNames={{
              body: "bg-red",
              children: "p-0 pb-4 mdl:pb-10 bg-white",
            }}
          >
            <div className="-mt-16">
              <div className="mb-4">
                <TextInput
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="ابحث عن خدمة..."
                  className=" p-2 w-full rounded-lg mb-4 max-w-[calc(100%-100px)] "
                  classNames={{
                    input:'!border-none h-12 w-full text-sm mdl:text-xl font-Bold'
                  }}
                />
              </div>
              {filteredOptions.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex bg-white items-center px-8 justify-between gap-6 pb-3 mdl:pb-4 border-b-2 border-grayLight last-of-type:border-none"
                  >
                    <h4 className=" text-sm mdl:text-xl font-Bold">
                      {item.label}
                    </h4>
                    <button
                      onClick={() => {
                        handleAddToList(item.label);
                      }}
                      className={` w-[30px] h-[30px] text-white rounded-full`}
                    >
                      <PlusInsideCircleIcon
                        className={" w-full h-full rounded-full"}
                      />
                    </button>
                  </div>
                );
              })}
              <div className="flex bg-white items-center px-8 justify-between gap-6 pb-3 mdl:pb-4 border-b-2 border-grayLight last-of-type:border-none">
                <h4 className="text-sm mdl:text-xl font-Bold">اخرى</h4>
                <button
                  onClick={() => {
                    setOpenOther(true);
                  }}
                  className={` w-[30px] h-[30px] text-white rounded-full`}
                >
                  <PlusInsideCircleIcon
                    className={" w-full h-full rounded-full"}
                  />
                </button>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Sortable list */}
      {list.length > 0 && (
        <p className="text-sm mdl:tet-xl mb-3 text-grayDark font-Regular">
          يمكنك السحب والإفلات للأقسام لإعادة ترتيبها،{" "}
        </p>
      )}
      <ReactSortable
        list={list}
        setList={setList}
        animation={200}
        delayOnTouchStart={false}
        delay={2}
        className="flex flex-col gap-2 mdl:max-w-[80%]"
      >
        {list.map(({ id, text }, index) => (
          <li
            key={id}
            className="flex items-center relative justify-between mb-2 gap-4"
          >
            <span className=" flex items-center justify-center size-5 mdl:size-6 text-xs mdl:text-base  aspect-square bg-black text-white font-bold  rounded-full z-10 px-1  absolute top-1/2 start-5 -translate-y-1/2">
              {index + 1}
            </span>

            <TextInput
              value={text}
              onChange={(e) => {
                const updatedList = [...list];
                updatedList[index].text = e.target.value;
                setList(updatedList);
              }}
              className="w-full "
              classNames={{
                input: `border  font-Bold text-sm mdl:text-xl border-greenMain ps-12 rounded-xl h-11 mdl:h-14 px-3 py-2 w-full`,
              }}
            />
            <div
              className={` w-[42px] mdl:w-[50px] h-[42px] mdl:h-[50px] flex items-center justify-center`}
            >
              <button
                onClick={() => handleDeleteItem(id)}
                className=" border-red border size-7 mdl:size-9 rounded-md flex items-center justify-center text-white"
              >
                <DeleteIcon />
              </button>
            </div>
          </li>
        ))}
      </ReactSortable>
      {OpenOther && (
        <div className="flex relative items-center gap-4 mb-2 mdl:max-w-[80%]">
          <span className=" flex items-center justify-center size-5 mdl:size-6 text-xs mdl:text-base  aspect-square bg-black text-white font-bold  rounded-full z-10 px-1  absolute top-1/2 start-5 -translate-y-1/2">
            {list.length + 1}
          </span>
          <TextInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder="اكتب هنا .."
            radius="md"
            className="w-full"
            classNames={{
              input: `border border-greenMain rounded-xl h-14 ps-12 px-3 py-2 w-full`,
            }}
          />
          <button
            onClick={handleAddToListFromInput}
            disabled={!inputValue.trim()}
            className={` w-[42px] mdl:w-[50px] h-[42px] mdl:h-[50px] text-white rounded-full`}
          >
            <PlusInsideCircleIcon className={" w-full h-full rounded-full"} />
          </button>
        </div>
      )}
    </Card>
  );
}

export default ContentSpectra;
