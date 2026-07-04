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

  if (!project) return null;

  const defaultValues: ProjectFormData = {
    customer_id: project.customer_id,
    project_name: project.project_name,
    project_type: project.project_type,
    roof_type: project.roof_type,
    monthly_bill: project.monthly_bill,
    address: project.address ?? "",
    city: project.city ?? "",
    state: project.state ?? "",
    country: project.country ?? "",
    status: project.status,
  };

  async function handleSubmit(
    data: ProjectFormData
  ) {
    try {
      setLoading(true);

      await updateProject(
        project.id,
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