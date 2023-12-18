import SelectAddon from "@/ui/addons/select-addon";
import Card from "@/ui/card";
import StepButtons from "@/ui/step-btns";
import React from "react";

type Props = {};

const addons = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: { montly: "+1/mo", yearly: "+10/yr" },
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of clound save",
    price: { montly: "+2/mo", yearly: "+20/yr" },
  },
  {
    title: "Cutomizable profile",
    description: "Custom theme on your profile",
    price: { montly: "+2/mo", yearly: "+20/yr" },
  },
];

const AddOns = (props: Props) => {
  return (
    <div className="w-full">
      <Card
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      >
        <div>
          {addons.map((addon) => {
            const { title, price, description } = addon;
            return (
              <SelectAddon
                title={title}
                description={description}
                price={price.montly}
                key={title}
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
