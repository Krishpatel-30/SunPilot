import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sun,
  Zap,
  IndianRupee,
  TrendingUp,
  Download,
} from "lucide-react";

interface Props {
  back: () => void;
}

export default function ProposalStep({ back }: Props) {
  return (
    <div>
      <Badge className="bg-green-600 text-white">
        AI Analysis Complete
      </Badge>

      <h2 className="mt-4 text-3xl font-bold">
        Proposal Preview
      </h2>

      <p className="mt-2 text-slate-500">
        AI has generated the recommended solar system.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-xl border p-6">
          <Sun className="mb-3 text-amber-500" />
          <p className="text-slate-500">System Size</p>
          <h3 className="text-3xl font-bold">6.5 kW</h3>
        </div>

        <div className="rounded-xl border p-6">
          <Zap className="mb-3 text-yellow-500" />
          <p className="text-slate-500">Panels Required</p>
          <h3 className="text-3xl font-bold">16 Panels</h3>
        </div>

        <div className="rounded-xl border p-6">
          <IndianRupee className="mb-3 text-green-600" />
          <p className="text-slate-500">Annual Savings</p>
          <h3 className="text-3xl font-bold">₹82,000</h3>
        </div>

        <div className="rounded-xl border p-6">
          <TrendingUp className="mb-3 text-blue-500" />
          <p className="text-slate-500">Payback</p>
          <h3 className="text-3xl font-bold">4.3 Years</h3>
        </div>

      </div>

      <div className="mt-10 flex justify-between">

        <Button
          variant="outline"
          onClick={back}
        >
          ← Back
        </Button>

        <Button className="bg-amber-500 hover:bg-amber-600">
          <Download className="mr-2 h-4 w-4" />
          Download Proposal
        </Button>

      </div>
    </div>
  );
}