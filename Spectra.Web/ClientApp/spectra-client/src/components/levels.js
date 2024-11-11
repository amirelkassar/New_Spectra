import React from "react";
const levelsData = [
  { id: 1, title: "normal :  8-10/10", color: "#10B0C1" },
  { id: 2, title: "mild :  5-8/10", color: "#010036" },
  { id: 3, title: "moderate : 3-5/10", color: "#8A22A0" },
  { id: 4, title: "severe :  0-3/10", color: "#FF3D3D" },
];
function Levels() {
  return (
    <div dir="ltr" className="flex w-fit items-center gap-3 lg:gap-6 flex-wrap my-2 mdl:my-3 mx-auto">
      {levelsData.map((level) => (
        <div
          key={level.id}
          style={{ backgroundColor: level.color }}
          className="w-fit min-h-8 lg:min-h-10   flex items-center justify-center px-2 py-1 rounded-xl"
        >
          <p className="text-xs lg:text-base text-white font-Bold text-center">
            {level.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Levels;
