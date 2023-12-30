import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // children: React.ReactNode;
  label: string;
  isFieldEmpty: boolean;
  isEmailValid?: boolean;
}

const Input = ({
  children,
  id,
  label,
  isFieldEmpty,
  isEmailValid,
  ...rest
}: InputProps) => {
  function EmptyOrValid(empty: boolean, required?: boolean) {
    if (empty) {
      return (
        <p className="text-red-500 text-sm italic font-light">
          This field is required
        </p>
      );
    }
    if (required) {
      return (
        <p className="text-red-500 text-sm italic font-light">
          Incorrect format
        </p>
      );
    }
  }

  return (
    <div className="flex flex-col mb-5">
      <div className="flex justify-between mb-1">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        {EmptyOrValid(isFieldEmpty, isEmailValid)}
        {/* {isFieldEmpty && (
          <p className="text-red-500 text-sm italic font-light">{`This field is required`}</p>
        )}
        {isEmailValid && <p>Write correct email format</p>} */}
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
