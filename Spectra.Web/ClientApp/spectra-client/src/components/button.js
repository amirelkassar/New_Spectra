import clsx from "clsx";
import React from "react";

const Button = ({ className, variant = "primary", children, ...rest }) => {
  const baseClasses =
    "flex items-center justify-center gap-5 rounded-xl transition-all py-3 px-7 ";

  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "border border-grayDark hover:border-greenMain ring-1 ring-transparent hover:ring-greenMain";
      break;
    case "secondary":
      variantClasses = "bg-greenMain text-white ";
      break;
    default:
      variantClasses = "";
  }

  return (
    <button
      type="button"
      className={clsx(baseClasses, variantClasses, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
