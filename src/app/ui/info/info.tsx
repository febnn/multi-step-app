"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Card from "../card";
import Input from "../input";
import StepButtons from "../step-btns";
import {
  changeEmail,
  changeName,
  changeNumber,
  userCreated,
} from "@/app/redux/appSlice";
import { redirect, useRouter } from "next/navigation";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const Info = () => {
  const router = useRouter();
  const name = useAppSelector((state) => state.app.name);
  const email = useAppSelector((state) => state.app.email);
  const phoneNumber = useAppSelector((state) => state.app.phoneNumber);
  const isUserCreated = useAppSelector((state) => state.app.userCreated);
  const dispatch = useAppDispatch();

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isNumberEmpty, setIsNumberEmpty] = useState(false);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(e.target.value));
  };

  const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeNumber(e.target.value));
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }
    if (!email.trim()) {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }
    if (!phoneNumber.trim()) {
      setIsNumberEmpty(true);
    } else {
      setIsNumberEmpty(false);
    }

    if (name.trim() && email.trim() && phoneNumber.trim()) {
      dispatch(userCreated(true));
      router.push("/select");
    }
  };

  return (
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
          defaultValue={name}
          onChange={onChangeName}
          isFieldEmpty={isNameEmpty}
        />

        <Input
          id="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          name="email"
          defaultValue={email}
          onChange={onChangeEmail}
          isFieldEmpty={isEmailEmpty}
        />

        <Input
          id="phone-number"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          type="number"
          name="number"
          defaultValue={phoneNumber}
          onChange={onChangeNumber}
          isFieldEmpty={isNumberEmpty}
        />
      </Card>
      <StepButtons onSubmit={handleSubmit} />
    </div>
  );
};

export default Info;
