import React from "react";
import AddonSum from "./addon-sum";

type Props = {};

const SummaryCard = (props: Props) => {
  return (
    <div className="flex flex-col text-sm text-gray-400">
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex flex-col">
          <h4 className="font-bold text-black mb-1">Arcade(Monthly)</h4>
          <div className="flex justify-between border-b-2 pb-2">
            <p className="underline cursor-pointer">Change</p>
            <p className="text-black font-semibold">$90/yr</p>
          </div>
        </div>
        <AddonSum />
        <AddonSum />
      </div>
      <div className="flex justify-between p-4 mt-2">
        <p>Total(per year)</p>
        <p className="text-purple-500 font-semibold">$120/yr</p>
      </div>
    </div>
  );
};

export default SummaryCard;
