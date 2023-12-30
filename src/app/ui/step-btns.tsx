"use client";

import React from "react";
import Button from "./button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  onSubmit?: () => void;
  link: string;
};

const StepButtons = ({ onSubmit, link }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className="bottom-0 p-4 w-full z-10 fixed bg-white
      md:absolute md:bottom-5 md:w-2/4 md:right-12 md:px-0
    "
    >
      <div className="flex justify-between">
        <Link
          href={link}
          className={clsx(
            "text-gray-400 p-2 hover:text-gray-500 cursor-pointer",
            {
              "invisible ": pathname === "/",
            }
          )}
        >
          Go Back
        </Link>
        <Button onClick={onSubmit} pathname={pathname}>
          {pathname === "/summary" ? "Confirm" : "Next Step"}
        </Button>
      </div>
    </div>
  );
};

export default StepButtons;
