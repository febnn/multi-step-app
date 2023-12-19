"use client";

import Card from "../card";
import Input from "../input";
import StepButtons from "../step-btns";

const Info = () => {
  return (
    <form action="">
      <div>
        <Card
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        >
          <Input
            id="name"
            placeholder="e.g. Stephen King"
            type="text"
            label="Name"
            name="name"
          />

          <Input
            id="email"
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            name="email"
          />

          <Input
            id="phone-number"
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            type="number"
            name="number"
          />
        </Card>
        <StepButtons />
      </div>
    </form>
  );
};

export default Info;
