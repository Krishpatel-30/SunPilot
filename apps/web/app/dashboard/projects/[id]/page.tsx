"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import {
  Project,
  getProject,
} from "@/lib/project-api";

import ImageUpload from "@/components/projects/ImageUpload";
import ImageGallery from "@/components/projects/ImageGallery";

export default function ProjectDetailsPage() {
  const params = useParams();

  const projectId = Number(params.id);

  const [project, setProject] = useState<Project | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    try {
      const data = await getProject(projectId);
      setProject(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!project) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="rounded-xl bg-white p-6 shadow">

          <h1 className="text-3xl font-bold">
            {project.project_name}
          </h1>

          <p className="mt-2 text-slate-500">
            {project.project_type}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6">

            <div>
              <h3 className="font-semibold">
                Roof Type
              </h3>

              <p>{project.roof_type}</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Monthly Bill
              </h3>

              <p>₹ {project.monthly_bill}</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Status
              </h3>

              <p>{project.status}</p>
            </div>

            <div>
              <h3 className="font-semibold">
                City
              </h3>

              <p>{project.city}</p>
            </div>

          </div>

        </div>

        <ImageUpload
          projectId={project.id}
          onUploadComplete={() =>
            setRefreshKey((prev) => prev + 1)
          }
        />

        <ImageGallery
          projectId={project.id}
          refreshKey={refreshKey}
        />

      </div>
    </DashboardLayout>
  );
}