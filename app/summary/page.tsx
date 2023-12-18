import Card from "@/ui/card";
import StepButtons from "@/ui/step-btns";
import SummaryCard from "@/ui/summary/summary-card";
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
