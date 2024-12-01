import DeleteIcon from "@/assets/icons/delete";
import PlusInsideCircleIcon from "@/assets/icons/plus-inside-circle";
import Button from "@/components/button";
import Card from "@/components/card";
import { TextInput } from "@mantine/core";
import React, { useState } from "react";

function GoalPackages({ inputValue, setInputValue, list, setList }) {
  // Handle adding a new item to the list
  const handleAddToList = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue(""); // Clear the input field after adding
    }
  };

  // Handle input change for the main input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle deleting an item from the list
  const handleDeleteItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  // Handle editing an item directly in the input
  const handleEditItem = (index, value) => {
    const updatedList = list.map((item, i) => (i === index ? value : item));
    setList(updatedList);
  };

  return (
    <Card className={"mdl:px-8 mdl:!pt-8 mdl:!pb-12"}>
      <h3 className=" mb-3 mdl:mb-7 text-xs mdl:text-base">الهدف من الباقة</h3>
      <ul className="mt-5 mdl:max-w-[80%]">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex items-center  relative justify-between mb-2 gap-4"
          >
            <TextInput
              value={item}
              onChange={(e) => handleEditItem(index, e.target.value)}
              className="w-full "
              placeholder="Edit the text"
              classNames={{
                input: `border font-Bold text-sm mdl:text-xl border-greenMain ps-10 mdl:ps-12 rounded-xl h-14 px-3 py-2 w-full`,
              }}
            />
            <span className=" block size-2 rounded-full bg-black absolute top-1/2 start-4 mdl:start-5 -translate-y-1/2"></span>

            <div
              className={`  w-[42px] mdl:w-[50px] h-[42px] mdl:h-[50px] flex items-center justify-center`}
            >
              <button
                onClick={() => handleDeleteItem(index)}
                className=" border-red border size-7 mdl:size-9 rounded-md p-1 flex items-center justify-center text-white"
              >
                <DeleteIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Input for adding new text */}
      <div className="flex items-center gap-4 mb-2 mdl:max-w-[80%]">
        <TextInput
          classNames={{
            input: `border border-greenMain rounded-xl h-14 px-3 py-2 w-full`,
          }}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="ادخل نقطة جديدة"
          radius="md"
          className="w-full"
        />

        {/* Add Button */}
        <button
          onClick={handleAddToList}
          disabled={!inputValue.trim()}
          className={`  w-[42px] mdl:w-[50px] h-[42px] mdl:h-[50px] ${!inputValue && " opacity-75"} 
           text-white rounded-full`}
        >
          <PlusInsideCircleIcon className={" w-full h-full rounded-full"} />
        </button>
      </div>
    </Card>
  );
}

export default GoalPackages;
