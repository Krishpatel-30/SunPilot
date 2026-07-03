export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold text-amber-400">
            ☀ SunPilot
          </h3>

          <p className="mt-2 text-slate-400">
            AI Copilot for Solar Installers.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 SunPilot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}