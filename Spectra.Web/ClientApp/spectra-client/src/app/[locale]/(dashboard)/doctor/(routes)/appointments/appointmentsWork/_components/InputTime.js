import React from "react";

function InputTime({ setTime, time, title = "" }) {
  const handleHoursChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 24) value = 24;
    if (value < 0) value = 0;
    setTime({ ...time, hours: value });
  };
  const handleMinutesChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 59) value = 59;
    if (value < 0) value = 0;
    setTime({ ...time, minutes: value });
  };
  return (
    <div className="flex  items-center gap-4 justify-center flex-1">
      <span className="text-grayDark text-xs mdl:text-base font-Regular">
        {title}
      </span>
      <div className="flex items-center gap-4 " dir="ltr">
        <div className="flex items-center gap-4">
          <input
            type="number"
            className=" timeInput size-[60px] px-1 rounded-lg border-2 border-grayLight flex items-center justify-center text-center font-Bold text-2xl mdl:text-[28px] no-arrows"
            min="0"
            max="24"
            value={time.hours}
            onChange={handleHoursChange}
          />
          <span className=" font-Bold text-2xl mdl:text-[28px]">:</span>
          <input
            type="number"
            className="timeInput size-[60px] px-1 rounded-lg border-2 border-grayLight flex items-center justify-center text-center font-Bold text-2xl mdl:text-[28px] no-arrows"
            min="0"
            max="59"
            value={time.minutes}
            onChange={handleMinutesChange}
          />
        </div>
        <div className="w-11 overflow-hidden flex items-center h-[60px] rounded-lg  justify-between border-grayLight border-2 flex-col">
          <p
            onClick={() => {
              setTime({ ...time, period: "AM" });
            }}
            className={`flex-1 py-1 cursor-pointer  duration-200 hover:bg-greenMain/10 w-full font-Bold text-xs text-center place-content-center  ${
              time.period === "AM"
                ? " text-greenMain bg-blueLight hover:bg-greenMain"
                : "bg-transparent text-black/60"
            } `}
          >
            AM
          </p>
          <span className="w-full block h-[2px]  bg-grayLight "></span>
          <p
            onClick={() => {
              setTime({ ...time, period: "PM" });
            }}
            className={`flex-1 py-1 cursor-pointer  duration-200 hover:bg-greenMain/10 w-full font-Bold text-xs text-center place-content-center  ${
              time.period === "PM"
                ? " text-greenMain bg-blueLight hover:bg-greenMain"
                : "bg-transparent text-black/60"
            }`}
          >
            PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputTime;
