import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <div className="mb-6 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
          ☀ AI Copilot for Solar Installers
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
          Design Solar Systems
          <span className="block text-amber-500">
            In Minutes.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          AI-powered software for solar installers to create proposals,
          calculate energy generation, estimate ROI, and close more deals
          in a fraction of the time.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600"
          >
            Start Free Trial
          </Button>

          <Button
            size="lg"
            variant="outline"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
}