import { Button } from "@/components/ui/button";
import {
  Plus,
  Users,
  Upload,
  FileText,
} from "lucide-react";

const actions = [
  {
    title: "New Project",
    icon: Plus,
  },
  {
    title: "Add Customer",
    icon: Users,
  },
  {
    title: "Upload Roof",
    icon: Upload,
  },
  {
    title: "Generate Proposal",
    icon: FileText,
  },
];

export default function QuickActions() {
  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.title}
              variant="outline"
              className="flex h-24 flex-col items-center justify-center gap-3 rounded-xl hover:bg-amber-50 hover:border-amber-400"
            >
              <Icon className="h-7 w-7 text-amber-500" />
              {action.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}