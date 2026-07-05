"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { generateSolarLayout } from "@/lib/solar-api";

interface Props {
  projectId: number;
  onSuccess: (image: string) => void;
}

export default function GenerateLayoutButton({
  projectId,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    try {
      setLoading(true);

      const result = await generateSolarLayout(
        projectId
      );

      onSuccess(result.layout_image);

      alert(
        `Generated ${result.panel_count} panels`
      );
    } catch (error) {
      console.error(error);

      alert("Failed to generate layout.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleGenerate}
      disabled={loading}
      className="bg-green-600 hover:bg-green-700"
    >
      {loading
        ? "Generating..."
        : "Generate Solar Layout"}
    </Button>
  );
}