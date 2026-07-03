import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Raj Patel",
    role: "Solar Installer",
    company: "Surat, India",
    quote:
      "SunPilot reduced our proposal creation time from 2 hours to just 15 minutes.",
  },
  {
    name: "Sarah Johnson",
    role: "EPC Manager",
    company: "SolarTech Energy",
    quote:
      "The ROI calculations are clear and professional. Our customers understand the value much faster.",
  },
  {
    name: "Ahmed Khan",
    role: "Renewable Energy Consultant",
    company: "Green Future",
    quote:
      "The proposal quality is outstanding. It gives our company a much more professional image.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Trusted by Solar Professionals
          </h2>

          <p className="mt-4 text-slate-600">
            Built to help installers close more deals and save time.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="shadow-sm hover:shadow-xl transition">
              <CardContent className="p-8">
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="italic text-slate-600">
                  "{item.quote}"
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>

                  <p className="text-sm text-amber-500">
                    {item.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}