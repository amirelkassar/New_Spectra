export default function LevelDisplay({ score }) {
  const getLevelView = (score) => {
    if (score >= 0 && score <= 2) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span className={` size-4 min-w-4 rounded-full block bg-red`}></span>
          <p>Severe</p>
        </div>
      );
    } else if (score > 2 && score <= 4) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span
            className={` size-4 min-w-4 rounded-full block bg-purple`}
          ></span>{" "}
          <p>Moderate</p>
        </div>
      );
    } else if (score > 4 && score <= 7) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span
            className={` size-4 min-w-4 rounded-full block bg-black`}
          ></span>
          <p>Mild</p>
        </div>
      );
    } else if (score > 7 && score <= 10) {
      return (
        <div className="flex items-center gap-2 mdl:gap-3 text-xs mdl:text-base font-Regular bg-white shadow-md rounded-xl justify-center px-2 min-h-8">
          <span
            className={` size-4 min-w-4 rounded-full block bg-greenMain`}
          ></span>
          <p>Normal</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return <>{getLevelView(score)}</>;
}
