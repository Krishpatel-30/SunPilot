"use client";

import { useState } from "react";

import {
  generateSolarLayout,
  SolarAnalysis,
} from "@/lib/solar-api";

import { Button } from "@/components/ui/button";

interface Props {
  projectId: number;
}

export default function AIAnalysisCard({
  projectId,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] =
    useState<SolarAnalysis | null>(null);

  async function handleAnalyze() {
    try {
      setLoading(true);

      const result =
        await generateSolarLayout(projectId);

      setAnalysis(result);

    } catch (error) {
      console.error(error);

      alert("Failed to analyze roof.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            🤖 AI Solar Analysis
          </h2>

          <p className="text-slate-500">
            Generate an engineering report for this project.
          </p>
        </div>

        <Button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-amber-500 hover:bg-amber-600"
        >
          {loading
            ? "Analyzing..."
            : "Analyze Roof"}
        </Button>

      </div>

      {analysis && (

        <div className="mt-8 grid grid-cols-2 gap-6">

          <div className="rounded-lg border p-4">
            <p className="text-sm text-slate-500">
              Panel Count
            </p>

            <h3 className="text-2xl font-bold">
              {analysis.panel_count}
            </h3>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-slate-500">
              Panel Power
            </p>

            <h3 className="text-2xl font-bold">
              {analysis.panel_power} W
            </h3>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-slate-500">
              System Size
            </p>

            <h3 className="text-2xl font-bold">
              {analysis.system_size_kw} kW
            </h3>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-slate-500">
              Daily Energy
            </p>

            <h3 className="text-2xl font-bold">
              {analysis.daily_energy} kWh
            </h3>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-slate-500">
              Annual Energy
            </p>

            <h3 className="text-2xl font-bold">
              {analysis.annual_energy} kWh
            </h3>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-slate-500">
              Annual Savings
            </p>

            <h3 className="text-2xl font-bold text-green-600">
              ₹{analysis.annual_savings.toLocaleString()}
            </h3>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-slate-500">
              Payback
            </p>

            <h3 className="text-2xl font-bold">
              {analysis.payback_years} Years
            </h3>
          </div>

        </div>

      )}

    </div>
  );
}