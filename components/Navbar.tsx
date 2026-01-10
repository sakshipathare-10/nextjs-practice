import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FoodStore</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Categories</li>
        <li className="cursor-pointer hover:underline">Restaurants</li>
      </ul>
    </nav>
  );
}
