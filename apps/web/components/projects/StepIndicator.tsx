interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  "Project",
  "Customer",
  "Roof Upload",
  "AI Analysis",
  "Proposal",
];

export default function StepIndicator({
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((step, index) => {
        const active = index + 1 <= currentStep;

        return (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            <div className="flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition ${
                  active
                    ? "bg-amber-500 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {index + 1}
              </div>

              <p className="mt-2 text-sm">
                {step}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-3 h-1 flex-1 rounded ${
                  active
                    ? "bg-amber-500"
                    : "bg-slate-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}