"use client";

import { Bell, Search, Sun, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function TopNavbar() {
  return (
    <header className="mb-8 flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back 👋
        </p>
      </div>

      <div className="hidden w-96 items-center gap-2 rounded-xl border px-3 lg:flex">
        <Search className="h-5 w-5 text-slate-400" />
        <Input
          placeholder="Search projects..."
          className="border-0 shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200">
          <Bell className="h-5 w-5" />
        </button>

        <button className="rounded-xl bg-amber-100 p-3">
          <Sun className="h-5 w-5 text-amber-600" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border px-3 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 font-bold text-white">
            K
          </div>

          <div className="hidden md:block">
            <p className="font-semibold">
              Krish
            </p>

            <p className="text-sm text-slate-500">
              Administrator
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-slate-500" />

        </div>

      </div>
    </header>
  );
}