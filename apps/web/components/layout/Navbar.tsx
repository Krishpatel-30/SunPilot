import Link from "next/link";
import { SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <SunMedium className="h-7 w-7 text-amber-500" />

          <span className="text-xl font-bold tracking-tight">
            SunPilot
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#features"
            className="text-sm transition-colors hover:text-amber-500"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-sm transition-colors hover:text-amber-500"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-sm transition-colors hover:text-amber-500"
          >
            FAQ
          </a>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          <Link href="/login">
            <Button variant="ghost">
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button className="bg-amber-500 hover:bg-amber-600">
              Get Started
            </Button>
          </Link>

        </div>

      </div>
    </header>
  );
}