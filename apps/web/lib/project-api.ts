import { api } from "@/lib/api";

export interface Project {
  id: number;
  customer_id: number;
  project_name: string;
  project_type: string;
  roof_type: string;
  monthly_bill: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  status: string;
}

export interface CreateProjectData {
  customer_id: number;
  project_name: string;
  project_type: string;
  roof_type: string;
  monthly_bill: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  status?: string;
}

export async function getProjects(): Promise<Project[]> {
  const response = await api.get("/projects/");
  return response.data;
}

// ✅ ADD THIS FUNCTION
export async function getProject(
  id: number
): Promise<Project> {
  const response = await api.get(`/projects/${id}`);
  return response.data;
}

export async function createProject(
  data: CreateProjectData
): Promise<Project> {
  const response = await api.post("/projects/", data);
  return response.data;
}

export async function updateProject(
  id: number,
  data: CreateProjectData
): Promise<Project> {
  const response = await api.put(`/projects/${id}`, data);
  return response.data;
}

export async function deleteProject(
  id: number
): Promise<void> {
  await api.delete(`/projects/${id}`);
}