import Card from "@/app/ui/card";
import Image from "next/image";
import React from "react";

type Props = {};

const Thanks = (props: Props) => {
  return (
    <div className="w-full">
      <Card>
        <div className="p-2 flex flex-col justify-center items-center">
          <Image
            className="mb-4"
            src={"icon-thank-you.svg"}
            alt="thanks"
            height={80}
            width={80}
          />
          <h1 className="font-bold text-xl mb-2">Thank you!</h1>
          <p className="text-center text-gray-400">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Thanks;
