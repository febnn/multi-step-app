import React from "react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const Card = ({ children, title, description }: Props) => {
  return (
    <main
      className="flex flex-col space-y-4 
      w-96 z-10 mt-[-50px] mx-auto bg-white 
      rounded-lg p-8 md:mt-0 md:mx-0 md:max-h-[568px]
      md:w-full relative"
    >
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-gray-400">{description}</p>
      <div>{children}</div>
    </main>
  );
};

export default Card;
