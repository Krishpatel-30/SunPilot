"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back 👋
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">
              Customers
            </h2>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">
              Projects
            </h2>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">
              AI Designs
            </h2>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">
              Proposals
            </h2>

            <p className="mt-2 text-3xl font-bold">
              0
            </p>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}