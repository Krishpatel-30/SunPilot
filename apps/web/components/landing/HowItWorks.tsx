import { Upload, Bot, FileText, CircleCheckBig } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Roof & Bill",
    description:
      "Upload a roof photo and the customer's electricity bill.",
  },
  {
    icon: Bot,
    title: "AI Analysis",
    description:
      "SunPilot analyzes the roof and recommends the best solar system.",
  },
  {
    icon: FileText,
    title: "Generate Proposal",
    description:
      "Create a beautiful proposal with pricing, savings and ROI.",
  },
  {
    icon: CircleCheckBig,
    title: "Close More Deals",
    description:
      "Send the proposal and win customers faster.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How SunPilot Works
          </h2>

          <p className="mt-4 text-slate-600">
            Four simple steps from lead to proposal.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border p-8 text-center shadow-sm transition hover:shadow-lg"
            >
              <step.icon className="mx-auto mb-5 h-10 w-10 text-amber-500" />

              <h3 className="text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}