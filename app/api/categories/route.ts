import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    { id: 1, name: "Pizza", image: "/pizza.png" },
    { id: 2, name: "Burger", image: "/burger.png" },
    { id: 3, name: "Biryani", image: "/biryani.png" },
    { id: 4, name: "Dessert", image: "/pizza.png" },
  ];

  return NextResponse.json(categories);
}
