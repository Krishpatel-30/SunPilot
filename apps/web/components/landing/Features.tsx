import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  FileText,
  ChartColumn,
  Zap,
  Cloud,
  Users,
} from "lucide-react";

const features = [
  {
    title: "AI Solar Design",
    description:
      "Upload roof images and let AI recommend the ideal solar system.",
    icon: Bot,
  },
  {
    title: "Proposal Generator",
    description:
      "Create beautiful customer-ready proposal PDFs in seconds.",
    icon: FileText,
  },
  {
    title: "ROI Calculator",
    description:
      "Instantly calculate savings, payback period and return on investment.",
    icon: ChartColumn,
  },
  {
    title: "Energy Estimation",
    description:
      "Estimate monthly and yearly energy generation accurately.",
    icon: Zap,
  },
  {
    title: "Cloud Platform",
    description:
      "Access your projects anytime from anywhere.",
    icon: Cloud,
  },
  {
    title: "Team Collaboration",
    description:
      "Manage customers, sales and projects with your team.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Powerful Features
          </h2>

          <p className="mt-4 text-slate-600">
            Everything a modern solar installer needs in one platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <feature.icon className="mb-4 h-10 w-10 text-amber-500" />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}