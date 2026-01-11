"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    alert("Button clicked ✅");

    if (data.email === "admin@gmail.com" && data.password === "123456") {
      localStorage.setItem("token", "dummy-token");
     router.push("/dashboard"); //
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          {...register("email", { required: true })}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">Email required</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        {errors.password && <p className="text-red-500">Password required</p>}

        <button
  type="submit"
  onClick={() => {
    console.log("clicked");
    window.location.href = "/dashboard";
  }}
  className="w-full bg-indigo-600 text-white py-2 rounded"
>
  Go Dashboard
</button>

      </form>
    </div>
  );
}
