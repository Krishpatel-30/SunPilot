import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  next: () => void;
  back: () => void;
}

export default function CustomerDetailsStep({
  next,
  back,
}: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        Customer Details
      </h2>

      <p className="mt-2 text-slate-500">
        Enter customer information.
      </p>

      <div className="mt-8 space-y-5">
        <Input placeholder="Customer Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Phone Number" />
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="outline" onClick={back}>
          ← Back
        </Button>

        <Button
          onClick={next}
          className="bg-amber-500 hover:bg-amber-600"
        >
          Next →
        </Button>
      </div>
    </div>
  );
}