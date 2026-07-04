import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  next: () => void;
}

export default function ProjectDetailsStep({
  next,
}: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Project Information
      </h2>

      <p className="mt-2 text-slate-500">
        Tell us about this project.
      </p>

      <div className="mt-8 space-y-5">

        <Input placeholder="Project Name" />

        <Input placeholder="Installation Address" />

        <Input
          type="number"
          placeholder="Monthly Electricity Bill"
        />

      </div>

      <div className="mt-10 flex justify-end">
        <Button
          onClick={next}
          className="bg-amber-500 hover:bg-amber-600"
        >
          Next →
        </Button>
      </div>
    </div>
  );
}