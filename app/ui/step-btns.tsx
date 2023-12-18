"use client";

import React from "react";
import Button from "./button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {};

const StepButtons = (props: Props) => {
  const pathname = usePathname();
  return (
    <div
      className="bottom-0 p-4 w-full z-10 fixed bg-white
      md:absolute md:bottom-5 md:w-2/4 md:right-12 md:px-0
    "
    >
      <div className="flex justify-between">
        <p
          className={clsx(
            "text-gray-400 p-2 hover:text-gray-500 cursor-pointer",
            {
              invisible: pathname === "/",
            }
          )}
        >
          Go Back
        </p>
        <Button />
      </div>
    </div>
  );
};

export default StepButtons;
