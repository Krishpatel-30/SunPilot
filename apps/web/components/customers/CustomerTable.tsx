"use client";

import { useEffect, useState } from "react";

import {
  Customer,
  getCustomers,
  deleteCustomer,
} from "@/lib/customer-api";

import EditCustomerDialog from "./EditCustomerDialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  refreshKey: number;
}

export default function CustomerTable({
  refreshKey,
}: Props) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  const [editOpen, setEditOpen] = useState(false);

  async function loadCustomers() {
    try {
      setLoading(true);

      const data = await getCustomers();

      setCustomers(data);
      setFilteredCustomers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, [refreshKey]);

  useEffect(() => {
    const filtered = customers.filter((customer) => {
      return (
        customer.full_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        customer.email
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        customer.phone.includes(search)
      );
    });

    setFilteredCustomers(filtered);
  }, [search, customers]);

  async function handleDelete(id: number) {
    if (!confirm("Delete this customer?")) return;

    try {
      await deleteCustomer(id);

      loadCustomers();
    } catch (error) {
      console.error(error);

      alert("Failed to delete customer.");
    }
  }

  function handleEdit(customer: Customer) {
    setSelectedCustomer(customer);
    setEditOpen(true);
  }

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        Loading customers...
      </div>
    );
  }

  return (
    <>
      <div className="rounded-xl bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold">
            Customer List
          </h2>

          <Input
            placeholder="Search customer..."
            className="max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-left">Email</th>
              <th className="py-3 text-left">Phone</th>
              <th className="py-3 text-left">City</th>
              <th className="py-3 text-right">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredCustomers.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-slate-500"
                >
                  No customers found.
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b"
                >
                  <td className="py-4">
                    {customer.full_name}
                  </td>

                  <td>{customer.email}</td>

                  <td>{customer.phone}</td>

                  <td>{customer.city}</td>

                  <td className="space-x-2 text-right">

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleEdit(customer)
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() =>
                        handleDelete(customer.id)
                      }
                    >
                      Delete
                    </Button>

                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

      <EditCustomerDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        customer={selectedCustomer}
        onSuccess={loadCustomers}
      />
    </>
  );
}