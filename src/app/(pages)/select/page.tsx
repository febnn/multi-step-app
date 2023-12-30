"use client";

import { changeMonthly, choosePlan } from "@/app/redux/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { Option } from "@/app/types/types";
import Card from "@/app/ui/card";
import SelectCard from "@/app/ui/select/select-card";
import Switcher from "@/app/ui/select/switcher";
import StepButtons from "@/app/ui/step-btns";
import clsx from "clsx";
import { useRouter } from "next/navigation";

type Props = {};

const Select = (props: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const plan = useAppSelector((state) => state.app.plan);
  const isMonthly = useAppSelector((state) => state.app.isMonthly);
  const handleOptionClick = (option: Option) => {
    dispatch(choosePlan(option));
  };

  const selectOptions: Option[] = [
    {
      image: "icon-arcade.svg",
      title: "Arcade",
      price: { monthly: 9, yearly: 90 },
    },
    {
      image: "icon-advanced.svg",
      title: "Advanced",
      price: { monthly: 12, yearly: 120 },
    },
    {
      image: "icon-arcade.svg",
      title: "Pro",
      price: { monthly: 15, yearly: 150 },
    },
  ];

  const onNext = () => {
    router.push("/addons");
  };

  const handleToggle = () => dispatch(changeMonthly(!isMonthly));
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
              <div
                key={title}
                onClick={() => handleOptionClick(option)}
                className={clsx(
                  "border flex p-3 rounded-lg hover:border-blue-900 hover:bg-blue-50 mb-3 md:flex-col md:min-w-[115px] cursor-pointer",
                  {
                    "bg-blue-50 border-blue-900": plan.title === title,
                  }
                )}
              >
                <SelectCard
                  image={image}
                  price={isMonthly ? price.yearly : price.monthly}
                  title={title}
                  discount={isMonthly}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Switcher checked={isMonthly} handleToggle={handleToggle} />
        </div>
      </Card>
      <StepButtons link="/" onSubmit={onNext} />
    </div>
  );
};

export default Select;
