import { ReactNode } from "react";

interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
}

export default function KPICard({
  title,
  value,
  subtitle,
  icon,
}: KPICardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
          <p className="mt-2 text-sm text-green-600">{subtitle}</p>
        </div>

        <div className="rounded-xl bg-amber-100 p-3">
          {icon}
        </div>
      </div>
    </div>
  );
}