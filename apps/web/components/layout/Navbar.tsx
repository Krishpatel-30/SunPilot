import Link from "next/link";
import { SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <SunMedium className="h-7 w-7 text-amber-500" />
          <span className="text-xl font-bold tracking-tight">
            SunPilot
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm hover:text-amber-500 transition-colors">
            Features
          </Link>

          <Link href="/pricing" className="text-sm hover:text-amber-500 transition-colors">
            Pricing
          </Link>

          <Link href="/contact" className="text-sm hover:text-amber-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">Login</Button>

          <Button className="bg-amber-500 hover:bg-amber-600">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}