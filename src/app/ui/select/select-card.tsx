import Image from "next/image";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  price: number;
  discount: boolean;
}

const SelectCard = (props: Props) => {
  const { image, price, title, discount, ...rest } = props;
  return (
    <div className="flex md:flex-col">
      <Image
        className="md:mb-8"
        src={image}
        width={40}
        height={40}
        alt="icon"
      />
      <div className="pl-3 md:pl-0">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm font-thin text-gray-400">
          ${price}
          <span>{discount ? "/yr" : "/mo"}</span>
        </p>
        {discount && <p className="text-xs mt-1">2 months free </p>}
      </div>
    </div>
  );
};

export default SelectCard;
