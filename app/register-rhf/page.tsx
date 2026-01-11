"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Registered Successfully ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Register (RHF)</h2>

        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", {
            required: "Password required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Register
        </button>
      </form>
    </div>
  );
}
