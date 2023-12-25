import Card from "@/app/ui/card";
import StepButtons from "@/app/ui/step-btns";
import SummaryCard from "@/app/ui/summary/summary-card";
import React from "react";

type Props = {};

const Summary = (props: Props) => {
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
      <StepButtons />
    </div>
  );
};

export default Summary;