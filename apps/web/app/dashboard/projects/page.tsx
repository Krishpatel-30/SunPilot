"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProjectTable from "@/components/projects/ProjectTable";
import AddProjectDialog from "@/components/projects/AddProjectDialog";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Projects
            </h1>

            <p className="mt-1 text-slate-500">
              Manage all your solar projects.
            </p>
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="bg-amber-500 hover:bg-amber-600"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </div>

        <ProjectTable refreshKey={refreshKey} />

        <AddProjectDialog
          open={open}
          onOpenChange={setOpen}
          onSuccess={() => setRefreshKey((prev) => prev + 1)}
        />
      </div>
    </DashboardLayout>
  );
}