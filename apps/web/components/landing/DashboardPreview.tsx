import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Sun,
  Bell,
  Search,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <Badge className="bg-amber-500 text-white">
            Product Preview
          </Badge>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything in One Dashboard
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Manage customers, projects, AI analysis and proposals from one
            modern workspace.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-2xl">

          <div className="grid lg:grid-cols-[250px_1fr]">

            {/* Sidebar */}
            <aside className="border-r bg-slate-900 p-6 text-white">

              <div className="flex items-center gap-3">
                <Sun className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold">SunPilot</span>
              </div>

              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3 rounded-xl bg-amber-500/20 p-3">
                  <LayoutDashboard size={20} />
                  Dashboard
                </div>

                <div className="flex items-center gap-3 p-3">
                  <Users size={20} />
                  Customers
                </div>

                <div className="flex items-center gap-3 p-3">
                  <FileText size={20} />
                  Proposals
                </div>

                <div className="flex items-center gap-3 p-3">
                  <BarChart3 size={20} />
                  Analytics
                </div>

              </div>

            </aside>

            {/* Main Content */}
            <div>

              <div className="flex items-center justify-between border-b px-8 py-5">

                <div className="flex items-center gap-3 rounded-xl border px-4 py-2 text-slate-500">
                  <Search size={18} />
                  Search projects...
                </div>

                <Bell className="text-slate-500" />
              </div>

              <div className="p-8">

                {/* Stats */}
                <div className="grid gap-6 md:grid-cols-4">

                  {[
                    ["Projects", "128"],
                    ["Customers", "346"],
                    ["Revenue", "₹48L"],
                    ["ROI Avg.", "28%"],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      className="rounded-2xl border p-6"
                    >
                      <p className="text-sm text-slate-500">
                        {title}
                      </p>

                      <h3 className="mt-2 text-3xl font-bold">
                        {value}
                      </h3>
                    </div>
                  ))}

                </div>

                {/* Project Card */}
                <div className="mt-8 rounded-2xl border p-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="text-2xl font-bold">
                        John Villa Residence
                      </h3>

                      <p className="text-slate-500">
                        Surat, Gujarat
                      </p>
                    </div>

                    <Badge className="bg-green-500 text-white">
                      Proposal Ready
                    </Badge>

                  </div>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">

                    <div className="rounded-xl bg-slate-100 p-5">
                      <p className="text-sm text-slate-500">
                        System Size
                      </p>

                      <h4 className="mt-2 text-2xl font-bold">
                        6.5 kW
                      </h4>
                    </div>

                    <div className="rounded-xl bg-slate-100 p-5">
                      <p className="text-sm text-slate-500">
                        Annual Savings
                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-green-600">
                        ₹82,000
                      </h4>
                    </div>

                    <div className="rounded-xl bg-slate-100 p-5">
                      <p className="text-sm text-slate-500">
                        Payback
                      </p>

                      <h4 className="mt-2 text-2xl font-bold">
                        4.3 Years
                      </h4>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}