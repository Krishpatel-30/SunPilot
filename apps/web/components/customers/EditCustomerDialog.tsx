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

  // Don't render the dialog if no customer is selected
  if (!customer) return null;

  // After the null check, TypeScript knows this is a Customer
  const currentCustomer = customer;

  const defaultValues: CustomerFormData = {
    full_name: currentCustomer.full_name,
    email: currentCustomer.email,
    phone: currentCustomer.phone,
    address: currentCustomer.address ?? "",
    city: currentCustomer.city ?? "",
    state: currentCustomer.state ?? "",
    country: currentCustomer.country ?? "",
    postal_code: currentCustomer.postal_code ?? "",
  };

  async function handleSubmit(
    data: CustomerFormData
  ): Promise<void> {
    try {
      setLoading(true);

      await updateCustomer(
        currentCustomer.id,
        data
      );

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