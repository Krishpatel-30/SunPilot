import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  FileText,
  Sun,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <Badge className="mb-6 bg-amber-100 px-4 py-2 text-amber-700 hover:bg-amber-100">
            ☀ AI Copilot for Solar Installers
          </Badge>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
            Design Solar
            <br />
            Systems
            <span className="block text-amber-500">
              10× Faster
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Upload a roof image, generate AI-powered layouts,
            estimate energy production, calculate ROI,
            and create professional proposal PDFs in minutes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link href="/register">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
              >
                Book Demo
              </Button>
            </Link>

          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                5K+
              </h3>

              <p className="text-sm text-slate-500">
                Proposals Generated
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                98%
              </h3>

              <p className="text-sm text-slate-500">
                Faster Workflow
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                24/7
              </h3>

              <p className="text-sm text-slate-500">
                Cloud Access
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="rounded-3xl border bg-white p-8 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold">
                  SunPilot
                </h2>

                <p className="text-slate-500">
                  Project Dashboard
                </p>
              </div>

              <Sun className="h-10 w-10 text-amber-500" />

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-slate-100 p-5">
                <BarChart3 className="mb-3 h-8 w-8 text-blue-500" />
                <p className="text-sm text-slate-500">System Size</p>
                <h3 className="text-2xl font-bold">6.5 kW</h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <CheckCircle2 className="mb-3 h-8 w-8 text-green-500" />
                <p className="text-sm text-slate-500">Roof Status</p>
                <h3 className="text-2xl font-bold">Ready</h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <FileText className="mb-3 h-8 w-8 text-purple-500" />
                <p className="text-sm text-slate-500">Proposal</p>
                <h3 className="text-2xl font-bold">Generated</h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">
                  Annual Savings
                </p>

                <h3 className="mt-3 text-2xl font-bold text-green-600">
                  ₹82,000
                </h3>
              </div>

            </div>

            <Link href="/register">
              <Button className="mt-8 w-full bg-amber-500 hover:bg-amber-600">
                Generate Proposal
              </Button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}