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
import AIAnalysisCard from "@/components/projects/AIAnalysisCard";
import GenerateLayoutButton from "@/components/projects/GenerateLayoutButton";

export default function ProjectDetailsPage() {

  const params = useParams<{ id: string }>();

  const [project, setProject] = useState<Project | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [layoutImage, setLayoutImage] = useState("");

  useEffect(() => {

    if (!params?.id) return;

    const projectId = Number(params.id);

    if (isNaN(projectId)) {
      console.error("Invalid Project ID:", params.id);
      return;
    }

    loadProject(projectId);

  }, [params]);

  async function loadProject(projectId: number) {
    try {
      console.log("Loading Project ID:", projectId);

      const data = await getProject(projectId);

      console.log("Project Response:", data);

      setProject(data);

    } catch (error) {
      console.error("Load Project Error:", error);
    }
  }

  if (!project) {
    return (
      <DashboardLayout>
        <div className="p-8">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Project Information */}
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
              <p>{project.city || "-"}</p>
            </div>

          </div>

        </div>

        {/* Upload Roof Image */}
        <ImageUpload
          projectId={project.id}
          onUploadComplete={() =>
            setRefreshKey((prev) => prev + 1)
          }
        />

        {/* Image Gallery */}
        <ImageGallery
          projectId={project.id}
          refreshKey={refreshKey}
        />

        {/* AI Analysis */}
        <AIAnalysisCard
          projectId={project.id}
        />

        {/* AI Layout */}
        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            AI Solar Layout
          </h2>

          <GenerateLayoutButton
            projectId={project.id}
            onSuccess={(image) =>
              setLayoutImage(image)
            }
          />

          {layoutImage && (
            <div className="mt-8">

              <h3 className="mb-4 text-lg font-semibold">
                Generated Layout
              </h3>

              <img
                src={`http://localhost:8000/${layoutImage}`}
                alt="Solar Layout"
                className="rounded-xl border shadow"
              />

            </div>
          )}

        </div>

      </div>

    </DashboardLayout>
  );
}