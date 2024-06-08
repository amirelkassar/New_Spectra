import ArrowDownIcon from "@/assets/icons/arrow-down";
import CheckIcon from "@/assets/icons/check";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Label,
  Transition,
} from "@headlessui/react";
import clsx from "clsx";

const SelectBox = ({
  options,
  selectedOption,
  setSelectedOption,
  handleOnChange,
  containerClassName,
  label,
  placeholder,
  isObject = false,
  displayedKey,
  isOptional = false,
  ...rest
}) => {
  const key = (option) => (isObject ? option.id : option);
  const displayedValue = (option) => (isObject ? option[displayedKey] : option);
  const buttonText = (selectedOption) =>
    isObject ? selectedOption[displayedKey] : selectedOption;

  return (
    <Listbox
      as={"div"}
      className={clsx("relative", containerClassName)}
      value={selectedOption}
      onChange={handleOnChange ? handleOnChange : setSelectedOption}
      {...rest}
    >
      {({ open }) => (
        <>
          <div className="space-y-2 relative">
            {isOptional && (
              <div className="absolute end-0 top-2 text-xs text-grayDark">
                اختياري
              </div>
            )}
            <Label>{label}</Label>
            <ListboxButton
              className={clsx(
                "default-field relative z-0 w-full transition flex items-center justify-between gap-3",
                open && " !ring-greenMain "
              )}
            >
              <span className="grow text-start">
                {buttonText(selectedOption) || (
                  <span className="text-grayDark">{placeholder}</span>
                )}
              </span>
              <span
                className={clsx(
                  "transition ",
                  open ? "-rotate-180 " : "rotate-0 "
                )}
              >
                <ArrowDownIcon />
              </span>
            </ListboxButton>
          </div>
          <Transition>
            <ListboxOptions
              autoFocus={true}
              as={"ul"}
              className={
                "text-black  absolute z-10 w-full px-0 space-y-1  max-h-[200px] overflow-auto bg-white mt-2 p-1 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none "
              }
            >
              {options.map((option) => (
                <ListboxOption
                  as={"li"}
                  key={key(option)}
                  value={option}
                  className={clsx(
                    "hover:bg-gray cursor-pointer group px-3 py-1 transition flex items-center justify-between",
                    option === selectedOption && "bg-gray"
                  )}
                >
                  {displayedValue(option)}
                  <div className="flex items-center justify-center bg-greenMain size-4 opacity-0 group-data-[selected]:opacity-100 transition rounded-sm">
                    <CheckIcon width={"12"} height={"12"} />
                  </div>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

export default SelectBox;
