import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // children: React.ReactNode;
  label: string;
}

const Input = ({ children, id, label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input id={id} {...rest} className="border p-2 rounded-lg pl-4" />
    </div>
  );
};

export default Input;
