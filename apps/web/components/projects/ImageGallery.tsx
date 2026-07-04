"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import {
  ProjectImage,
  getProjectImages,
  deleteProjectImage,
} from "@/lib/project-image-api";

import { Button } from "@/components/ui/button";

interface Props {
  projectId: number;
  refreshKey: number;
}

export default function ImageGallery({
  projectId,
  refreshKey,
}: Props) {
  const [images, setImages] = useState<ProjectImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages();
  }, [projectId, refreshKey]);

  async function loadImages() {
    try {
      setLoading(true);

      const data = await getProjectImages(projectId);

      setImages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this image?")) return;

    try {
      await deleteProjectImage(id);
      loadImages();
    } catch (error) {
      console.error(error);
      alert("Failed to delete image.");
    }
  }

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        Loading images...
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow">
        No roof images uploaded.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="overflow-hidden rounded-xl border bg-white shadow"
        >
          <img
            src={`http://localhost:8000/${image.filepath.replace("\\", "/")}`}
            alt="Roof"
            className="h-48 w-full object-cover"
          />

          <div className="flex items-center justify-between p-3">
            <span className="truncate text-sm">
              {image.filename}
            </span>

            <Button
              size="icon"
              variant="destructive"
              onClick={() => handleDelete(image.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}