"use client";

import { useEffect, useState } from "react";

import {
  Project,
  getProjects,
  deleteProject,
} from "@/lib/project-api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  refreshKey: number;
}

export default function ProjectTable({
  refreshKey,
}: Props) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  async function loadProjects() {
    try {
      setLoading(true);

      const data = await getProjects();

      setProjects(data);
      setFilteredProjects(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, [refreshKey]);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.project_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredProjects(filtered);

  }, [search, projects]);

  async function handleDelete(id: number) {
    if (!confirm("Delete this project?")) return;

    try {
      await deleteProject(id);

      loadProjects();

    } catch (error) {
      console.error(error);

      alert("Failed to delete project.");
    }
  }

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Projects
        </h2>

        <Input
          placeholder="Search project..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">Project</th>
            <th className="py-3 text-left">Customer ID</th>
            <th className="py-3 text-left">Type</th>
            <th className="py-3 text-left">Roof</th>
            <th className="py-3 text-left">Status</th>
            <th className="py-3 text-right">Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredProjects.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="py-8 text-center text-slate-500"
              >
                No projects found.
              </td>

            </tr>

          ) : (

            filteredProjects.map((project) => (

              <tr
                key={project.id}
                className="border-b"
              >

                <td className="py-4">
                  {project.project_name}
                </td>

                <td>
                  {project.customer_id}
                </td>

                <td>
                  {project.project_type}
                </td>

                <td>
                  {project.roof_type}
                </td>

                <td>
                  {project.status}
                </td>

                <td className="space-x-2 text-right">

                  <Button
                    size="sm"
                    variant="outline"
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() =>
                      handleDelete(project.id)
                    }
                  >
                    Delete
                  </Button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}