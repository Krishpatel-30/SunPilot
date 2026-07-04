"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CustomerForm from "./CustomerForm";

import {
  Customer,
  updateCustomer,
} from "@/lib/customer-api";

import {
  CustomerFormData,
} from "./customer-schema";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customer: Customer | null;
  onSuccess: () => void;
}

export default function EditCustomerDialog({
  open,
  onOpenChange,
  customer,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  if (!customer) return null;

  const defaultValues: CustomerFormData = {
    full_name: customer.full_name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address ?? "",
    city: customer.city ?? "",
    state: customer.state ?? "",
    country: customer.country ?? "",
    postal_code: customer.postal_code ?? "",
  };

  async function handleSubmit(
    data: CustomerFormData
  ) {
    try {
      setLoading(true);

      await updateCustomer(customer.id, data);

      onSuccess();

      onOpenChange(false);

    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.detail ??
        "Failed to update customer."
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
          <DialogTitle>
            Edit Customer
          </DialogTitle>
        </DialogHeader>

        <CustomerForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          loading={loading}
        />

      </DialogContent>
    </Dialog>
  );
}