import { z } from "zod";

export const projectSchema = z.object({
  customer_id: z.coerce.number().min(1, "Customer is required"),

  project_name: z.string().min(2, "Project name is required"),

  project_type: z.string().min(2, "Project type is required"),

  roof_type: z.string().min(2, "Roof type is required"),

  monthly_bill: z.coerce.number().min(0),

  address: z.string().optional(),

  city: z.string().optional(),

  state: z.string().optional(),

  country: z.string().optional(),

  status: z.string().default("Draft"),
});

export type ProjectFormData = z.infer<typeof projectSchema>;