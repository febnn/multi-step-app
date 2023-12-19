"use client";

import Card from "@/app/ui/card";
import SelectCard from "@/app/ui/select/select-card";
import Switcher from "@/app/ui/select/switcher";
import StepButtons from "@/app/ui/step-btns";
import React, { useState } from "react";

type Props = {};

const selectOptions = [
  {
    image: "icon-arcade.svg",
    title: "Arcade",
    price: { monthly: "$9/mo", yearly: "$90/yr" },
  },
  {
    image: "icon-advanced.svg",
    title: "Advanced",
    price: { monthly: "$12/mo", yearly: "$120/yr" },
  },
  {
    image: "icon-arcade.svg",
    title: "Pro",
    price: { monthly: "$15/mo", yearly: "$150/yr" },
  },
];

const Select = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <div className="w-full">
      <Card
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      >
        <div className="flex flex-col md:flex-row md:justify-between">
          {selectOptions.map((option) => {
            const { image, price, title } = option;
            return (
              <SelectCard
                image={image}
                price={toggle ? price.yearly : price.monthly}
                title={title}
                key={title}
                discount={toggle}
              />
            );
          })}
        </div>
        <div className="mt-8">
          <Switcher checked={toggle} handleToggle={handleToggle} />
        </div>
      </Card>
      <StepButtons />
    </div>
  );
};

export default Select;
