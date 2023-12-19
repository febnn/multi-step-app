import React from "react";

type Props = {
  checked: boolean;
  handleToggle: any;
};

const Switcher = (props: Props) => {
  const { checked, handleToggle } = props;

  return (
    <div className="flex justify-around bg-gray-100 p-3 rounded-lg">
      <div className={`${!checked ? "text-black" : "text-gray-500"}`}>
        Montly
      </div>
      <label
        htmlFor="Toggle1"
        className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
      >
        <span className="relative">
          <input
            onClick={handleToggle}
            defaultChecked={checked}
            id="Toggle1"
            type="checkbox"
            className="hidden peer"
          />
          <div className="w-10 h-[21px] rounded-full shadow-inner dark:bg-blue-950 peer-checked:dark:bg-blue-950"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-[2.5px] rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-white"></div>
        </span>
      </label>
      <div className={`${checked ? "text-black" : "text-gray-500"}`}>
        Yearly
      </div>
    </div>
  );
};

export default Switcher;
