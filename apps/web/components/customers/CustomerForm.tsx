"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  customerSchema,
  CustomerFormData,
} from "./customer-schema";

interface CustomerFormProps {
  defaultValues?: CustomerFormData;
  onSubmit: (data: CustomerFormData) => Promise<void>;
  loading?: boolean;
}

export default function CustomerForm({
  defaultValues,
  onSubmit,
  loading = false,
}: CustomerFormProps) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >

      <Input
        placeholder="Full Name"
        {...register("full_name")}
      />
      {errors.full_name && (
        <p className="text-sm text-red-500">
          {errors.full_name.message}
        </p>
      )}

      <Input
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-sm text-red-500">
          {errors.email.message}
        </p>
      )}

      <Input
        placeholder="Phone"
        {...register("phone")}
      />
      {errors.phone && (
        <p className="text-sm text-red-500">
          {errors.phone.message}
        </p>
      )}

      <Input
        placeholder="City"
        {...register("city")}
      />

      <Input
        placeholder="State"
        {...register("state")}
      />

      <Input
        placeholder="Country"
        {...register("country")}
      />

      <Input
        placeholder="Postal Code"
        {...register("postal_code")}
      />

      <Textarea
        placeholder="Address"
        {...register("address")}
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={loading}
          className="bg-amber-500 hover:bg-amber-600"
        >
          {loading ? "Saving..." : "Save Customer"}
        </Button>
      </div>

    </form>
  );
}