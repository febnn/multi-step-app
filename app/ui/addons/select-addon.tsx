"use client";

import React, { useState } from "react";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  price: string;
};

const SelectAddon = (props: Props) => {
  const { title, description, price } = props;
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <div
      className="flex border border-gray-300 rounded-md 
        p-3 items-center hover:border-blue-700 hover:bg-blue-50 
        relative mb-4 cursor-pointer"
      onClick={handleToggle}
    >
      <input
        className="h-4 w-4 ml-1 hover:border-blue-700"
        type="checkbox"
        checked={toggle}
      />
      <div className="ml-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="absolute right-3 text-sm text-blue-700">{price}</div>
    </div>
  );
};

export default SelectAddon;
