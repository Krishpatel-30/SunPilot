"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CustomerTable from "../../../components/customers/CustomerTable";
import AddCustomerDialog from "../../../components/customers/AddCustomerDialog";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CustomersPage() {
  const [open, setOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Customers
            </h1>

            <p className="mt-1 text-slate-500">
              Manage all your customers.
            </p>
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="bg-amber-500 hover:bg-amber-600"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <CustomerTable refreshKey={refreshKey} />

        <AddCustomerDialog
          open={open}
          onOpenChange={setOpen}
          onSuccess={() => setRefreshKey((prev) => prev + 1)}
        />
      </div>
    </DashboardLayout>
  );
}