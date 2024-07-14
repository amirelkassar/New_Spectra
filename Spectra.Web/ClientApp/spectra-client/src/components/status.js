const Statue = ({ statue }) => {
  let bg = "";
  let text = "black";
  switch (statue) {
    case "لم يبدأ بعد":
      bg = "#F5F5F5";
      break;
    case "تتم الان":
      bg = "#E9F7FF";
      break;
    case "تمت":
      bg = "#10B0C1";
      text = "white";
      break;
  }
  return (
    <div
      style={{ backgroundColor: bg, color: text }}
      className="w-[96px] md:w-[136px] h-9 rounded-xl text-[12px] md:text-[16px] flex items-center justify-center"
    >
      {statue}
    </div>
  );
};

export default Statue;
