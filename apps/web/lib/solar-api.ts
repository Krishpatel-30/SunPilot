import { api } from "@/lib/api";

export interface SolarAnalysis {
  status: string;
  panel_count: number;
  panel_power: number;
  system_size_kw: number;
  daily_energy: number;
  monthly_energy: number;
  annual_energy: number;
  annual_savings: number;
  payback_years: number;
  layout_image: string;
}

export async function generateSolarLayout(
  projectId: number
): Promise<SolarAnalysis> {

  const response = await api.post(
    `/solar/generate/${projectId}`
  );

  return response.data;
}