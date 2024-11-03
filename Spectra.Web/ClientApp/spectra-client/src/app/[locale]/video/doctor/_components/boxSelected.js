import CloseIcon from "@/assets/icons/close";
import React from "react";

function BoxSelected({ data, handleDelete }) {
  if (data.length > 0) {
    return (
      <div className="flex gap-2 overflow-x-auto mdl:flex-wrap mt-4 pb-5 border-b border-grayDark">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className=" relative bg-blueLight p-1 min-w-[120px] max-w-[122px] w-full h-14 rounded-lg flex items-center justify-center"
            >
              <button
                onClick={() => handleDelete(item)}
                className=" size-4 absolute top-1 start-1"
              >
                <CloseIcon className={"w-full h-auto"} />
              </button>
              <p className="text-xs mdl:text-sm text-center max-w-full truncate">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else null;
}

export default BoxSelected;
