"use client";

import React from "react";
import AddonSum from "./addon-sum";
import { useAppSelector } from "@/app/redux/hooks";
import Link from "next/link";

type Props = {};

const SummaryCard = (props: Props) => {
  const plan = useAppSelector((state) => state.app.plan);
  const isMonthly = useAppSelector((state) => state.app.isMonthly);
  const totalPlan = isMonthly
    ? useAppSelector((state) => state.app.plan.price.yearly)
    : useAppSelector((state) => state.app.plan.price.monthly);
  const addons = useAppSelector((state) => state.app.addons);

  let totalAddonMonthly;
  let totalAddonYearly;

  if (addons) {
    totalAddonMonthly = addons
      ?.map((addon) => addon.price.monthly)
      ?.reduce((acc, curr) => acc + curr, 0);
    totalAddonYearly = addons
      ?.map((addon) => addon.price.yearly)
      ?.reduce((acc, curr) => acc + curr, 0);
  }

  let totalPrice;

  if (totalAddonMonthly && totalAddonYearly) {
    totalPrice = isMonthly
      ? totalPlan + totalAddonYearly
      : totalPlan + totalAddonMonthly;
  }

  return (
    <div className="flex flex-col text-sm text-gray-400">
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex flex-col">
          <h4 className="font-bold text-black mb-1">
            {plan.title}({isMonthly ? "Yearly" : "Monthly"})
          </h4>
          <div className="flex justify-between border-b-2 pb-2">
            <Link
              className="underline cursor-pointer hover:text-gray-600"
              href={"/select"}
            >
              Change
            </Link>
            <p className="text-black font-semibold">
              ${totalPlan}
              {isMonthly ? "/yr" : "/mo"}
            </p>
          </div>
        </div>
        {addons &&
          addons.map((addon) => {
            return <AddonSum addon={addon} key={addon.id} />;
          })}
        {/* <AddonSum /> */}
      </div>
      <div className="flex justify-between p-4 mt-2">
        <p>Total(per year)</p>
        <p className="text-purple-500 font-semibold">
          ${totalPrice || totalPlan}
          {isMonthly ? "/yr" : "/mo"}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
