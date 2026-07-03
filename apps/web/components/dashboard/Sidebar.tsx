"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FolderOpen,
  Sun,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderOpen,
  },
  {
    name: "AI Designer",
    href: "/designer",
    icon: Sun,
  },
  {
    name: "Proposals",
    href: "/proposals",
    icon: FileText,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-slate-900 text-white">
      <div className="border-b p-6">
        <h1 className="text-3xl font-bold text-amber-400">
          ☀ SunPilot
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Solar Platform
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
            >
              <Icon size={20} />

              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}