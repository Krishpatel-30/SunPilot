"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";

const registerSchema = z
  .object({
    full_name: z.string().min(2, "Full name is required"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: RegisterFormData) {
    try {
      await api.post("/auth/register", {
        full_name: data.full_name,
        email: data.email,
        password: data.password,
      });

      alert("Registration Successful!");

      router.push("/login");
    } catch (error: any) {
      alert(
        error?.response?.data?.detail || "Registration failed"
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Full Name
        </label>

        <Input
          placeholder="John Doe"
          {...register("full_name")}
        />

        {errors.full_name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.full_name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <Input
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Password
        </label>

        <Input
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />

        {errors.password && (
          <p className="mt-2 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Confirm Password
        </label>

        <Input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-amber-600 hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}