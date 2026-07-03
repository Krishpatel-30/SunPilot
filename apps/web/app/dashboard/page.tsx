import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KPICard from "@/components/dashboard/KPICard";
import RecentProjects from "@/components/dashboard/RecentProjects";


import {
  FolderOpen,
  Users,
  IndianRupee,
  FileCheck,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <KPICard
          title="Projects"
          value="128"
          subtitle="+12 this month"
          icon={<FolderOpen className="text-amber-500" />}
        />

        <KPICard
          title="Customers"
          value="346"
          subtitle="+18 this month"
          icon={<Users className="text-amber-500" />}
        />

        <KPICard
          title="Revenue"
          value="₹48.2L"
          subtitle="+8.2%"
          icon={<IndianRupee className="text-amber-500" />}
        />

        <KPICard
          title="Proposal Success"
          value="92%"
          subtitle="+5%"
          icon={<FileCheck className="text-amber-500" />}
        />
      </div>

      <RecentProjects />
    </DashboardLayout>

  );
}