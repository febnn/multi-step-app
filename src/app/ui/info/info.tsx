"use client";

import { changeEmail, changeName, changeNumber } from "@/app/redux/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Card from "../card";
import Input from "../input";
import StepButtons from "../step-btns";

const Info = () => {
  const router = useRouter();
  const nameState = useAppSelector((state) => state.app.name);
  const emailState = useAppSelector((state) => state.app.email);
  const phoneNumberState = useAppSelector((state) => state.app.phoneNumber);
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isNumberEmpty, setIsNumberEmpty] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
    setName(e.target.value);
  };

  function isValidEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
    dispatch(changeEmail(email));
  };

  const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeNumber(e.target.value));
    setphoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (!nameState.trim()) {
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }
    if (!emailState.trim()) {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }
    if (!phoneNumberState.trim()) {
      setIsNumberEmpty(true);
    } else {
      setIsNumberEmpty(false);
    }

    if (
      nameState.trim() &&
      isValidEmail(emailState) &&
      emailState.trim() &&
      phoneNumberState.trim()
    ) {
      router.push("/select");
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="w-full">
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
          defaultValue={name || nameState}
          onChange={onChangeName}
          isFieldEmpty={isNameEmpty}
          required
        />
        <Input
          id="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          name="email"
          defaultValue={email || emailState}
          onChange={onChangeEmail}
          isFieldEmpty={isEmailEmpty}
          isEmailValid={isValid}
          required
        />

        <Input
          id="phone-number"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="number"
          name="number"
          defaultValue={phoneNumber || phoneNumberState}
          onChange={onChangeNumber}
          isFieldEmpty={isNumberEmpty}
          required
        />
      </Card>
      <StepButtons link="/select" onSubmit={handleSubmit} />
    </div>
  );
};

export default Info;
