"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-indigo-600 text-white">
      <h2 className="text-xl font-bold">FoodStore</h2>

      <button
        onClick={logout}
        className="bg-white text-indigo-600 px-4 py-1 rounded hover:bg-slate-200 transition"
      >
        Logout
      </button>
    </nav>
  );
}
