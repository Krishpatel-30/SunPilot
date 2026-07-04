import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  CheckCircle,
  Sun,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function AIInsights() {
  return (
    <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <Badge className="bg-amber-500 text-white">
            AI Analysis
          </Badge>

          <h2 className="mt-3 text-2xl font-bold">
            AI Insights
          </h2>

          <p className="text-slate-500">
            Latest project recommendations
          </p>
        </div>

        <Bot className="h-10 w-10 text-amber-500" />
      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500" />
          <span>Roof detected successfully</span>
        </div>

        <div className="flex items-center gap-3">
          <Sun className="text-amber-500" />
          <span>Recommended System: <strong>6.5 kW</strong></span>
        </div>

        <div className="flex items-center gap-3">
          <TrendingUp className="text-blue-500" />
          <span>Estimated ROI: <strong>4.3 Years</strong></span>
        </div>

        <div className="flex items-center gap-3">
          <Zap className="text-yellow-500" />
          <span>Annual Savings: <strong>₹82,000</strong></span>
        </div>

      </div>

      <Button className="mt-8 w-full bg-amber-500 hover:bg-amber-600">
        Generate Proposal
      </Button>
    </div>
  );
}