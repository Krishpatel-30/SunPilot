"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CustomerForm from "./CustomerForm";
import { createCustomer } from "@/lib/customer-api";
import { CustomerFormData } from "./customer-schema";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function AddCustomerDialog({
  open,
  onOpenChange,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: CustomerFormData) {
    try {
      setLoading(true);

      await createCustomer(data);

      onSuccess();

      onOpenChange(false);
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.detail ||
          "Failed to create customer."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Customer</DialogTitle>
        </DialogHeader>

        <CustomerForm
          onSubmit={handleSubmit}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
}