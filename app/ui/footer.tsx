import React from "react";
import Button from "./button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="bottom-0 p-5 w-full z-10 fixed bg-white
      md:absolute md:bottom-5 md:w-2/4 md:right-12 md:px-0
    "
    >
      <div className="flex justify-between">
        <p className="text-gray-400 p-2 hover:text-gray-500 cursor-pointer">
          Go Back
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Footer;
