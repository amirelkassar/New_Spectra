import React from "react";

function StatusComplaints({ title }) {
  let bg = "#F5F5F5";
  let text = "black";
  switch (title) {
    case "تم الحل":
      bg = "#F1FCFF";
      text = "#10B0C1";
      break;
    case "قيد المراجعة":
      bg = "#F5F5F5";
      break;
    case "جاري التحقيق":
      bg = "#F5E4F9";
      text = "#8A22A0";
      break;
    case "مرفوضة":
      bg = "#FFF2F2";
      text = "#FF3D3D";
      break;
    case "مؤجلة":
      bg = "#F5F5F5";
      text = "#939393";
      break;
  }
  return (
    <div
      style={{ backgroundColor: bg, color: text }}
      className="w-[96px] font-Bold min-w-[93px] md:w-[136px] h-8 rounded-xl text-[12px] md:text-[16px] flex items-center justify-center"
    >
      {title}
    </div>
  );
}

export default StatusComplaints;
