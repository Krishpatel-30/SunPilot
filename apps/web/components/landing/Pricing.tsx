import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "Perfect for individual solar installers.",
    features: [
      "10 Projects / Month",
      "AI Proposal Generator",
      "ROI Calculator",
      "Customer Management",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "₹4,999",
    period: "/month",
    description: "Best for growing solar businesses.",
    features: [
      "Unlimited Projects",
      "AI Roof Analysis",
      "Proposal Branding",
      "Team Collaboration",
      "Priority Support",
      "Advanced Analytics",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large EPC companies and enterprises.",
    features: [
      "Unlimited Users",
      "Dedicated Account Manager",
      "API Access",
      "Custom Integrations",
      "Onboarding & Training",
      "24/7 Premium Support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Badge className="bg-amber-500 text-white">
            Pricing
          </Badge>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Simple Pricing for Every Team
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose the plan that fits your business today and upgrade anytime as
            your company grows.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-2 border-amber-500 shadow-xl"
                  : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-amber-500 px-4 py-1 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>

                <div className="mt-6">
                  <span className="text-5xl font-bold">
                    {plan.price}
                  </span>

                  <span className="text-slate-500">
                    {plan.period}
                  </span>
                </div>

                <p className="mt-4 text-slate-600">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-10 w-full ${
                    plan.featured
                      ? "bg-amber-500 hover:bg-amber-600"
                      : ""
                  }`}
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.name === "Enterprise"
                    ? "Contact Sales"
                    : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}