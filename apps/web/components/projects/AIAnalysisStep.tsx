"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Loader2 } from "lucide-react";

interface Props {
  next: () => void;
  back: () => void;
}

export default function AIAnalysisStep({
  next,
  back,
}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold">
        AI Roof Analysis
      </h2>

      <p className="mt-2 text-slate-500">
        SunPilot AI is analyzing the uploaded roof image...
      </p>

      <div className="mt-10 rounded-2xl border p-10 text-center">

        <Bot className="mx-auto h-16 w-16 text-amber-500" />

        <Loader2 className="mx-auto mt-6 h-8 w-8 animate-spin text-amber-500" />

        <h3 className="mt-6 text-xl font-semibold">
          Analyzing...
        </h3>

        <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full bg-amber-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 font-semibold">
          {progress}%
        </p>

      </div>

      <div className="mt-10 flex justify-between">

        <Button variant="outline" onClick={back}>
          ← Back
        </Button>

        <Button
          onClick={next}
          disabled={progress < 100}
          className="bg-amber-500 hover:bg-amber-600"
        >
          Continue →
        </Button>

      </div>
    </div>
  );
}