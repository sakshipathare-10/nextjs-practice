import { NextResponse } from "next/server";

export async function GET() {
  const foods = [
    { id: 1, name: "Cheese Pizza", rating: 4.5 },
    { id: 2, name: "Veg Burger", rating: 4.2 },
    { id: 3, name: "Chicken Biryani", rating: 4.8 },
  ];

  return NextResponse.json(foods);
}
