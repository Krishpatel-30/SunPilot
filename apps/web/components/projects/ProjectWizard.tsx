"use client";

import { useState } from "react";

import StepIndicator from "./StepIndicator";
import ProjectDetailsStep from "./ProjectDetailsStep";
import CustomerDetailsStep from "./CustomerDetailsStep";
import RoofUploadStep from "./RoofUploadStep";
import AIAnalysisStep from "./AIAnalysisStep";
import ProposalStep from "./ProposalStep";


export default function ProjectWizard() {
  const [step, setStep] = useState(1);

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <StepIndicator currentStep={step} />

      {step === 1 && (
        <ProjectDetailsStep
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <CustomerDetailsStep
          back={() => setStep(1)}
          next={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <RoofUploadStep
          back={() => setStep(2)}
          next={() => setStep(4)}
        />
      )}

      {step === 4 && (
  <AIAnalysisStep
    back={() => setStep(3)}
    next={() => setStep(5)}
  />
)}
      

      {step === 5 && (
        <ProposalStep
          back={() => setStep(4)}
        />
      )}
    </div>
  );
}