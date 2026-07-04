import { api } from "@/lib/api";

export interface Customer {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
}

export interface CreateCustomerData {
  full_name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
}

export async function getCustomers(): Promise<Customer[]> {
  const response = await api.get("/customers/");
  return response.data;
}

export async function createCustomer(
  data: CreateCustomerData
): Promise<Customer> {
  const response = await api.post("/customers/", data);
  return response.data;
}

export async function updateCustomer(
  id: number,
  data: CreateCustomerData
): Promise<Customer> {
  const response = await api.put(`/customers/${id}`, data);
  return response.data;
}

export async function deleteCustomer(id: number): Promise<void> {
  await api.delete(`/customers/${id}`);
}

export async function getCustomer(
  id: number
): Promise<Customer> {
  const response = await api.get(`/customers/${id}`);
  return response.data;
}