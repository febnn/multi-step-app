import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="border p-2 text-white bg-blue-900 rounded-lg hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;
