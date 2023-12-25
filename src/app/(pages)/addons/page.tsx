"use client";

import { addDeleteAddon } from "@/app/redux/appSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { Addon } from "@/app/types/types";
import SelectAddon from "@/app/ui/addons/select-addon";
import Card from "@/app/ui/card";
import StepButtons from "@/app/ui/step-btns";

type Props = {};

const addons: Addon[] = [
  {
    id: "online",
    title: "Online service",
    description: "Access to multiplayer games",
    price: { monthly: 1, yearly: 10 },
  },
  {
    id: "storage",
    title: "Larger storage",
    description: "Extra 1TB of clound save",
    price: { monthly: 2, yearly: 20 },
  },
  {
    id: "customizable",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: { monthly: 2, yearly: 20 },
  },
];

const AddOns = (props: Props) => {
  const dispatch = useAppDispatch();
  const onSelect = (e: Addon) => {
    dispatch(addDeleteAddon(e));
  };

  return (
    <div className="w-full">
      <Card
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      >
        <div>
          {addons.map((addon: Addon) => {
            return (
              <SelectAddon
                addon={addon}
                key={addon.id}
                onClick={() => onSelect(addon)}
              />
            );
          })}
        </div>
      </Card>
      <StepButtons />
    </div>
  );
};

export default AddOns;
