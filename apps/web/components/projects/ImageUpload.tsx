"use client";

import { useRef, useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { uploadProjectImage } from "@/lib/project-image-api";

interface Props {
  projectId: number;
  onUploadComplete: () => void;
}

export default function ImageUpload({
  projectId,
  onUploadComplete,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File) {
    try {
      setUploading(true);

      await uploadProjectImage(
        projectId,
        file
      );

      onUploadComplete();

    } catch (error) {
      console.error(error);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    handleFile(file);
  }

  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    handleFile(file);
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="rounded-xl border-2 border-dashed border-slate-300 p-10 text-center transition hover:border-amber-500"
    >
      <Upload
        className="mx-auto mb-4 text-amber-500"
        size={48}
      />

      <h3 className="text-xl font-semibold">
        Upload Roof Image
      </h3>

      <p className="mt-2 text-slate-500">
        Drag & Drop or Click Below
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />

      <Button
        className="mt-6 bg-amber-500 hover:bg-amber-600"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
      >
        <ImageIcon className="mr-2 h-4 w-4" />

        {uploading
          ? "Uploading..."
          : "Choose Image"}
      </Button>
    </div>
  );
}