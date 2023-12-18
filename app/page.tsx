import Image from "next/image";
import Navbar from "./ui/navbar";
import Input from "./ui/input";
import Footer from "./ui/step-btns";
import Card from "./ui/card";
import StepButtons from "./ui/step-btns";

export default function Home() {
  return (
    <div className="md:w-full relative">
      <Card
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      >
        <Input
          id="name"
          placeholder="e.g. Stephen King"
          type="text"
          label="Name"
        />

        <Input
          id="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
        />

        <Input
          id="phone-number"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="number"
        />
      </Card>
      <StepButtons />
    </div>
  );
}
