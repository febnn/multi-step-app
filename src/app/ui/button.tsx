import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  pathname: string;
}

const Button = ({ children, className, pathname, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        "border px-3 py-2 text-white bg-blue-900 rounded-lg hover:bg-blue-600",
        {
          "bg-blue-600": pathname === "/summary",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
