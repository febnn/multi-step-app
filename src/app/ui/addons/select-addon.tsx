"use client";

import { useAppSelector } from "@/app/redux/hooks";
import { Addon } from "@/app/types/types";
import clsx from "clsx";

interface SelectAddon extends React.HTMLAttributes<HTMLDivElement> {
  addon: Addon;
}

const SelectAddon: React.FC<SelectAddon> = ({ addon, onClick }) => {
  const stateAddon = useAppSelector((state) => state.app.addons);
  const isMonthly = useAppSelector((state) => state.app.isMonthly);

  const addons = stateAddon?.map((addon) => addon.id);
  const { title, price, description, id } = addon;

  const isIsState = addons?.includes(id);

  return (
    <div
      className={clsx(
        "flex border border-gray-300 rounded-md p-3 items-center hover:border-blue-700 hover:bg-blue-50 relative mb-4 cursor-pointer",
        {
          "border-blue-700 bg-blue-50": isIsState,
        }
      )}
      onClick={onClick}
    >
      <input
        className="h-4 w-4 ml-1 hover:border-blue-700"
        type="checkbox"
        //@ts-ignore
        onChange={onClick}
        checked={isIsState ? true : false}
      />
      <div className="ml-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="absolute right-3 text-sm text-blue-700">
        +${isMonthly ? `${price?.yearly}/yr` : `${price.monthly}/mo`}
        <span></span>
      </div>
    </div>
  );
};

export default SelectAddon;
