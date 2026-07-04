"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ProjectForm from "./ProjectForm";

import { createProject } from "@/lib/project-api";

import { ProjectFormData } from "./project-schema";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function AddProjectDialog({
  open,
  onOpenChange,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    data: ProjectFormData
  ) {
    try {
      setLoading(true);

      await createProject(data);

      onSuccess();

      onOpenChange(false);

    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.detail ??
          "Failed to create project."
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
            Add Project
          </DialogTitle>
        </DialogHeader>

        <ProjectForm
          onSubmit={handleSubmit}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
}