import { useAppSelector } from "@/app/redux/hooks";
import { Addon } from "@/app/types/types";
import React from "react";

type Props = {
  addon: Addon;
};

const AddonSum = ({ addon }: Props) => {
  const isMonthly = useAppSelector((state) => state.app.isMonthly);
  return (
    <div className="flex justify-between pt-4">
      <p>{addon?.title}</p>
      <p className="text-black">
        +{isMonthly ? `${addon.price.yearly}/yr` : `${addon.price.monthly}/mo`}
      </p>
    </div>
  );
};

export default AddonSum;
