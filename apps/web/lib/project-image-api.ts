import { api } from "@/lib/api";

export interface ProjectImage {
  id: number;
  project_id: number;
  filename: string;
  filepath: string;
  uploaded_at: string;
}

export async function getProjectImages(
  projectId: number
): Promise<ProjectImage[]> {
  const response = await api.get(
    `/project-images/${projectId}`
  );

  return response.data;
}

export async function uploadProjectImage(
  projectId: number,
  file: File
): Promise<ProjectImage> {
  const formData = new FormData();

  formData.append("image", file);

  const response = await api.post(
    `/project-images/${projectId}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

export async function deleteProjectImage(
  imageId: number
): Promise<void> {
  await api.delete(`/project-images/${imageId}`);
}