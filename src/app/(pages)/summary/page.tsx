"use client";

import { userCreated } from "@/app/redux/appSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Card from "@/app/ui/card";
import StepButtons from "@/app/ui/step-btns";
import SummaryCard from "@/app/ui/summary/summary-card";
import { useRouter } from "next/navigation";

type Props = {};

const Summary = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.app.name);
  const email = useAppSelector((state) => state.app.email);
  const phoneNumber = useAppSelector((state) => state.app.phoneNumber);
  const onSummary = () => {
    if (!name.trim() && !email.trim() && !phoneNumber.trim()) {
      router.push("/");
      dispatch(userCreated(false));
    } else {
      router.push("/thanks");
      dispatch(userCreated(true));
    }
  };

  return (
    <div className="w-full">
      <Card
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      >
        <div>
          <SummaryCard />
        </div>
      </Card>
      <StepButtons link="/addons" onSubmit={onSummary} />
    </div>
  );
};

export default Summary;
