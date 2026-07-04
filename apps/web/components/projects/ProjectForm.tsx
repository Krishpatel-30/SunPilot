"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  projectSchema,
  ProjectFormData,
} from "./project-schema";

import {
  Customer,
  getCustomers,
} from "@/lib/customer-api";

interface ProjectFormProps {
  defaultValues?: ProjectFormData;
  loading?: boolean;
  onSubmit: (data: ProjectFormData) => Promise<void>;
}

export default function ProjectForm({
  defaultValues,
  loading = false,
  onSubmit,
}: ProjectFormProps) {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema) as any,
    defaultValues,
  });

  useEffect(() => {
    async function loadCustomers() {
      const data = await getCustomers();
      setCustomers(data);
    }

    loadCustomers();
  }, []);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const submit: SubmitHandler<ProjectFormData> = async (data) => {
    await onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-4"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Customer
        </label>

        <Select
          value={watch("customer_id")?.toString()}
          onValueChange={(value) =>
            setValue("customer_id", Number(value))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Customer" />
          </SelectTrigger>

          <SelectContent>
            {customers.map((customer) => (
              <SelectItem
                key={customer.id}
                value={customer.id.toString()}
              >
                {customer.full_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {errors.customer_id && (
          <p className="mt-2 text-sm text-red-500">
            {errors.customer_id.message}
          </p>
        )}
      </div>

      <Input
        placeholder="Project Name"
        {...register("project_name")}
      />

      <Input
        placeholder="Project Type"
        {...register("project_type")}
      />

      <Input
        placeholder="Roof Type"
        {...register("roof_type")}
      />

      <Input
        type="number"
        step="0.01"
        placeholder="Monthly Bill"
        {...register("monthly_bill", {
          valueAsNumber: true,
        })}
      />

      <Input
        placeholder="Address"
        {...register("address")}
      />

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

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={loading}
          className="bg-amber-500 hover:bg-amber-600"
        >
          {loading ? "Saving..." : "Save Project"}
        </Button>
      </div>
    </form>
  );
}