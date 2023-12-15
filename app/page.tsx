import Image from "next/image";
import Navbar from "./ui/navbar";
import Input from "./ui/input";
import Footer from "./ui/footer";
import Card from "./ui/card";

export default function Home() {
  return (
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
  );
}
