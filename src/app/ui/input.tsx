import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // children: React.ReactNode;
  label: string;
  isFieldEmpty: boolean;
}

const Input = ({ children, id, label, isFieldEmpty, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col mb-5">
      <div className="flex justify-between">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        {isFieldEmpty && <p>{`${label} is required`}</p>}
      </div>
      <input
        id={id}
        {...rest}
        className={clsx("border p-2 rounded-lg pl-4", {
          "border-red-500": isFieldEmpty,
        })}
      />
    </div>
  );
};

export default Input;
