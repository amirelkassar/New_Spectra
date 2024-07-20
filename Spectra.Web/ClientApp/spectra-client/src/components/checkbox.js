import clsx from "clsx";
import CorrectICon from "@/assets/icons/correct";

export default function Checkbox({ checked, onChange, id, className }) {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className={clsx(
          "flex items-center justify-center h-[18px] w-5 cursor-pointer bg-grayAlter peer-checked:bg-greenMain transition text-grayAlter peer-checked:text-white rounded-sm ",
          className
        )}
      >
        <CorrectICon />
      </label>
    </>
  );
}
