"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ProjectForm from "./ProjectForm";

import {
  Project,
  updateProject,
} from "@/lib/project-api";

import {
  ProjectFormData,
} from "./project-schema";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
  onSuccess: () => void;
}

export default function EditProjectDialog({
  open,
  onOpenChange,
  project,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  // Don't render if no project is selected
  if (!project) return null;

  // TypeScript now knows this is a Project
  const currentProject = project;

  const defaultValues: ProjectFormData = {
    customer_id: currentProject.customer_id,
    project_name: currentProject.project_name,
    project_type: currentProject.project_type,
    roof_type: currentProject.roof_type,
    monthly_bill: currentProject.monthly_bill,
    address: currentProject.address ?? "",
    city: currentProject.city ?? "",
    state: currentProject.state ?? "",
    country: currentProject.country ?? "",
    status: currentProject.status,
  };

  async function handleSubmit(
    data: ProjectFormData
  ): Promise<void> {
    try {
      setLoading(true);

      await updateProject(
        currentProject.id,
        data
      );

      onSuccess();
      onOpenChange(false);

    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.detail ??
        "Failed to update project."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Edit Project
          </DialogTitle>
        </DialogHeader>

        <ProjectForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
}