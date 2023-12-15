import React from "react";

type Props = {
  placeholder: string;
  id: string;
  type: string;
  label: string;
};

const Input = ({ placeholder, id, type, label }: Props) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border p-2 rounded-lg pl-4"
        required
      />
    </div>
  );
};

export default Input;
