import { Button } from "@/components/ui/button";
import { Upload, ImageIcon } from "lucide-react";
interface Props {
  next: () => void;
  back: () => void;
}

export default function RoofUploadStep({
  next,
  back,
}: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Upload Roof Image
      </h2>

      <p className="mt-2 text-slate-500">
        Upload a satellite image or roof photo for AI analysis.
      </p>

      <div className="mt-8">

        <label
          htmlFor="roof-upload"
          className="flex h-72 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 transition hover:border-amber-500 hover:bg-amber-50"
        >
          <Upload className="h-14 w-14 text-amber-500" />

          <h3 className="mt-4 text-xl font-semibold">
            Drag & Drop Roof Image
          </h3>

          <p className="mt-2 text-slate-500">
            or click to browse
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <ImageIcon className="h-4 w-4" />
            PNG • JPG • JPEG
          </div>

          <input
            id="roof-upload"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>

      </div>

      <div className="mt-10 flex justify-between">

        <Button
          variant="outline"
          onClick={back}
        >
          ← Back
        </Button>

        <Button
          onClick={next}
          className="bg-amber-500 hover:bg-amber-600"
        >
          Analyze Roof →
        </Button>

      </div>
    </div>
  );
}