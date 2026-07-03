import { ReactNode } from "react";
import Link from "next/link";
import { SunMedium } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden bg-slate-900 p-16 text-white lg:flex lg:flex-col lg:justify-between">

          <div className="flex items-center gap-3">
            <SunMedium className="h-8 w-8 text-amber-400" />
            <span className="text-3xl font-bold">
              SunPilot
            </span>
          </div>

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              AI Copilot
              <br />
              for Solar Installers
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Design systems faster, generate proposals instantly,
              and grow your solar business.
            </p>

            <div className="mt-12 space-y-5">

              <div>✅ AI Roof Analysis</div>

              <div>✅ Proposal Generator</div>

              <div>✅ ROI Calculator</div>

              <div>✅ Team Collaboration</div>

            </div>
          </div>

          <p className="text-slate-400">
            © 2026 SunPilot
          </p>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8">

          <div className="w-full max-w-md">

            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 lg:hidden"
            >
              <SunMedium className="text-amber-500" />
              <span className="font-bold">
                SunPilot
              </span>
            </Link>

            <h2 className="text-4xl font-bold">
              {title}
            </h2>

            <p className="mt-3 text-slate-600">
              {subtitle}
            </p>

            <div className="mt-10">
              {children}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}