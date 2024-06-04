import clsx from "clsx";

export default function Input({
  label,
  type,
  id,
  placeholder,
  value,
  setValue,
  containerClassName,
  labelClassName,
  inputClassName,
  readOnly,
  min,
  minLength,
  error,
  setError,
}) {
  return (
    <div className={clsx("flex flex-col gap-1", containerClassName)}>
      <label htmlFor={id ? id : label} className={clsx(labelClassName)}>
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={id ? id : label}
        className={clsx(
          "h-14 ps-8 pe-3 rounded-xl border border-greenMain ring-1 ring-transparent focus:ring-greenMain outline-none transition-all",
          inputClassName,
          error && "ring-2 ring-red"
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          error && setError(null);
        }}
        readOnly={readOnly}
        min={min}
        minLength={minLength}
      />
      {error && <p className="text-red whitespace-pre-line">{error}</p>}
    </div>
  );
}
