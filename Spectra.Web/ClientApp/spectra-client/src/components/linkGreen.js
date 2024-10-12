import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import React from "react";

function LinkGreen({ href = "#", className = "", children, ...rest }) {
  const baseClasses =
    "flex items-center bg-greenMain text-white rounded-xl py-3 font-Bold disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none justify-center gap-5 transition-all px-7";
  return (
    <Link
      href={href}
      className={cn(
        baseClasses,
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default LinkGreen;
