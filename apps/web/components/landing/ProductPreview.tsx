import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Zap,
  IndianRupee,
  FileText,
} from "lucide-react";

export default function ProductPreview() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <Badge className="bg-amber-500 text-white">
            Product Preview
          </Badge>

          <h2 className="mt-6 text-4xl font-bold">
            Everything You Need
            <span className="block text-amber-500">
              In One Dashboard
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Manage customers, generate proposals and estimate
            solar savings from one beautiful interface.
          </p>
        </div>

        <div className="mt-16 rounded-3xl bg-white p-10 shadow-2xl">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-bold">
                Customer Project
              </h3>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" />
                  Roof Analysis Complete
                </div>

                <div className="flex items-center gap-3">
                  <Zap className="text-amber-500" />
                  Recommended System: 6.5 kW
                </div>

                <div className="flex items-center gap-3">
                  <IndianRupee className="text-blue-500" />
                  Annual Savings: ₹82,000
                </div>

                <div className="flex items-center gap-3">
                  <FileText className="text-purple-500" />
                  Proposal Ready
                </div>

              </div>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-8">

              <h4 className="font-semibold">
                Proposal Summary
              </h4>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span>System Size</span>
                  <span>6.5 kW</span>
                </div>

                <div className="flex justify-between">
                  <span>Payback</span>
                  <span>4.3 Years</span>
                </div>

                <div className="flex justify-between">
                  <span>ROI</span>
                  <span>28%</span>
                </div>

                <div className="flex justify-between">
                  <span>CO₂ Saved</span>
                  <span>7 Tons/year</span>
                </div>

              </div>

              <Button className="mt-8 w-full bg-amber-500 hover:bg-amber-600">
                Generate Proposal
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}